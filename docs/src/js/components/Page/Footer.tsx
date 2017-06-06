import * as React from "react";

import * as classNames from "classnames";
import { Link } from "react-router";

import Theme from "@react-mdc/theme";
import Typography from "@react-mdc/typography";

import Responsive from "./Responsive";

import * as styles from "./styles.scss";

export default class Footer extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    public render() {
        let {
            className,
            children,
            ...props,
        } = this.props;
        className = classNames(styles["footer"], className);

        return (
            <div className={className} {...props}>
                <Responsive className={styles["footer-content"]}>
                    React Material Components Web
                    {children}
                    <div className={styles["footer-made-with"]}>
                        <Theme.Meta textColor="primary" onColor="light">
                            <Typography.Text.Meta textStyle="caption">
                                <Link to="/new/">
                                    Made with React Material Components Web
                                </Link>
                            </Typography.Text.Meta>
                        </Theme.Meta>
                    </div>
                </Responsive>
            </div>
        );
    }
}
