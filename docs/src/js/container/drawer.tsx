import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import {
    Content,
    PermanentDrawer,
} from "@react-mdc/drawer/lib/permanent";
import { SELECTED_CLASS_NAME } from "@react-mdc/drawer/lib/temporary/constants";
import {
    Divider,
    group,
    item,
    List,
} from "@react-mdc/list";

import * as styles from "./styles.css";

function MenuItem(props) {
    return (
        <item.ListItem.Meta>
            <Link activeClassName={SELECTED_CLASS_NAME} {...props} />
        </item.ListItem.Meta >
    );
}

export default class Drawer extends React.Component<{}, {}> {
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
            <PermanentDrawer className={className} {...props}>
                <Content>
                    {this.renderMenu()}
                </Content>
            </PermanentDrawer>
        );
    }

    private renderMenu() {
        return (
            <group.ListGroup>
                <List.Meta>
                    <div>
                        <MenuItem to="/" onlyActiveOnIndex>
                            Home
                        </MenuItem>
                        <Divider />
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
                        <Divider />
                        <MenuItem
                            href="https://github.com/react-mdc/react-material-components-web"
                            target="_blank">
                            GitHub Repository
                        </MenuItem>
                    </div>
                </List.Meta>
            </group.ListGroup>
        );
    }
}
