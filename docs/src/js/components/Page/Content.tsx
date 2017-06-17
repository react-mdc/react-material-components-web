import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.scss";

export default class Content extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    public render() {
        let {
            className,
            ...props,
        } = this.props;
        className = classNames(styles["content"], className);

        return (
            <div className={className} {...props} />
        );
    }
}
