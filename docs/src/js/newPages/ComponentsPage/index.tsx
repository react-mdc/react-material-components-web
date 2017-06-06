import * as React from "react";

import * as classNames from "classnames";

import Button from "@react-mdc/button";
import LayoutGrid from "@react-mdc/layout-grid";
import Ripple from "@react-mdc/ripple";
import Theme from "@react-mdc/theme";
import Typography from "@react-mdc/typography";

import DarkTheme from "app/js/components/DarkTheme";
import * as styles from "./styles.scss";

function GettingStarted() {
    return (
        <div />
    );
}

function Welcome() {
    return (
        <DarkTheme className={styles["welcome"]}>
            <LayoutGrid>
                <LayoutGrid.Cell span={6}>
                    <Typography.Display1>
                        React Material Components for the Web
                        </Typography.Display1>
                    <Typography.Headline>
                        React wrapper of Google's Material Components for the Web
                        </Typography.Headline>
                    <Ripple.Meta>
                        <Button>Components</Button>
                    </Ripple.Meta>
                    <Ripple.Meta>
                        <Button>Documentation</Button>
                    </Ripple.Meta>
                </LayoutGrid.Cell>
                <LayoutGrid.Cell span={6} />{/* Placeholder */}
             </LayoutGrid>
        </DarkTheme>
    );
}

export default function ComponentsPage() {
    return (
        <div className={styles["flex"]}>
            <Welcome />
            <GettingStarted />
        </div>
    );
}
