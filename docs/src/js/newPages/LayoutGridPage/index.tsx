import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import LayoutGrid from "@react-mdc/layout-grid";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import { MaterialIcon } from "app/js/components/Icon";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function LayoutGridPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Layout Grid
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item style={{ width: "100%", maxWidth: 500 }}>
                        <LayoutGrid style={{ background: "#9c9c9c" }}>
                            <LayoutGrid.Cell span={6}
                                style={{
                                    background: "#3d3d3d",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 32,
                                }} />
                            <LayoutGrid.Cell span={6}
                                style={{
                                    background: "#3d3d3d",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 32,
                                }} />
                        </LayoutGrid>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    LayoutGrid component is a React wrapper of mdc-layout-grid component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/layout-grid`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Grid
                </Typography.Title>
                <Code value={`
<LayoutGrid style={{ background: "#9c9c9c" }}>
    <LayoutGrid.Cell span={4}
        style={{
            background: "#3d3d3d",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 32,
        }} />
    <LayoutGrid.Cell span={8}
        style={{
            background: "#3d3d3d",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 32,
        }} />
</LayoutGrid>
`} />
                <ShowCase>
                    <ShowCase.Item style={{ width: "100%", maxWidth: 500 }}>
                        <LayoutGrid style={{ background: "#9c9c9c" }}>
                            <LayoutGrid.Cell span={4}
                                style={{
                                    background: "#3d3d3d",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 32,
                                }} />
                            <LayoutGrid.Cell span={8}
                                style={{
                                    background: "#3d3d3d",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 32,
                                }} />
                        </LayoutGrid>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Layout Grid</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>LayoutGrid</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of layout grid components.
                </Typography.Body2>
                <Typography.Subheading2>Properties</Typography.Subheading2>
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
                            <td>Margin of grid.</td>
                        </tr>
                        <tr>
                            <td><code>gutter</code></td>
                            <td><code>number | string</code></td>
                            <td />
                            <td>Gutter of grid.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Cell</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>LayoutGrid.Cell</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Cell component
                </Typography.Body2>
                <Typography.Subheading2>Properties</Typography.Subheading2>
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
                            <td><code>number (1 ~ 12)</code></td>
                            <td />
                            <td>Spanning size of cell.</td>
                        </tr>
                        <tr>
                            <td><code>span</code></td>
                            <td><code>number (1 ~ 12)</code></td>
                            <td />
                            <td>Spanning size of cell.</td>
                        </tr>
                        <tr>
                            <td><code>spanDesktop</code></td>
                            <td><code>number (1 ~ 12)</code></td>
                            <td />
                            <td>Spanning size of cell on desktop.</td>
                        </tr>
                        <tr>
                            <td><code>spanTablet</code></td>
                            <td><code>number (1 ~ 12)</code></td>
                            <td />
                            <td>Spanning size of cell on tablet.</td>
                        </tr>
                        <tr>
                            <td><code>spanPhone</code></td>
                            <td><code>number (1 ~ 12)</code></td>
                            <td />
                            <td>Spanning size of cell on phone.</td>
                        </tr>
                        <tr>
                            <td><code>order</code></td>
                            <td><code>number (1 ~ 12)</code></td>
                            <td />
                            <td>Order of cell.</td>
                        </tr>
                        <tr>
                            <td><code>align</code></td>
                            <td><code>"top" | "middle" | "bottom"</code></td>
                            <td />
                            <td>Alignment of cell.</td>
                        </tr>
                    </tbody>
                </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
