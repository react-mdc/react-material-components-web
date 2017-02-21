/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import MainRouter from './routes';

import 'material-components-web/dist/material-components-web.css';
import '../style/index.css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/shell/shell';

let element = document.getElementById('root');
ReactDOM.render(<MainRouter />, element);
