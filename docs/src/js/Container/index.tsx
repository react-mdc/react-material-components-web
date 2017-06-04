import * as React from "react";

import Toolbar from "@react-mdc/toolbar";

import MainDrawer from "./MainDrawer";
import MainToolbar from "./MainToolbar";

import * as styles from "./styles.css";

export default class Container extends React.Component<{ children?: React.ReactChild }, {}> {
    public render() {
        return (
            <div className={styles.layout}>
                <MainToolbar />
                <Toolbar.FixedToolbarAdjusted className={styles["content-layout"]}>
                    <MainDrawer className={styles["drawer-layout"]} />
                    <div className={styles["inner-layout"]}>
                        {this.props.children}
                    </div>
                </Toolbar.FixedToolbarAdjusted>
            </div>
        );
    }
}
