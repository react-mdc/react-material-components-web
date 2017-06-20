import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import FormField from "@react-mdc/form-field";
import Switch from "@react-mdc/switch";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function SwitchPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Switch
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <FormField>
                            <Switch.Default inputId="showcase-switch" defaultChecked />
                            <Switch.Label htmlFor="showcase-switch">
                                Switch
                            </Switch.Label>
                        </FormField>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Switch component is a React wrapper of mdc-switch component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/switch`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Switch
                </Typography.Title>
                <Code value={`<Switch.Default />`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Switch.Default />
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Cutomizable Switch
                </Typography.Title>
                <Code value={`
<Switch>
    <Switch.NativeControl onChange={(e) => alert("On: " + e.target.value)} />
    <Switch.Background>
        <Switch.Knob />
    </Switch.Background>
</Switch>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        {/* tslint:disable:jsx-no-lambda */}
                        <Switch>
                            <Switch.NativeControl onChange={(e) => alert("On: " + e.currentTarget.value)} />
                            <Switch.Background>
                                <Switch.Knob />
                            </Switch.Background>
                        </Switch>
                        {/* tslint:enable:jsx-no-lambda */}
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Switch</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Switch</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of switch components.
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
                            <td><code>checked</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render checked switch.</td>
                        </tr>
                        <tr>
                            <td><code>disabled</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render disabled switch.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Background</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Switch.Background</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Background component of switch.
                </Typography.Body2>

                <Typography.Title>Knob</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Switch.Knob</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Knob component of switch.
                </Typography.Body2>

                <Typography.Title>Label</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Switch.Label</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Switch label component
                </Typography.Body2>

                <Typography.Title>NativeControl</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Switch.NativeControl</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Native control (actual input component) component of switch.
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
                            <td><code>onChange</code></td>
                            <td><code>(event) => void</code></td>
                            <td />
                            <td>Handler for change event.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Default</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Switch.Default</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Simpe, common composition of switch component
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
                            <td><code>inputId</code></td>
                            <td><code>string</code></td>
                            <td />
                            <td>ID property for native control</td>
                        </tr>
                        <tr>
                            <td><code>name</code></td>
                            <td><code>string</code></td>
                            <td />
                            <td>Name property for native control.</td>
                        </tr>
                        <tr>
                            <td><code>value</code></td>
                            <td><code>any</code></td>
                            <td />
                            <td>Value property for native control.</td>
                        </tr>
                        <tr>
                            <td><code>onChange</code></td>
                            <td><code>(event) => void</code></td>
                            <td />
                            <td>Handler for change event.</td>
                        </tr>
                        <tr>
                            <td><code>checked</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render checked switch.</td>
                        </tr>
                        <tr>
                            <td><code>disabled</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render disabled switch.</td>
                        </tr>
                        <tr>
                            <td><code>defaultChecked</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Default checked state of switch.</td>
                        </tr>
                    </tbody>
                </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
