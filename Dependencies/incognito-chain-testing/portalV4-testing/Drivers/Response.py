import json
import re
from abc import ABC

from websocket import WebSocketTimeoutException, WebSocketBadStatusException

import Helpers.Logging as Log
from Configs.Constants import ChainConfig
from Helpers.Logging import INFO, WARNING
from Helpers.Time import WAIT
from Objects.TransactionObjects import TransactionDetail


class Response:
    def __init__(self, response=None, more_info=None, handler=None):
        self.response = response
        self.more_info = more_info
        if more_info is not None:
            Log.DEBUG(more_info)
        if response is not None:
            Log.DEBUG(self.__str__())
        if handler:
            self.__handler = handler
        else:
            from Objects.IncognitoTestCase import SUT
            self.__handler = SUT()

    def __str__(self):
        return f'\n{json.dumps(self.data(), indent=3)}'

    def req_to(self, node):
        self.__handler = node

    def expect_no_error(self, additional_msg_if_fail=''):
        """
        @param additional_msg_if_fail: the name says it all
        @return:
        """
        assert self.get_error_msg() is None, f'{self.get_error_trace().get_message()}\n{additional_msg_if_fail}'
        return self

    def expect_error(self, expecting_error='any error'):
        if expecting_error == 'any error':
            INFO(self.get_error_trace().get_message())
            assert self.get_error_msg() is not None, \
                f'Found no error while expecting: {expecting_error}'
        else:
            trace_msg = self.get_error_trace().get_message()
            error_msg = self.get_error_msg()
            INFO(trace_msg)
            assert (expecting_error in error_msg or expecting_error in trace_msg), \
                f'Expecting: {expecting_error}. Instead got: {error_msg} | {trace_msg}'
        return self

    def data(self):
        try:
            if type(self.response) is str:
                return json.loads(self.response)  # response from WebSocket
            return json.loads(self.response.text)  # response from rpc
        except Exception as e:
            print(f'+++ {self.response.text} \n {e}')

    def params(self):
        return Response.Params(self.data()["Params"])

    def size(self):
        if self.response is str:  # response from WebSocket
            return len(self.response)
        return len(self.response.content)  # response from rpc

    def response_time(self):
        if self.response is str:  # response from WebSocket
            return None
        return self.response.elapsed.total_seconds()  # response from rpc

    def get_error_trace(self):
        if self.data()['Error'] is None:
            return None
        return Response.StackTrace(self.data()['Error']['StackTrace'][0:512])

    def get_error_msg(self):
        if self.data()['Error'] is None:
            return None
        return self.data()['Error']['Message']

    def find_in_result(self, string):
        for k, v in self.data()["Result"].items():
            if k == str(string):
                return True
        return False

    def get_result(self, string=None):
        try:
            if string is None:
                return self.data()['Result']
            return self.data()['Result'][string]
        except(KeyError, TypeError):
            return None

    def get_tx_id(self):
        return self.get_result("TxID")

    def get_beacon_height(self):
        return self.get_result("BeaconHeight")

    def get_token_id_1_str(self):
        return self.get_result("TokenID1Str")

    def get_token_id_2_str(self):
        return self.get_result("TokenID2Str")

    def get_token_id(self):
        return self.get_result("TokenID")

    def get_returned_1_amount(self):
        return self.get_result("Returned1Amount")

    def get_returned_2_amount(self):
        return self.get_result("Returned2Amount")

    def get_contributed_1_amount(self):
        return self.get_result("Contributed1Amount")

    def get_contributed_2_amount(self):
        return self.get_result("Contributed2Amount")

    def get_fee(self):
        try:
            return self.get_result('Result')['Fee']
        except (KeyError, TypeError):
            return self.get_result('Fee')

    def get_tx_size(self):
        try:
            return self.get_result()['TxSize']
        except (KeyError, TypeError):
            return self.get_result('Result')['TxSize']

    def get_custom_token_privacy(self):
        return self.get_result("PrivacyCustomTokenIsPrivacy")

    def get_block_height(self):
        return self.get_result("BlockHeight")

    def get_tx_hashes(self):
        # for retrieveblockbyheight database v1
        ret = self.get_result("TxHashes")
        if ret is None:
            # for retrieveblockbyheight database v2
            ret = self.get_result()[0]["TxHashes"]
        return ret

    def get_list_txs(self):
        return self.get_result("ListTxs")

    def get_block_hash(self):
        return self.get_result("BlockHash")

    def get_shard_id(self):
        return self.get_result('ShardID')

    def is_node_busy(self):
        return self.response.text == "503 Too busy.  Try again later."

    # !!!!!!!! Next actions base on response
    def subscribe_transaction(self, tx_id=None):
        """
        @deprecated: consider using get_transaction_by_hash instead

        Subscribe transaction by tx_id
        :param tx_id: if not specified, use tx id from self
        :return: TransactionDetail Object
        """
        if tx_id is None:
            tx_id = self.expect_no_error().get_tx_id()
        if tx_id is None:
            raise ValueError("Tx id must not be none")
        INFO(f'Subscribe to transaction tx_id = {tx_id}')
        from Objects.TransactionObjects import TransactionDetail
        try:
            res = self.__handler.subscription().subscribe_pending_transaction(tx_id).get_result('Result')
            return TransactionDetail(res)
        except WebSocketTimeoutException:
            WARNING("Encounter web socket timeout exception. Now get transaction by hash instead")
            return self.get_transaction_by_hash(tx_id, retry=False)
        except (WebSocketBadStatusException,
                ConnectionRefusedError) as status_err:  # in case full node does not have web socket enabled
            WARNING(f"Encounter web socket bad status exception: {status_err}. Now get transaction by hash instead")
            return self.get_transaction_by_hash(tx_id, retry=True)

    def is_transaction_v2_error_appears(self):
        try:
            stack_trace_msg = self.get_error_trace().get_message()
        except AttributeError:
            return False
        # if 'error calling MarshalJSON for type *transaction.TxTokenVersion2' in stack_trace_msg:
        if 'Init tx token fee params error' in stack_trace_msg:
            INFO('Transaction v2 no longer support paying fee with token')
            return True

    def get_transaction_by_hash(self, tx_hash=None, retry=True, interval=ChainConfig.BLOCK_TIME,
                                time_out=120) -> TransactionDetail:
        """
        @param tx_hash:
        @param retry: if True, try when got error in Response or block height = 0
        @param interval:
        @param time_out:
        @return: TransactionDetail, use TransactionDetail.is_none() to check if it's an empty object
        """
        if tx_hash is None:
            tx_hash = self.expect_no_error().get_tx_id()
        if tx_hash is None:
            raise ValueError("Tx id must not be none")

        tx_detail = self.__handler.transaction().get_tx_by_hash(tx_hash)
        if not retry:
            if tx_detail.get_error_msg():
                return TransactionDetail()
            else:
                return TransactionDetail(tx_detail.get_result())

        while time_out > 0:
            if not tx_detail.get_error_msg() and tx_detail.get_result('BlockHeight'):
                return TransactionDetail(tx_detail.get_result())
            time_out -= interval
            WAIT(interval)
            tx_detail = self.__handler.transaction().get_tx_by_hash(tx_hash)
        return TransactionDetail()

    def get_trade_tx_status(self, tx_hash=None):
        """
        @param tx_hash: tx hash of trade request tx
        @return: Status.Dex.Trading.ACCEPTED
        """
        tx_hash = self.expect_no_error().get_tx_id() if tx_hash is None else tx_hash
        try:
            return self.__handler.dex().get_trade_status(tx_hash).get_result()
        except KeyError:
            pass

    def get_mem_pool_transactions_id_list(self) -> list:
        hashes = self.get_list_txs()
        if hashes is None:
            return []
        tx_id_list = list()
        for entry in hashes:
            tx_id_list.append(entry['TxID'])
        return tx_id_list

    def get_created_proof(self):
        """
        get proof created by RPC "createtransaction"
        @return:
        """
        return self.get_result("Base58CheckData")

    class StackTrace:
        def __init__(self, stack_string):
            self.stack_string = stack_string

        def __str__(self):
            return self.stack_string

        def get_error_codes(self):
            code_list = re.findall("(-[0-9]\\w+: )", self.stack_string)
            return ''.join([str(elem) for elem in code_list])

        def get_message(self):
            try:
                i_start = len(self.get_error_codes())
                i_end = str.index(self.stack_string, 'github.com')
                return str(self.stack_string[i_start:i_end])
            except ValueError:
                return str(self.stack_string)

        def get_estimated_fee(self):
            return re.search("fee=(.*)", self.stack_string).group(1)

    class Params:
        def __init__(self, data):
            self.data = data

        def get_beacon_height(self):
            return int(self.data[0]["BeaconHeight"])

        def get_portal_redeem_req_id(self):
            return self.data[4]["UniqueRedeemID"]

        def get_portal_register_id(self):
            return self.data[4]['UniqueRegisterId']

        def get_portal_porting_fee(self):
            return int(self.data[4]['PortingFee'])

        def get_portal_register_amount(self):
            return int(self.data[4]['RegisterAmount'])

        def get_portal_redeem_amount(self):
            return int(self.data[4]['TokenAmount'])

        def get_portal_redeem_fee(self):
            return int(self.data[4]['RedeemFee'])


class ResponseExtractor(ABC):
    def __init__(self, response):
        if type(response) is not Response:
            raise TypeError(f'Input must be a Drivers.Response.Response, not {type(response)}')
        self.info_obj_list = []

    def __len__(self):
        return len(self.info_obj_list)

    def __iter__(self):
        self.__current_index = 0
        return iter(self.info_obj_list)

    def __next__(self):
        if self.__current_index >= len(self.info_obj_list):
            raise StopIteration
        else:
            self.__current_index += 1
            return self[self.__current_index]

    def __getitem__(self, item):
        return self.info_obj_list[item]

    def _extract_dict_info_obj(self, response, key_to_extract, Class):
        """
        Extract info in Response result into a list of Objects, this method will take pieces of info from Response
        object to convert info object
        this method only works when Response.get_result(key_to_extract) return a list
        @param response: Input Response to extract
        @param key_to_extract: assume Response's result is dict, this key is the field of the dict which you want to
        extract info from
        @param Class: Class of which each element of the object list belong to
        @return:
        """
        for raw_tok_info in response.get_result(key_to_extract):
            obj = Class(raw_tok_info)
            self.info_obj_list.append(obj)