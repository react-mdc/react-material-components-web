/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import MainRouter from './routes';

import '../style/index.css';

let element = document.getElementById('root');
ReactDOM.render(<MainRouter />, element);
