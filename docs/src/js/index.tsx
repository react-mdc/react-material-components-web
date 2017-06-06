import "./compat";

import "app/style/index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

import MainRouter from "./routes";

import "codemirror/lib/codemirror.css";

import "codemirror/mode/jsx/jsx";
import "codemirror/mode/shell/shell";

const element = document.getElementById("root");
ReactDOM.render(<MainRouter />, element, () => { });
