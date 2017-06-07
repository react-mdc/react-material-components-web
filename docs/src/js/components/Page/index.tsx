import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.scss";

import Content from "./Content";
import Footer from "./Footer";
import Responsive from "./Responsive";

export default class Page extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    public static Content = Content;
    public static Footer = Footer;
    public static Responsive = Responsive;

    public render() {
        let {
            className,
            ...props,
        } = this.props;
        className = classNames(styles["page"], className);

        return (
            <div className={className} {...props} />
        );
    }
}
