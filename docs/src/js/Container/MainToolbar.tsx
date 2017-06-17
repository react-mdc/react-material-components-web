import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Toolbar from "@react-mdc/toolbar";

import DarkTheme from "app/js/components/DarkTheme";
import { MaterialIcon } from "app/js/components/Icon";

import * as styles from "./styles.scss";

export type Props = {
    className?: string,
};

export default class MainToolbar extends React.Component<Props, {}> {
    public props: Props;

    public render() {
        return (
            <DarkTheme.Meta>
                <Toolbar className={classNames(this.props.className, styles.toolbar)} fixed>
                    <Toolbar.Row>
                        <Toolbar.Section.Meta align="start">
                            <Link to="/" className={styles["toolbar-title"]}>
                                <MaterialIcon className={styles["toolbar-icon"]}>
                                    layers
                                </MaterialIcon>
                                <Toolbar.Title className={styles["toolbar-title-text"]}>
                                    React Material Components Web
                                </Toolbar.Title>
                            </Link>
                        </Toolbar.Section.Meta>
                    </Toolbar.Row>
                </Toolbar>
            </DarkTheme.Meta>
        );
    }
}
