import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Checkbox from "@react-mdc/checkbox";
import FormField from "@react-mdc/form-field";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function CheckboxPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Checkbox
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <FormField>
                            <Checkbox.Default inputId="showcase-checkbox" />
                            <label htmlFor="showcase-checkbox">
                                Check Me
                            </label>
                        </FormField>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Checkbox component is a React wrapper of mdc-checkbox component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/checkbox`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Checkbox
                </Typography.Title>
                <Code value={`<Checkbox.Default />`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Checkbox.Default />
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Cutomizable Checkbox
                </Typography.Title>
                <Code value={`
<Checkbox>
    <Checkbox.NativeControl onChange={ (x) => alert("Changed: " + x) } />
    <Checkbox.Background>
        <Checkbox.Checkmark />
        <Checkbox.Mixedmark />
    </Checkbox.Background>
</Checkbox>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        {/* tslint:disable:jsx-no-lambda */}
                        <Checkbox>
                            <Checkbox.NativeControl onChange={(x) => alert("Changed: " + x.target.value)} />
                            <Checkbox.Background>
                                <Checkbox.Checkmark />
                                <Checkbox.Mixedmark />
                            </Checkbox.Background>
                        </Checkbox>
                        {/* tslint:enable:jsx-no-lambda */}
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Checkbox</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Checkbox</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of checkbox components.
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
                            <td>Render checked checkbox.</td>
                        </tr>
                        <tr>
                            <td><code>disabled</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render disabled checkbox.</td>
                        </tr>
                        <tr>
                            <td><code>indeterminate</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render indeterminate state checkbox.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Background</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Checkbox.Background</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Background component of checkbox.
                </Typography.Body2>

                <Typography.Title>Checkmark</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Checkbox.Checkmark</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Checkmark component of checkbox. It's a just SVG component.
                    So it doesn't have a meta component.
                </Typography.Body2>

                <Typography.Title>Mixedmark</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Checkbox.Mixedmark</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Mixedmark component of checkbox.
                </Typography.Body2>

                <Typography.Title>NativeControl</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Checkbox.NativeControl</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Native control (actual input component) component of checkbox.
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
                <Name>Checkbox.Default</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Default composition of checkbox component
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
                            <td>Render checked checkbox.</td>
                        </tr>
                        <tr>
                            <td><code>disabled</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render disabled checkbox.</td>
                        </tr>
                        <tr>
                            <td><code>indeterminate</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render indeterminate state checkbox.</td>
                        </tr>
                        <tr>
                            <td><code>defaultChecked</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Default checked state of checkbox.</td>
                        </tr>
                    </tbody>
                </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
