import * as React from "react";

import {
    Body1,
    Body2,
    Caption,
    Display1,
    Display2,
    Display3,
    Display4,
    Headline,
    Subheading1,
    Text,
    Title,
    Typography,
} from "@react-mdc/typography";

import API from "app/js/api";
import Code from "app/js/components/code";
import PageContainer from "app/js/components/page-container";
import PageTitle from "app/js/components/page-title";
import {
    Demo,
} from "app/js/components/section";
import { stripIgnored } from "app/js/utils/code";

import * as TextExampleCode from "raw-loader!./text.example.tsx";

import * as ShortcutsExampleCode from "raw-loader!./shortcuts.example.tsx";

export default function () {
    return (
        <PageContainer>
            <PageTitle>
                Typography Component
            </PageTitle>

            <Display1>Basic Usage</Display1>
            <Body2>
                You can use <code>Text</code> components within <code>Typography</code> component.
            </Body2>

            <Display1>Container</Display1>
            <Body2>
                Every typography text components should be located in container
                component named <code>Typography</code>.
            </Body2>

            <Title>Properties</Title>
            <Body2>
                It does not have any properties.
            </Body2>

            <Display1>Text</Display1>
            <Body2>
                <code>Text</code> renders typography text component.
            </Body2>

            <Title>Properties</Title>
            <API name="Property"
                value="Description"
                items={{
                    textStyle: "Style of text",
                    adjustMargin: "Mark as margin adjusted component",
                }} />

            <Title>Demo</Title>
            <Code value={stripIgnored(TextExampleCode)} />
            <Demo>
                <Typography>
                    <Text textStyle="title">
                        Title
                    </Text>
                    <Text textStyle="body2">
                        Body Two
                    </Text>
                    <Text textStyle="display4" adjustMargin>
                        Adjust margin
                    </Text>
                </Typography>
            </Demo>

            <Display1>Shortcuts</Display1>
            <Body2>
                There are coresponding shortcut components for each text styles.
            </Body2>
            <Title>Properties</Title>
            <API name="Property"
                value="Description"
                items={{
                    adjustMargin: "Mark as margin adjusted component",
                }} />
            <Body2>
                You can find a list of shortcuts from following example
            </Body2>
            <Title>Demo</Title>
            <Code value={stripIgnored(ShortcutsExampleCode)} />
            <Demo>
                <Typography>
                    <Display4>
                        Display 4
                    </Display4>
                    <Display3>
                        Display 3
                    </Display3>
                    <Display2>
                        Display 2
                    </Display2>
                    <Display1>
                        Display 1
                    </Display1>
                    <Headline>
                        Headline
                    </Headline>
                    <Display1>
                        Title
                    </Display1>
                    <Title>
                        Subheading 2
                    </Title>
                    <Subheading1>
                        Subheading 1
                    </Subheading1>
                    <Body2>
                        Body 2
                    </Body2>
                    <Body1>
                        Body 1
                    </Body1>
                    <Caption>
                        Caption
                    </Caption>
                </Typography>
            </Demo>
        </PageContainer>
    );
}
