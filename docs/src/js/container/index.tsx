import * as React from "react";

import { FixedToolbarAdjusted } from "@react-mdc/toolbar";

import Drawer from "./drawer";
import Toolbar from "./toolbar";

import { Children } from "app/js/common/types";

import * as styles from "./styles.css";

export default class Container extends React.Component<{ children?: Children<any> }, {}> {
    public state = {
        drawerOpen: false,
    };

    public render() {
        return (
            <div className={styles.layout}>
                <Drawer
                    onOpenDrawer={this.handleOpenDrawer}
                    onCloseDrawer={this.handleCloseDrawer}
                    open={this.state.drawerOpen} />
                <Toolbar onMenuButtonClick={this.handleMenuButtonClick} />
                <FixedToolbarAdjusted>
                    {this.props.children}
                </FixedToolbarAdjusted>
            </div>
        );
    }

    private handleOpenDrawer = () => {
        this.setState({
            drawerOpen: true,
        });
    }

    private handleCloseDrawer = () => {
        this.setState({
            drawerOpen: false,
        });
    }

    private handleMenuButtonClick = () => {
        this.setState({
            drawerOpen: true,
        });
    }
}
