import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Button from "@react-mdc/button";
import Elevation from "@react-mdc/elevation";
import Ripple from "@react-mdc/ripple";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function RipplePage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Ripple
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Ripple.Meta>
                            <Elevation zSpace={4}
                                style={{
                                    maxWidth: 500,
                                    height: 300,
                                    cursor: "pointer",
                                    flex: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                RIPPLE
                            </Elevation>
                        </Ripple.Meta>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Ripple component is a React wrapper of mdc-ripple component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/ripple`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Ripple
                </Typography.Title>
                <Code value={`
<Ripple
    color="primary"
    style={{
        background: "white",
        maxWidth: 500,
        height: 300,
        textAlign: "center",
        cursor: "pointer",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
    Click Me!
</Ripple>
`} />
                <ShowCase>
                    <ShowCase.Item style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Ripple
                            color="primary"
                            style={{
                                background: "white",
                                maxWidth: 500,
                                height: 300,
                                textAlign: "center",
                                cursor: "pointer",
                                flex: 1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                            Click Me!
                        </Ripple>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Ripple Button
                </Typography.Title>
                <Code value={`
<Ripple.Meta color="accent">
    <Button>Press Me</Button>
</Ripple.Meta>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Ripple.Meta color="accent">
                            <Button>Press Me</Button>
                        </Ripple.Meta>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>Ripple</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Ripple</Name>
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
            </ComponentPage.Content>
        </ComponentPage>
    );
}
