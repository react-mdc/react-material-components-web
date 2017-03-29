import * as React from "react";

import { Link } from "react-router";

import { Button } from "@react-mdc/button";
import { Themed } from "@react-mdc/theme";
import {
    Body2,
    Caption,
    Display3,
    Display2,
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
                <Caption>
                    Click left-top menu button to open the table of contents.
                </Caption>
                <Body2>
                    To get start with react-material-components-web
                </Body2>
                <Code
                    mode="shell"
                    value={`npm install --save react-material-components-web`}
                />
                <Body2>
                    And you can start tour from
                </Body2>
                <Button.Meta raised primary compact dense>
                    <Link to="/basics">
                        Basics
                    </Link>
                </Button.Meta>
            </PageContainer>
        );
    }
}
