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
                    <div>
                        <span className={styles["badge"]}>
                            <a href="https://github.com/react-mdc/react-material-components-web"
                                target="_blank">
                                <img src={
                                    "https://img.shields.io/github/stars/" +
                                    "react-mdc/react-material-components-web.svg?style=social&label=Star"
                                }
                                    alt="Github Stars" />
                            </a>
                        </span>
                        <span className={styles["badge"]}>
                            <a href="https://opensource.org/licenses/MIT"
                                target="_blank">
                                <img src="https://img.shields.io/github/license/mashape/apistatus.svg"
                                    alt="MIT License" />
                            </a>
                        </span>
                        <span className={styles["badge"]}>
                            <a href="https://www.npmjs.com/package/react-material-components-web"
                                target="_blank">
                                <img src="https://badge.fury.io/js/react-material-components-web.svg"
                                    alt="NPM Repository" />
                            </a>
                        </span>
                    </div>
                    {children}
                    <div className={styles["footer-made-with"]}>
                        <Theme.Meta textColor="primary" onColor="light">
                            <Typography.Text.Meta textStyle="caption">
                                <Link to="/">
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
