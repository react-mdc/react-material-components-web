import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Drawer from "@react-mdc/drawer";
import { SELECTED_CLASS_NAME } from "@react-mdc/drawer/lib/Temporary/constants";
import List from "@react-mdc/list";

import * as styles from "./styles.scss";

function MenuItem(props) {
    return (
        <List.Item.Meta>
            <Link activeClassName={SELECTED_CLASS_NAME} {...props} />
        </List.Item.Meta >
    );
}

export default class MainDrawer extends React.Component<{}, {}> {
    public props: {
        className?: string,
    };

    public render() {
        let {
            className,
            ...props,
        } = this.props;
        className = classNames(styles["drawer"], className);
        return (
            <Drawer.Permanent className={className} {...props}>
                <Drawer.Permanent.Content>
                    {this.renderMenu()}
                </Drawer.Permanent.Content>
            </Drawer.Permanent>
        );
    }

    private renderMenu() {
        return (
            <List.Group>
                <List.Meta>
                    <div>
                        <MenuItem to="/" onlyActiveOnIndex>
                            Home
                        </MenuItem>
                        <List.Divider />
                        <MenuItem to="/basics">
                            Basics
                        </MenuItem>
                        <MenuItem to="/button">
                            Button
                        </MenuItem>
                        <MenuItem to="/card">
                            Card
                        </MenuItem>
                        <MenuItem to="/checkbox">
                            Checkbox
                        </MenuItem>
                        <MenuItem to="/dialog">
                            Dialog
                        </MenuItem>
                        <MenuItem to="/elevation">
                            Elevation
                        </MenuItem>
                        <MenuItem to="/fab">
                            Fab
                        </MenuItem>
                        <MenuItem to="/form-field">
                            Form Field
                        </MenuItem>
                        <MenuItem to="/layout-grid">
                            Layout Grid
                        </MenuItem>
                        <MenuItem to="/radio">
                            Radio
                        </MenuItem>
                        <MenuItem to="/ripple">
                            Ripple
                        </MenuItem>
                        <MenuItem to="/switch">
                            Switch
                        </MenuItem>
                        <MenuItem to="/textfield">
                            Textfield
                        </MenuItem>
                        <MenuItem to="/typography">
                            Typography
                        </MenuItem>
                        <List.Divider />
                        <MenuItem
                            href="https://github.com/react-mdc/react-material-components-web"
                            target="_blank">
                            GitHub Repository
                        </MenuItem>
                    </div>
                </List.Meta>
            </List.Group>
        );
    }
}
