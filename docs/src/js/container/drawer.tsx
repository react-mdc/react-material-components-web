import * as React from "react";
import { Link } from "react-router";

import {
    Content,
    Drawer,
    Header,
    HeaderContent,
    TemporaryDrawer,
} from "@react-mdc/drawer/lib/temporary";
import { SELECTED_CLASS_NAME } from "@react-mdc/drawer/lib/temporary/constants";
import {
    Divider,
    group,
    item,
    List,
} from "@react-mdc/list";
import { Themed } from "@react-mdc/theme";

import * as styles from "./styles.css";

export type Props = {
    onOpenDrawer: () => void,
    onCloseDrawer: () => void,
    open: boolean,
};

function LinkListItem(props) {
    return (
        <item.ListItem.Meta>
            <Link {...props} />
        </item.ListItem.Meta>
    );
}

export default class MainDrawer extends React.Component<Props, {}> {
    public static defaultProps = {
        onOpenDrawer: () => { },
        onCloseDrawer: () => { },
    };

    public render() {
        return (
            <TemporaryDrawer
                className={styles.drawer}
                open={this.props.open}
                onOpenDrawer={this.handleOpenDrawer}
                onCloseDrawer={this.handleCloseDrawer}>
                <Drawer>
                    <Header>
                        <Themed.Meta
                            textColor="primary"
                            onColor="primary"
                            backgroundColor="primary">
                            <HeaderContent.Meta>
                                <Link
                                    className={styles.headerLink}
                                    onClick={this.handleClickHeader}
                                    to="/">
                                    React Material Components Web
                                </Link>
                            </HeaderContent.Meta>
                        </Themed.Meta>
                    </Header>
                    <Content.Meta>
                        <group.ListGroup>
                            {this.renderMenu()}
                        </group.ListGroup>

                    </Content.Meta>
                </Drawer>
            </TemporaryDrawer>
        );
    }

    private renderMenu() {
        return (
            <List.Meta>
                <div>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/basics"
                        onClick={this.handleClickLink}>
                        Basics
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/button"
                        onClick={this.handleClickLink}>
                        Button
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/card"
                        onClick={this.handleClickLink}>
                        Card
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/checkbox"
                        onClick={this.handleClickLink}>
                        Checkbox
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/dialog"
                        onClick={this.handleClickLink}>
                        Dialog
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/elevation"
                        onClick={this.handleClickLink}>
                        Elevation
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/fab"
                        onClick={this.handleClickLink}>
                        Fab
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/form-field"
                        onClick={this.handleClickLink}>
                        Form Field
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/layout-grid"
                        onClick={this.handleClickLink}>
                        Layout Grid
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/radio"
                        onClick={this.handleClickLink}>
                        Radio
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/ripple"
                        onClick={this.handleClickLink}>
                        Ripple
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/switch"
                        onClick={this.handleClickLink}>
                        Switch
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/textfield"
                        onClick={this.handleClickLink}>
                        Textfield
                    </LinkListItem>
                    <LinkListItem
                        activeClassName={SELECTED_CLASS_NAME}
                        to="/typography"
                        onClick={this.handleClickLink}>
                        Typography
                    </LinkListItem>
                    <Divider />
                    <LinkListItem
                        href="https://github.com/Hardtack/react-material-components-web"
                        target="_blank">
                        GitHub Repository
                    </LinkListItem>
                </div>
            </List.Meta>
        );
    }

    private handleOpenDrawer = () => {
        this.props.onOpenDrawer();
    }

    private handleCloseDrawer = () => {
        this.props.onCloseDrawer();
    }

    private handleClickLink = () => {
        this.props.onCloseDrawer();
    }

    private handleClickHeader = () => {
        this.props.onCloseDrawer();
    }
}
