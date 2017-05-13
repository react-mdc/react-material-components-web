import "./compat";

import * as React from "react";
import * as ReactDOM from "react-dom";

import MainRouter from "./routes";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "material-components-web/dist/material-components-web.css";

import "codemirror/mode/jsx/jsx";
import "codemirror/mode/shell/shell";

import "../style/index.css";

const element = document.getElementById("root");
ReactDOM.render(<MainRouter />, element, () => { });
