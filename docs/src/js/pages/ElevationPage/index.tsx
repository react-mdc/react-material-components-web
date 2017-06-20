import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Elevation from "@react-mdc/elevation";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function ElevationPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Elevation
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <Elevation zSpace={4} style={{ padding: 32 }}>
                            Elevation
                        </Elevation>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Elevation component is a React wrapper of mdc-elevation component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/elevation`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Elevation
                </Typography.Title>
                <Code value={`<Elevation zSpace={10} style={{ padding: 32 }}>Z-Space: 10</Elevation>`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Elevation zSpace={10} style={{ padding: 32 }}>Z-Space: 10</Elevation>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>Elevation</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Elevation</Name>
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
                            <td><code>zSpace</code></td>
                            <td><code>number (0 ~ 24)</code></td>
                            <td>&#10004;</td>
                            <td>z-space of elevation component</td>
                        </tr>
                        <tr>
                            <td><code>transition</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render elevation with transition animation.</td>
                        </tr>
                    </tbody>
                </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
