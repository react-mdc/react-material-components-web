import * as React from "react";

import { Fab, Icon } from "@react-mdc/fab";
import {
    Body2,
    Display1,
    Title,
} from "@react-mdc/typography";

import Code from "app/js/components/code";
import { MaterialIcon, Pen } from "app/js/components/icon";
import Lib from "app/js/components/lib";
import PageContainer from "app/js/components/page-container";
import PageTitle from "app/js/components/page-title";
import {
    Demo,
} from "app/js/components/section";
import Table from "app/js/components/table";
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
                <Fab><Icon><Pen /></Icon></Fab>
            </FieldSet>
            <FieldSet>
                <legend>Mini FAB</legend>
                <Fab mini><Icon><Pen /></Icon></Fab>
            </FieldSet>
            <FieldSet>
                <legend>Plain FAB</legend>
                <Fab plain><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
            </FieldSet>
            <FieldSet>
                <legend>Plain mini FAB</legend>
                <Fab plain mini><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
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
            <Lib>@react-mdc/fab/lib/container</Lib>
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
                        <td>Render mini fab.</td>
                    </tr>
                    <tr>
                        <td><code>plain</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render plain fab.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Container</Display1>
            <Lib>@react-mdc/fab/lib/icon</Lib>
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
