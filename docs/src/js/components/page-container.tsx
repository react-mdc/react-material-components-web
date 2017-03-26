import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.css";

export default function PageContainer(props: { className?: string, [key: string]: any }) {
    let {
        className,
        ...p,
    } = props;
    className = classNames(className, styles["page-container"]);
    return (
        <div className={className} {...p} />
    );
}
