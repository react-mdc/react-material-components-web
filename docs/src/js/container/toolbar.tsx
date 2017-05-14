import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import {
    Row,
    Section,
    Title,
    Toolbar,
} from "@react-mdc/toolbar";

import { MaterialIcon } from "app/js/components/icon";

import * as styles from "./styles.css";

export type Props = {
    className?: string,
};

export default class MainToolbar extends React.Component<Props, {}> {
    public props: Props;

    public render() {
        return (
            <Toolbar className={classNames(this.props.className, styles.toolbar)} fixed>
                <Row>
                    <Section.Meta align="start">
                        <Link to="/" className={styles["toolbar-title"]}>
                            <MaterialIcon className={styles["toolbar-icon"]}>
                                layers
                            </MaterialIcon>
                            <Title className={styles["toolbar-title-text"]}>
                                React Material Components Web
                            </Title>
                        </Link>
                    </Section.Meta>
                </Row>
            </Toolbar>
        );
    }
}
