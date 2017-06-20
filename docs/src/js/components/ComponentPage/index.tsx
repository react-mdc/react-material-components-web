import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Drawer from "@react-mdc/drawer";
import Typography from "@react-mdc/typography";

import Page from "app/js/components/Page";

import Content from "./Content";

import * as styles from "./styles.scss";

function NavItem(props) {
    return (
        <li className={styles["component-list-item"]}>
            <Typography.Text.Meta textStyle="subheading2" adjustMargin>
                <Link
                    activeClassName={styles["component-list-item--active"]}
                    {...props} />
            </Typography.Text.Meta>
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
                                <ul className={styles["component-list"]}>
                                    <NavItem to="/button">
                                        Button
                                    </NavItem>
                                    <NavItem to="/card">
                                        Card
                                    </NavItem>
                                    <NavItem to="/checkbox">
                                        Checkbox
                                    </NavItem>
                                    <NavItem to="/dialog">
                                        Dialog
                                    </NavItem>
                                    <NavItem to="/elevation">
                                        Elevation
                                    </NavItem>
                                    <NavItem to="/fab">
                                        FAB
                                    </NavItem>
                                    <NavItem to="/form-field">
                                        Form Field
                                    </NavItem>
                                    <NavItem to="/layout-grid">
                                        Layout Grid
                                    </NavItem>
                                    <NavItem to="/radio">
                                        Radio
                                    </NavItem>
                                    <NavItem to="/ripple">
                                        Ripple
                                    </NavItem>
                                    <NavItem to="/switch">
                                        Switch
                                    </NavItem>
                                    <NavItem to="/textfield">
                                        Textfield
                                    </NavItem>
                                    <NavItem to="/typography">
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
