import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FixedGlobalStyle } from 'src/theme';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

require('dotenv').config();

ReactDOM.render(
    <React.StrictMode>
        <FixedGlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
