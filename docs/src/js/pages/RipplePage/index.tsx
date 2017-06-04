import * as React from "react";

import Elevation from "@react-mdc/elevation";
import Ripple from "@react-mdc/ripple";
import {
    Body2,
    Display1,
    Title,
} from "@react-mdc/typography/lib/shortcuts";

import Code from "app/js/components/Code";
import Name from "app/js/components/Name";
import PageContainer from "app/js/components/PageContainer";
import PageTitle from "app/js/components/PageTitle";
import {
    Demo,
} from "app/js/components/sections";
import Table from "app/js/components/Table";
import { stripIgnored } from "app/js/utils/code";

import * as BasicDemoCode from "raw-loader!./basic.example.tsx";

import { Pen } from "app/js/components/Icon";

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

const boundedStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: 300,
    height: 150,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 8,
};

const unboundedStyle: React.CSSProperties = {
    width: 100,
    height: 100,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
};

function BasicDemo() {
    return (
        <div>
            <FieldSet>
                <legend>Bounded</legend>
                <Ripple.Meta>
                    <Elevation style={boundedStyle} zSpace={2}>
                        Interact with me
                    </Elevation>
                </Ripple.Meta>
            </FieldSet>
            <FieldSet>
                <legend>Unbounded</legend>
                <Ripple style={unboundedStyle} unbounded>
                    <Pen />
                </Ripple>
            </FieldSet>
            <FieldSet>
                <legend>Primary</legend>
                <Ripple.Meta
                    color="primary">
                    <Elevation style={boundedStyle} zSpace={2}>
                        Interact with me
                    </Elevation>
                </Ripple.Meta>
            </FieldSet>
            <FieldSet>
                <legend>Accent</legend>
                <Ripple.Meta
                    color="accent">
                    <Elevation style={boundedStyle} zSpace={2}>
                        Interact with me
                    </Elevation>
                </Ripple.Meta>
            </FieldSet>
        </div>
    );
}

export default function RipplePage() {
    return (
        <PageContainer>
            <PageTitle>
                Ripple Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Ripple
                </a> Component
            </Body2>

            <Display1>Ripple</Display1>
            <Name>Ripple</Name>
            <Body2>
                Material ripple component
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
                        <td><code>unbounded</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Unbounded ripple?</td>
                    </tr>
                    <tr>
                        <td><code>color</code></td>
                        <td><code>"primary" | "accent</code></td>
                        <td />
                        <td>Color of interaction.</td>
                    </tr>
                </tbody>
            </Table>

            <Title>Usage</Title>
            <Code value={stripIgnored(BasicDemoCode)} />
            <Demo>
                <BasicDemo />
            </Demo>
        </PageContainer>
    );
}
