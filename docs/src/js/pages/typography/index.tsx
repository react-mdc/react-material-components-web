import * as React from "react";

import { Body2 } from "@react-mdc/typography";

import API from "app/js/api";
import Code from "app/js/components/code";
import PageContainer from "app/js/components/page-container";
import PageTitle from "app/js/components/page-title";
import {
    Demo,
    Section,
    SectionPanel,
} from "app/js/components/section";
import { stripIgnored } from "app/js/utils/code";

import * as TextExampleCode from "raw-loader!./text.example.tsx";
import TextExample from "./text.example";

import * as ShortcutsExampleCode from "raw-loader!./shortcuts.example.tsx";
import ShortcutsExample from "./shortcuts.example";

export default class TypographyExample extends React.Component<{}, {}> {
    public render() {
        return (
            <PageContainer>
                <PageTitle>
                    Typography Component
                </PageTitle>
                <Section title="Basic Usage">
                    <SectionPanel span={12} title="Explanation">
                        <Body2>
                            You can use <code>Text</code> components within
                            <code>Typography</code> component.
                        </Body2>
                    </SectionPanel>
                    <SectionPanel span={3} title="Container">
                        <Body2>
                            Every typography text components should be located in container
                            component named <code>Typography</code>.
                        </Body2>
                        <API
                            name="Property"
                            value="Description"
                            items={{
                                "wrap?": "Wrapped element, default is <div />"
                            }} />
                    </SectionPanel>
                    <SectionPanel span={3} title="Text">
                        <Body2>
                            <code>Text</code> renders typography text component.
                        </Body2>
                        <Body2>
                            <code>wrap</code> property will be chosen automatically based on <code>textStyle</code>.
                        </Body2>
                        <API name="Property"
                            value="Description"
                            items={{
                                "wrap?": "Wrapped element, default is auto",
                                "textStyle": "Style of text",
                                "adjustMargin": "Mark as margin adjusted component"
                            }} />
                    </SectionPanel>
                    <SectionPanel span={6} title="Example">
                        <Code value={stripIgnored(TextExampleCode)} />
                    </SectionPanel>
                    <Demo>
                        <TextExample />
                    </Demo>
                </Section>
                <Section title="Shortcuts">
                    <SectionPanel span={12} title="Explanation">
                        There are coresponding shortcut components for each text styles.
                    </SectionPanel>
                    <SectionPanel span={6} title="Shortcuts">
                        <Body2>
                            You can find a list of shortcuts from following example
                        </Body2>
                        <API name="Property"
                            value="Description"
                            items={{
                                "wrap?": "Wrapped element, default is auto",
                                "adjustMargin": "Mark as margin adjusted component"
                            }} />
                    </SectionPanel>
                    <SectionPanel span={6} title="Example">
                        <Code value={stripIgnored(ShortcutsExampleCode)} />
                    </SectionPanel>
                    <Demo>
                        <ShortcutsExample />
                    </Demo>
                </Section>
            </PageContainer>
        );
    }
}
