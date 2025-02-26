import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import MainRoute from 'src/modules/MainRoute/MainRoute';
import { ThemeProvider, ThemedGlobalStyle } from 'src/theme';
import Header from 'src/components/Header';
import { TooltipContainer } from 'src/modules/Tooltip';
import withApp from './App.enhance';
import './reset.scss';
import 'antd/dist/antd.css';

const history = createBrowserHistory();

const App: React.FunctionComponent = () => {
    return (
        <ThemeProvider>
            <ThemedGlobalStyle />
            <Router history={history}>
                <Header />
                <MainRoute />
                <TooltipContainer />
            </Router>
        </ThemeProvider>
    );
};

export default withApp(React.memo(App));
