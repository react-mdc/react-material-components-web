import * as React from "react";

import { Link } from "react-router";

import { Themed } from "@react-mdc/theme";
import {
    Body2,
    Display2,
    Display3,
    Title,
} from "@react-mdc/typography";

import Code from "app/js/components/code";
import PageContainer from "app/js/components/page-container";

export default class Welcome extends React.Component<{}, {}> {
    public render() {
        return (
            <PageContainer>
                <Themed.Meta color="primary">
                    <Display3>
                        React Material Components Web
                    </Display3>
                </Themed.Meta>
                <Display2>
                    React Components for Material Components Web
                </Display2>
                <Body2>
                    To get start with react-material-components-web
                </Body2>
                <Code
                    mode="shell"
                    value={`npm install --save react-material-components-web`}
                />

                <Title>Links</Title>
                <ul>
                    <li>
                        <Link to="/basics">
                            Basics
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/material-components/material-components-web"
                            target="_blank">
                            Material Components Web
                        </a>
                    </li>
                </ul>
            </PageContainer>
        );
    }
}
