import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Button from "@react-mdc/button";
import Elevation from "@react-mdc/elevation";
import LayoutGrid from "@react-mdc/layout-grid";
import Ripple from "@react-mdc/ripple";
import Theme from "@react-mdc/theme";
import Typography from "@react-mdc/typography";

import Page from "app/js/components/Page";
import * as styles from "./styles.scss";

function ComponentItem(props) {
    return (
        <LayoutGrid.Cell.Meta span={6}>
            <Theme.Meta textColor="primary" onColor="light">
                <Ripple.Meta>
                    <Elevation.Meta zSpace={4}>
                        <Link className={styles["component-item"]} {...props} />
                    </Elevation.Meta>
                </Ripple.Meta>
            </Theme.Meta>
        </LayoutGrid.Cell.Meta>
    );
}

function Content() {
    return (
        <Page.Content>
            <Page.Responsive>
                <Typography.Display1 adjustMargin>
                    Components
                </Typography.Display1>
                <LayoutGrid margin={0}>
                    <ComponentItem to="/button">
                        <Typography.Headline adjustMargin>
                            Button
                        </Typography.Headline>
                        <Typography.Body2>
                            Button component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/card">
                        <Typography.Headline adjustMargin>
                            Card
                        </Typography.Headline>
                        <Typography.Body2>
                            Card component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/checkbox">
                        <Typography.Headline adjustMargin>
                            Checkbox
                        </Typography.Headline>
                        <Typography.Body2>
                            Checkbox component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/dialog">
                        <Typography.Headline adjustMargin>
                            Dialog
                        </Typography.Headline>
                        <Typography.Body2>
                            Dialog component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/elevation">
                        <Typography.Headline adjustMargin>
                            Elevation
                        </Typography.Headline>
                        <Typography.Body2>
                            Elevation component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/fab">
                        <Typography.Headline adjustMargin>
                            Fab
                        </Typography.Headline>
                        <Typography.Body2>
                            Fab component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/form-field">
                        <Typography.Headline adjustMargin>
                            Form Field
                        </Typography.Headline>
                        <Typography.Body2>
                            Form Field component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/layout-grid">
                        <Typography.Headline adjustMargin>
                            Layout Grid
                        </Typography.Headline>
                        <Typography.Body2>
                            Layout Grid component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/radio">
                        <Typography.Headline adjustMargin>
                            Radio
                        </Typography.Headline>
                        <Typography.Body2>
                            Radio component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/ripple">
                        <Typography.Headline adjustMargin>
                            Ripple
                        </Typography.Headline>
                        <Typography.Body2>
                            Ripple component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/switch">
                        <Typography.Headline adjustMargin>
                            Switch
                        </Typography.Headline>
                        <Typography.Body2>
                            Switch component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/textfield">
                        <Typography.Headline adjustMargin>
                            Textfield
                        </Typography.Headline>
                        <Typography.Body2>
                            Textfield component
                        </Typography.Body2>
                    </ComponentItem>

                    <ComponentItem to="/typography">
                        <Typography.Headline adjustMargin>
                            Typography
                        </Typography.Headline>
                        <Typography.Body2>
                            Typography component
                        </Typography.Body2>
                    </ComponentItem>
                </LayoutGrid>
            </Page.Responsive>
        </Page.Content>
    );
}

export default function ComponentsPage() {
    return (
        <Page>
            <Content />
            <Page.Footer />
        </Page>
    );
}
