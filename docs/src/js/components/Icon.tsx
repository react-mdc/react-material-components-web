import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.scss";

export function Pen(props) {
    return (
        <MaterialIcon {...props}>edit</MaterialIcon>
    );
}

export function MaterialIcon(props) {
    let {
        wrap,
        className,
        ...other,
    } = props;
    wrap = wrap || "i";
    className = classNames(
        className,
        styles.icon,
    );
    return React.createElement(wrap, {
        className,
        ...other,
    });
}
