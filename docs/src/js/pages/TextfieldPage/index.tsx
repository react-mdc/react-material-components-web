import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Textfield from "@react-mdc/textfield";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function TextfieldPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Textfield
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <Textfield.Default placeholder="Type Here..." />
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Textfield component is a React wrapper of mdc-textfield component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/textfield`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Textfield
                </Typography.Title>
                <Code value={`<Textfield.Default />`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Textfield.Default />
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Labeled
                </Typography.Title>
                <Code value={`
<Textfield>
    <Textfield.Input id="usage-1" autoComplete="email" />
    <Textfield.Label htmlFor="usage-1">
        Email Address
    </Textfield.Label>
</Textfield>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Textfield>
                            <Textfield.Input id="usage-1" autoComplete="email" />
                            <Textfield.Label htmlFor="usage-1">
                                Email Address
                            </Textfield.Label>
                        </Textfield>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Multiline
                </Typography.Title>
                <Code value={`
<Textfield multiline>
    <Textfield.Input.Meta>
        <textarea
            id="usage-2"
            style={{ width: "100%" }}
            rows={8}
            cols={40} />
    </Textfield.Input.Meta>
    <Textfield.Label htmlFor="usage-2">
        Comment
    </Textfield.Label>
</Textfield>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Textfield multiline>
                            <Textfield.Input.Meta>
                                <textarea
                                    id="usage-2"
                                    style={{ width: "100%" }}
                                    rows={8}
                                    cols={40} />
                            </Textfield.Input.Meta>
                            <Textfield.Label htmlFor="usage-2">
                                Comment
                            </Textfield.Label>
                        </Textfield>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Full Width
                </Typography.Title>
                <Code value={`
<ShowCase.Item style={{ width: "100%" }}>
    <Textfield.Default fullwidth placeholder="Full Width" />
</ShowCase.Item>
`} />
                <ShowCase>
                    <ShowCase.Item style={{ width: "100%" }}>
                        <Textfield.Default fullwidth placeholder="Full Width" />
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Textfield</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Textfield</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of textfield components.
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
                            <td><code>disabled</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Disabled state.</td>
                        </tr>
                        <tr>
                            <td><code>multiline</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Enable multiline</td>
                        </tr>
                        <tr>
                            <td><code>fullwidth</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render full width textfield</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Input</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Textfield.Input</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Input component of textfield.
                </Typography.Body2>

                <Typography.Title>Label</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Text.field.Label</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Textfield label
                </Typography.Body2>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
