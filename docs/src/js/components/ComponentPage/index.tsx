import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Drawer from "@react-mdc/drawer";

import Page from "app/js/components/Page";

import Content from "./Content";

import * as styles from "./styles.scss";

function NavItem(props) {
    return (
        <li>
            <Link {...props} />
        </li>
    );
}

export default class ComponentPage extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    public static Content = Content;

    public render() {
        const {
            ref: _ref,
            children,
            ...props,
        } = this.props;

        return (
            <Page {...props}>
                <Page.Responsive>
                    <Page.Content className={styles["component-page"]}>
                        <Drawer.Permanent className={styles["component-drawer"]}>
                            <Drawer.Permanent.Content>
                                <ul>
                                    <NavItem to="/new/button">
                                        Button
                                    </NavItem>
                                    <NavItem to="/new/card">
                                        Card
                                    </NavItem>
                                    <NavItem to="/new/checkbox">
                                        Checkbox
                                    </NavItem>
                                    <NavItem to="/new/dialog">
                                        Dialog
                                    </NavItem>
                                    <NavItem to="/new/elevation">
                                        Elevation
                                    </NavItem>
                                    <NavItem to="/new/fab">
                                        Fab
                                    </NavItem>
                                    <NavItem to="/new/form-field">
                                        Form Field
                                    </NavItem>
                                    <NavItem to="/new/layout-grid">
                                        Layout Grid
                                    </NavItem>
                                    <NavItem to="/new/radio">
                                        Radio
                                    </NavItem>
                                    <NavItem to="/new/ripple">
                                        Ripple
                                    </NavItem>
                                    <NavItem to="/new/switch">
                                        Switch
                                    </NavItem>
                                    <NavItem to="/new/textfield">
                                        Textfield
                                    </NavItem>
                                    <NavItem to="/new/typography">
                                        Typography
                                    </NavItem>
                                </ul>
                            </Drawer.Permanent.Content>
                        </Drawer.Permanent>
                        {children}
                    </Page.Content>
                </Page.Responsive>
                <Page.Footer />
            </Page>
        );
    }
}
