import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.scss";

export default class Item extends React.Component<React.HTMLProps<HTMLSpanElement>, {}> {
    public render() {
        let {
            className,
            ...props,
        } = this.props;
        className = classNames(styles["showcase-item"], className);

        return (
            <span className={className} {...props} />
        );
    }
}
