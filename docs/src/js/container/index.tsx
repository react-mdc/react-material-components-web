import * as React from "react";

import { FixedToolbarAdjusted } from "@react-mdc/toolbar";

import Drawer from "./drawer";
import Toolbar from "./toolbar";

import { Children } from "app/js/common/types";

import * as styles from "./styles.css";

export default class Container extends React.Component<{ children?: Children<any> }, {}> {
    public render() {
        return (
            <div className={styles.layout}>
                <Toolbar />
                <FixedToolbarAdjusted className={styles["content-layout"]}>
                    <Drawer className={styles["drawer-layout"]} />
                    <div className={styles["inner-layout"]}>
                        {this.props.children}
                    </div>
                </FixedToolbarAdjusted>
            </div>
        );
    }
}
