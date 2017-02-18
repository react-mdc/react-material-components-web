/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import MainRouter from './routes';

import 'app/scss/index.scss';

let element = document.getElementById('root');
ReactDOM.render(<MainRouter />, element);
