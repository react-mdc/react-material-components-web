import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.css";

export function FullSize(props: { className?: string }) {
    return (
        <div {...props} className={classNames(props.className, styles.fullsize)} />
    );
}

export function CenterFullSize(props: { className?: string }) {
    return (
        <div {...props} className={classNames(props.className, styles.fullsize, styles.center)} />
    );
}

export default FullSize;
