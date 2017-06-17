import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Button from "@react-mdc/button";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import DarkTheme from "app/js/components/DarkTheme";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function ButtonPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Button
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <Button>Flat</Button>
                    </ShowCase.Item>
                    <ShowCase.Item>
                        <DarkTheme.Meta>
                            <Button raised>Raised</Button>
                        </DarkTheme.Meta>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Button component is a React wrapper of mdc-button component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/button`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Flat
                </Typography.Title>
                <Code value={`<Button>Flat button</Button>`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Button>Flat button</Button>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Colored
                </Typography.Title>
                <Code value={`<Button accent>Colored button</Button>`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Button accent>Colored button</Button>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Raised
                </Typography.Title>
                <Code value={`<Button raised>Raised button</Button>`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Button raised>Raised button</Button>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Disabled
                </Typography.Title>
                <Code value={`<Button raised disabled>Disabled button</Button>`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Button raised disabled>Disabled button</Button>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Button</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Button</Name>
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
                            <td><code>dense</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render dense button.</td>
                        </tr>
                        <tr>
                            <td><code>raise</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render raised button.</td>
                        </tr>
                        <tr>
                            <td><code>compact</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render compact button.</td>
                        </tr>
                        <tr>
                            <td><code>primary</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render button with primary color.</td>
                        </tr>
                        <tr>
                            <td><code>accent</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render button with accent color.</td>
                        </tr>
                    </tbody>
                </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
