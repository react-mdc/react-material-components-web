import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.css";


export default function Table(props: React.HTMLAttributes<HTMLTableElement>) {
    let {
        className,
        ...p,
    } = props;
    return (
        <table className={classNames(styles.table, className)} {...p} />
    );
}
