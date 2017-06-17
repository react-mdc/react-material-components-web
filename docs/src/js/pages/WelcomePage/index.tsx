import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Button from "@react-mdc/button";
import LayoutGrid from "@react-mdc/layout-grid";
import Ripple from "@react-mdc/ripple";
import Theme from "@react-mdc/theme";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import DarkTheme from "app/js/components/DarkTheme";
import Page from "app/js/components/Page";
import * as styles from "./styles.scss";

function Welcome() {
    return (
        <DarkTheme className={styles["welcome"]}>
            <Page.Responsive.Meta>
                <LayoutGrid>
                    <LayoutGrid.Cell span={6}>
                        <Typography.Display1>
                            React Material Components for the Web
                        </Typography.Display1>
                        <Typography.Headline>
                            React wrapper of Google's Material Components for the Web
                        </Typography.Headline>
                        <Theme.Meta textColor="primary" onColor="dark">
                            <Link to="/components" className={styles["welcome-link"]}>
                                Components
                            </Link>
                        </Theme.Meta>
                        <Theme.Meta textColor="primary" onColor="dark">
                            <a href="https://github.com/react-mdc/react-material-components-web"
                                target="_blank"
                                className={styles["welcome-link"]}>
                                Source Code
                            </a>
                        </Theme.Meta>
                    </LayoutGrid.Cell>
                    <LayoutGrid.Cell span={6} />{/* Placeholder */}
                </LayoutGrid>
            </Page.Responsive.Meta>
        </DarkTheme>
    );
}

function GettingStarted() {
    return (
        <Page.Responsive.Meta>
            <Page.Content>
                <Typography.Headline>
                    Getting Started
                </Typography.Headline>
                <Typography.Body2>
                    Get up and running with React Material Components web
                </Typography.Body2>

                <Typography.Title adjustMargin>
                    Installation
                </Typography.Title>
                <Typography.Body2>
                    You can install the whole react-material-components-web components by following
                </Typography.Body2>
                <Code value="$ npm install --save react-material-components-web" mode="shell" />
                <Typography.Body2>
                    To install each components individually
                </Typography.Body2>
                <Code value="$ npm install --save @react-mdc/button" mode="shell" />

                <Typography.Title adjustMargin>
                    Load Stylesheet
                </Typography.Title>
                <Typography.Body2>
                    Since Material Components for Web provides customization by stylesheet,
                    You have to load the stylesheet manually.
                </Typography.Body2>
                <Code value={`import "material-components-web/material-components-web.scss";`} />

                <Typography.Title adjustMargin>
                    Using Components
                </Typography.Title>
                <Typography.Body2>
                    Now you can use components.
                </Typography.Body2>
                <Code value={`
import Button from "@react-mdc/button";

function Example() {
    return (
        <Button raised primary>
            Hello
        </Button>
    )
}
`} />

            </Page.Content>
        </Page.Responsive.Meta>
    );
}

export default function WelcomePage() {
    return (
        <Page className={styles["flex"]}>
            <Welcome />
            <GettingStarted />
            <Page.Footer />
        </Page>
    );
}
