import * as React from "react";

import Toolbar from "@react-mdc/toolbar";
import Typography from "@react-mdc/typography";

import MainToolbar from "./MainToolbar";

import * as styles from "./styles.scss";

export default class Container extends React.Component<{ children?: React.ReactChild }, {}> {
    public render() {
        return (
            <Typography className={styles["container"]}>
                <MainToolbar />
                <Toolbar.FixedToolbarAdjusted>
                    {this.props.children}
                </Toolbar.FixedToolbarAdjusted>
            </Typography>
        );
    }
}
