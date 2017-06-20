import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import FormField from "@react-mdc/form-field";
import Radio from "@react-mdc/radio";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function RadioPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Radio
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <FormField>
                            <Radio.Default name="be" inputId="showcase-radio-to-be" defaultChecked />
                            <label htmlFor="showcase-radio-to-be">
                                To Be
                            </label>
                            <Radio.Default name="be" inputId="showcase-radio-not-to-be" />
                            <label htmlFor="showcase-radio-not-to-be">
                                Not To Be
                            </label>
                        </FormField>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Radio component is a React wrapper of mdc-radio component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/radio`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Radio
                </Typography.Title>
                <Code value={`
<Radio.Default name="usage-1" defaultChecked />
<Radio.Default name="usage-1" />
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Radio.Default name="usage-1" defaultChecked />
                        <Radio.Default name="usage-1" />
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Cutomizable Radio
                </Typography.Title>
                <Code value={`
<Radio>
    <Radio.NativeControl
        name="usage-2"
        onChange={(e) => alert(e.target.value)}
        defaultChecked
        value="left" />
    <Radio.Background>
        <Radio.OuterCircle />
        <Radio.InnerCircle />
    </Radio.Background>
</Radio>
<Radio>
    <Radio.NativeControl
        name="usage-2"
        value="right" />
    <Radio.Background>
        <Radio.OuterCircle />
        <Radio.InnerCircle />
    </Radio.Background>
</Radio>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        {/* tslint:disable:jsx-no-lambda */}
                        <Radio>
                            <Radio.NativeControl
                                name="usage-2"
                                onChange={(e) => alert(e.target.value)}
                                defaultChecked
                                value="left" />
                            <Radio.Background>
                                <Radio.OuterCircle />
                                <Radio.InnerCircle />
                            </Radio.Background>
                        </Radio>
                        <Radio>
                            <Radio.NativeControl
                                name="usage-2"
                                value="right" />
                            <Radio.Background>
                                <Radio.OuterCircle />
                                <Radio.InnerCircle />
                            </Radio.Background>
                        </Radio>
                        {/* tslint:enable:jsx-no-lambda */}
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Radio</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Radio</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of radio components.
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
                            <td>Render checked radio.</td>
                        </tr>
                        <tr>
                            <td><code>disabled</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render disabled radio.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Background</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Radio.Background</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Background component of radio.
                </Typography.Body2>

                <Typography.Title>InnerCircle</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Radio.InnerCircle</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    InnerCircle component of radio.
                </Typography.Body2>

                <Typography.Title>NativeControl</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Radio.NativeControl</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Native control (actual input component) component of radio.
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

                <Typography.Title>OuterCircle</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Radio.OuterCircle</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    OuterCircle component of radio.
                </Typography.Body2>

                <Typography.Title>Default</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Radio.Default</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Simpe, common composition of radio component
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
                            <td>Render checked radio.</td>
                        </tr>
                        <tr>
                            <td><code>disabled</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render disabled radio.</td>
                        </tr>
                        <tr>
                            <td><code>defaultChecked</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Default checked state of radio.</td>
                        </tr>
                    </tbody>
                </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
