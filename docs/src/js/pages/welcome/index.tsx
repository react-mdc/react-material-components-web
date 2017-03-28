import * as React from "react";

import { Cell } from "@react-mdc/layout-grid";
import {
    Body2,
    Caption,
    Display3,
    Typography,
} from "@react-mdc/typography";

import Code from "app/js/components/code";
import PageContainer from "app/js/components/page-container";
import { Section, SectionTitle } from "app/js/components/section";

export default class Welcome extends React.Component<{}, {}> {
    public render() {
        return (
            <PageContainer>
                <Typography>
                    <Display3>
                        React Material Components Web
                    </Display3>
                    <Section>
                        <SectionTitle>
                            React Components for Material Components Web
                        </SectionTitle>
                        <Cell.Meta span={12}>
                            <Caption>
                                Click left-top menu button to open the table of contents.
                            </Caption>
                        </Cell.Meta>
                    </Section>
                    <Section>
                        <SectionTitle>
                            Getting Start
                        </SectionTitle>
                        <Cell.Meta span={12}>
                            <Body2>
                                To get start with react-material-components-web
                            </Body2>
                        </Cell.Meta>
                        <Cell span={12}>
                            <Code
                                mode="shell"
                                value={`npm install --save react-material-components-web`}
                            />
                        </Cell>
                    </Section>
                </Typography>
            </PageContainer>
        );
    }
}
