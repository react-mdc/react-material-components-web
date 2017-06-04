import * as React from "react";

import LayoutGrid from "@react-mdc/layout-grid";
import Typography from "@react-mdc/typography";
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

function DemoGrid(p) {
    let { style, ...props } = p;
    style = {
        background: "#9e9e9e",
        ...style,
    };
    return (<LayoutGrid {...props} style={style} />);
}

function DemoCell(p) {
    let { style, ...props } = p;
    style = {
        background: "#f5f5f5",
        color: "#212121",
        height: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        textAlign: "center",
        ...style,
    };

    return (
        <LayoutGrid.Cell {...props} style={style}>
            <Title>{props.children}</Title>
        </LayoutGrid.Cell>
    );
}

function BasicDemo() {
    return (
        <Typography>
            <Title>
                Grid of 1 column wide items
            </Title>
            <DemoGrid>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
                <DemoCell span={1}>
                    1
                </DemoCell>
            </DemoGrid>
            <Title>
                Grid of 4 column wide items
            </Title>
            <DemoGrid>
                <DemoCell span={4}>
                    4
                </DemoCell>
                <DemoCell span={4}>
                    4
                </DemoCell>
                <DemoCell span={4}>
                    4
                </DemoCell>
            </DemoGrid>
            <Title>
                Grid of differently sized items
            </Title>
            <DemoGrid>
                <DemoCell span={6}>
                    6
                </DemoCell>
                <DemoCell span={4}>
                    4
                </DemoCell>
                <DemoCell span={2}>
                    2
                </DemoCell>
            </DemoGrid>
            <Title>
                Grid of items with tweaks at different screen sizes
            </Title>
            <DemoGrid>
                <DemoCell span={6} spanTablet={8}>
                    6 (8 Tablet)
                </DemoCell>
                <DemoCell span={4} spanTablet={6}>
                    4 (6 Tablet)
                </DemoCell>
                <DemoCell span={2} spanPhone={4}>
                    2 (4 Phone)
                </DemoCell>
            </DemoGrid>
        </Typography>
    );
}

export default function LayoutGridPage() {
    return (
        <PageContainer>
            <PageTitle>
                Layout Grid Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-layout-grid"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Layout Grid
                </a> Component
            </Body2>

            <Display1>Container</Display1>
            <Name>LayoutGrid</Name>
            <Body2>
                Grid container component
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
                        <td><code>margin</code></td>
                        <td><code>number | string</code></td>
                        <td />
                        <td>Layout margin</td>
                    </tr>
                    <tr>
                        <td><code>gutter</code></td>
                        <td><code>number | string</code></td>
                        <td />
                        <td>Layout gutter</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Cell</Display1>
            <Name>LayoutGrid.Cell</Name>
            <Body2>
                Grid cell component
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
                        <td><code>span</code></td>
                        <td><code>number 1 ~ 12</code></td>
                        <td />
                        <td>Grid span value.</td>
                    </tr>
                    <tr>
                        <td><code>spanDesktop</code></td>
                        <td><code>number 1 ~ 12</code></td>
                        <td />
                        <td>Grid span value in desktop.</td>
                    </tr>
                    <tr>
                        <td><code>spanTablet</code></td>
                        <td><code>number 1 ~ 12</code></td>
                        <td />
                        <td>Grid span value in tablet.</td>
                    </tr>
                    <tr>
                        <td><code>spanPhone</code></td>
                        <td><code>number 1 ~ 12</code></td>
                        <td />
                        <td>Grid span value in phone.</td>
                    </tr>
                    <tr>
                        <td><code>order</code></td>
                        <td><code>number 1 ~ 12</code></td>
                        <td />
                        <td>Order of cell.</td>
                    </tr>
                    <tr>
                        <td><code>align</code></td>
                        <td><code>"top" | "middle" | "bottom"</code></td>
                        <td />
                        <td>Vertical alignment of cell.</td>
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
