import * as React from 'react';
import { connect } from 'react-redux';
import Wallet from 'src/models/wallet';
import { RootState } from 'src/redux/reducers';
import './index.scss';
import { Modal } from 'src/components';
import SendToken from './SendToken';

type Props = {
  wallet: Wallet,
  visible: boolean,
  onClose?: (e: React.MouseEvent<HTMLElement>) => void,
}

const SendCrypto:React.FunctionComponent<Props> = ({
  wallet,
  visible,
  onClose,
}) => (
  <Modal
    visible={visible}
    onCancel={onClose}
  >
    <SendToken
      wallet={wallet}
    />
  </Modal>
);

const mapStateToProps = (state: RootState) => ({
  creating: state.walletReducer.creating,
  loading: state.walletReducer.loading,
  wallet: state.walletReducer.wallet,
  error: state.walletReducer.error,
});

export default connect(mapStateToProps)(SendCrypto);
