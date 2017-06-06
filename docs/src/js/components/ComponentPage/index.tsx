import * as React from "react";

import * as classNames from "classnames";

import Drawer from "@react-mdc/drawer";

import Page from "app/js/components/Page";

import Content from "./Content";

import * as styles from "./styles.scss";

export default class ComponentPage extends React.Component<React.HTMLProps<HTMLDivElement>, {}> {
    public static Content = Content;

    public render() {
        const {
            ref: _ref,
            children,
            ...props,
        } = this.props;

        return (
            <Page.Responsive.Meta>
                <Page {...props}>
                    <Page.Content className={styles["component-page"]}>
                        <Drawer.Permanent className={styles["component-drawer"]}>
                            <Drawer.Permanent.Content>
                                <ul>
                                    <li>Button</li>
                                </ul>
                            </Drawer.Permanent.Content>
                        </Drawer.Permanent>
                        {children}
                    </Page.Content>
                </Page>
            </Page.Responsive.Meta>
        );
    }
}
