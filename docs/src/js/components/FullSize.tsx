import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.scss";

function Center(props: React.HTMLProps<HTMLDivElement>) {
    return (
        <div {...props} className={classNames(props.className, styles.fullsize, styles.center)} />
    );
}

export default class FullSize extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    public static Center = Center;

    public render() {
        return (
            <div {...this.props} className={classNames(this.props.className, styles.fullsize)} />
        );
    }
}
