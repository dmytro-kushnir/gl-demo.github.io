import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import App from './js/containers/AppLogic';
import * as serviceWorker from './js/utils/serviceWorker';
require('dotenv').config();

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
