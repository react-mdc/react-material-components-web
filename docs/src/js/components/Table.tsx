import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.scss";

export default function Table(props: React.HTMLAttributes<HTMLTableElement>) {
    const {
        className,
        ...p,
    } = props;
    return (
        <table className={classNames(styles.table, className)} {...p} />
    );
}
