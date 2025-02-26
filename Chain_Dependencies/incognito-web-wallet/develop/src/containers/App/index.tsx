import * as React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Wallet from 'src/containers/Wallet';
import Landing from 'src/containers/Landing';
import loadWASM from 'src/services/wasm';
import FullScreenLoading from 'src/components/Loading/FullScreenLoading';
import { loadWalletAction } from 'src/redux/actions';
import { RootState } from 'src/redux/reducers';
import { connect } from 'react-redux';

import './index.scss';

type Props = {
  loading: boolean,
  creating: boolean,
  loadWallet: Function,
  wallet: any,
}

const App:React.FunctionComponent<Props> = ({
  loading, wallet, creating, loadWallet,
}) => {
  const [loadedWASM, setLoadedWASM] = React.useState(false);

  React.useEffect(() => {
    const loadWebAssembly = async () => {
      await loadWASM();
      setLoadedWASM(true);
      loadWallet();
    };

    if (!wallet) {
      loadWebAssembly();
    }
  }, [loadWallet]);

  if (!loadedWASM || loading || creating) {
    return <FullScreenLoading />;
  }

  return (
    <div className="App">
      <div className="app-content">
        <Route exact path="/" component={Landing} />
        <Route exact path="/wallet" component={Wallet} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  creating: state.walletReducer.creating,
  loading: state.walletReducer.loading,
  wallet: state.walletReducer.wallet,
  error: state.walletReducer.error,
});

const mapDispatchToProps = {
  loadWallet: loadWalletAction,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
