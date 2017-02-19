/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import MainRouter from './routes';

import '../style/index.css';
import 'material-components-web/dist/material-components-web.css';

let element = document.getElementById('root');
ReactDOM.render(<MainRouter />, element);
