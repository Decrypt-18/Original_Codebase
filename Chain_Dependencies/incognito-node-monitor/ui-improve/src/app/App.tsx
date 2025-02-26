import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import MainRoute from 'src/modules/MainRoute/MainRoute';
import { ThemeProvider, ThemedGlobalStyle } from 'src/theme';
import Header from 'src/components/Header';
import withApp from './App.enhance';
import './reset.scss';

const history = createBrowserHistory();

const App: React.FunctionComponent = () => {
    return (
        <ThemeProvider>
            <ThemedGlobalStyle />
            <Router history={history}>
                <Header />
                <MainRoute />
            </Router>
        </ThemeProvider>
    );
};

export default withApp(React.memo(App));
