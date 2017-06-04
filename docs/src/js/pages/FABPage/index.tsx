import * as React from "react";

import FAB from "@react-mdc/fab";
import {
    Body2,
    Display1,
    Title,
} from "@react-mdc/typography/lib/shortcuts";

import Code from "app/js/components/Code";
import { MaterialIcon, Pen } from "app/js/components/Icon";
import Name from "app/js/components/Name";
import PageContainer from "app/js/components/PageContainer";
import PageTitle from "app/js/components/PageTitle";
import {
    Demo,
} from "app/js/components/sections";
import Table from "app/js/components/Table";
import { stripIgnored } from "app/js/utils/code";

import * as BasicDemoCode from "raw-loader!./basic.example.tsx";

function FieldSet(props) {
    let { style } = props;
    style = {
        ...style,
        margin: 16,
    };
    return (
        <fieldset {...props} style={style} />
    );
}

function BasicDemo() {
    return (
        <div>
            <FieldSet>
                <legend>FAB</legend>
                <FAB><FAB.Icon><Pen /></FAB.Icon></FAB>
            </FieldSet>
            <FieldSet>
                <legend>Mini FAB</legend>
                <FAB mini><FAB.Icon><Pen /></FAB.Icon></FAB>
            </FieldSet>
            <FieldSet>
                <legend>Plain FAB</legend>
                <FAB plain><FAB.Icon><MaterialIcon>face</MaterialIcon></FAB.Icon></FAB>
            </FieldSet>
            <FieldSet>
                <legend>Plain mini FAB</legend>
                <FAB plain mini><FAB.Icon><MaterialIcon>face</MaterialIcon></FAB.Icon></FAB>
            </FieldSet>
        </div>
    );
}

export default function ButtonPage() {
    return (
        <PageContainer>
            <PageTitle>
                FAB Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC FAB
                </a> (Floating Action Button) Component
            </Body2>

            <Display1>Container</Display1>
            <Name>FAB</Name>
            <Body2>
                FAB container component.
            </Body2>

            <Title>Properties</Title>
            <Table>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>mini</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render mini FAB.</td>
                    </tr>
                    <tr>
                        <td><code>plain</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render plain FAB.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Icon</Display1>
            <Name>FAB.Icon</Name>
            <Body2>
                FAB icon container. Render icon of FAB inside of this component.
            </Body2>

            <Title>Usage</Title>
            <Code value={stripIgnored(BasicDemoCode)} />
            <Demo>
                <BasicDemo />
            </Demo>
        </PageContainer>
    );
}
