import * as React from "react";

import { Link } from "react-router";

import Theme from "@react-mdc/theme";
import {
    Body2,
    Display2,
    Display3,
    Title,
} from "@react-mdc/typography/lib/shortcuts";

import Code from "app/js/components/Code";
import PageContainer from "app/js/components/PageContainer";

export default class Welcome extends React.Component<{}, {}> {
    public render() {
        return (
            <PageContainer>
                <Theme.Meta color="primary">
                    <Display3>
                        React Material Components Web
                    </Display3>
                </Theme.Meta>
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
