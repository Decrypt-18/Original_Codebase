from Helpers.Logging import INFO, INFO_HEADLINE
from Objects.AccountObject import AccountGroup, COIN_MASTER
from Objects.IncognitoTestCase import ACCOUNTS
from Configs.Constants import PBTC_ID, coin
from bitcoincli import Bitcoin

TEST_SETTING_DEPOSIT_AMOUNT = coin(5)
TEST_SETTING_SHIELD_AMOUNT = 100
TEST_SETTING_UNSHIELD_AMOUNT = 500000
TINY_UTXO_AMT = 100000
MULTISIG_ADDRESS = "bcrt1qfgzhddwenekk573slpmqdutrd568ej89k37lmjr43tm9nhhulu0s4twm8c"

host = "127.0.0.1"
port = "18443"
username = "admin"
password = "123123AZ"
buildProofPath = "/Users/admin/Documents/source/txBtcPortal/buildBTCMerkleProof/buildProof"
genOTMPath = "/Users/admin/Documents/source/genOTMultisigAddress/generateOTM"
bitcoinCLI = Bitcoin(username, password, host, port)

# create new wallet only run once
newWallet = bitcoinCLI.createwallet("test")
print(newWallet)



multisig_account = ACCOUNTS[0].set_remote_addr(
    {PBTC_ID: {"prikey": "236bdb27e4cf3ae2eeb9603e623e8476d3c2d86bcc1a26e551907aa66025c758",
               "add_P2SH": "mgdwpAgvYNuJ2MyUimiKdTYsu2vpDZNpAa",
               "add_P2PKH": "xxxxx",
               "add_P2WSH": "yyy",
               "add_P2WPKH": "zzzz"}})

all_users = AccountGroup(
    ACCOUNTS[1].set_remote_addr({PBTC_ID: {"prikey": "236bdb27e4cf3ae2eeb9603e623e8476d3c2d86bcc1a26e551907aa66025c758",
                                           "P2SH": "mgdwpAgvYNuJ2MyUimiKdTYsu2vpDZNpAa",
                                           "P2PKH": "xxxxx",
                                           "P2WSH": "yyy",
                                           "P2WPKH": "zzzz"}}),
    ACCOUNTS[2].set_remote_addr({PBTC_ID: {"prikey": "236bdb27e4cf3ae2eeb9603e623e8476d3c2d86bcc1a26e551907aa66025c758",
                                           "P2SH": "mgdwpAgvYNuJ2MyUimiKdTYsu2vpDZNpAa",
                                           "P2PKH": "xxxxx",
                                           "P2WSH": "yyy",
                                           "P2WPKH": "zzzz"}}),
    ACCOUNTS[3].set_remote_addr({PBTC_ID: {"prikey": "236bdb27e4cf3ae2eeb9603e623e8476d3c2d86bcc1a26e551907aa66025c758",
                                           "P2SH": "mgdwpAgvYNuJ2MyUimiKdTYsu2vpDZNpAa",
                                           "P2PKH": "xxxxx",
                                           "P2WSH": "yyy",
                                           "P2WPKH": "zzzz"}}),
    ACCOUNTS[4].set_remote_addr({PBTC_ID: {"prikey": "236bdb27e4cf3ae2eeb9603e623e8476d3c2d86bcc1a26e551907aa66025c758",
                                           "P2SH": "mgdwpAgvYNuJ2MyUimiKdTYsu2vpDZNpAa",
                                           "P2PKH": "xxxxx",
                                           "P2WSH": "yyy",
                                           "P2WPKH": "zzzz"}}),
)


def setup_module():
    INFO()
    INFO('SETUP TEST MODULE, TOP UP PRV FOR USER')
    COIN_MASTER.top_up_if_lower_than(all_users, TEST_SETTING_DEPOSIT_AMOUNT * 4, TEST_SETTING_DEPOSIT_AMOUNT * 4 + coin(1))

def noteardown_module():
    INFO_HEADLINE(f'TEST MODULE TEAR DOWN ')

def setup_function():
    INFO_HEADLINE('Portal v4 Info before test')
