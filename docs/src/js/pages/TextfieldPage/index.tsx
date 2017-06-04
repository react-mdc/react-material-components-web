import * as React from "react";

import FormField from "@react-mdc/form-field";
import TextField from "@react-mdc/textfield";
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

function BasicDemo() {
    return (
        <div>
            <FieldSet>
                <legend>Basic</legend>
                <FormField style={{ margin: 16 }}>
                    <TextField>
                        <TextField.Input id="textfield1" autoComplete="email" />
                        <TextField.Label htmlFor="textfield1">
                            Email Address
                        </TextField.Label>
                    </TextField>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Multiline</legend>
                <FormField style={{ margin: 16 }}>
                    <TextField multiline>
                        <TextField.Input.Meta>
                            <textarea
                                id="textfield2"
                                style={{ width: "100%" }}
                                rows={8}
                                cols={40} />
                        </TextField.Input.Meta>
                        <TextField.Label htmlFor="textfield2">
                            Comment
                        </TextField.Label>
                    </TextField>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Full Width</legend>
                <TextField.Simple
                    inputId="textfield3"
                    placeholder="Title"
                    fullwidth />
                <TextField fullwidth multiline>
                    <TextField.Input.Meta>
                        <textarea
                            rows={8}
                            cols={40}
                            id="textfield4"
                            placeholder="Content" />
                    </TextField.Input.Meta>
                </TextField>
            </FieldSet>
        </div>
    );
}

export default function TextfieldPage() {
    return (
        <PageContainer>
            <PageTitle>
                Textfield Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Textfield
                </a> Component
            </Body2>

            <Display1>Textfield</Display1>
            <Name>TextField.Simple</Name>
            <Body2>
                Material textfield component. This component is common composition of textfield sub-components.
                You can customize textfield by composing your own sub-components.
            </Body2>
            <Body2>
                It has no Meta component since it is just a composition.
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
                        <td><code>inputId</code></td>
                        <td><code>string</code></td>
                        <td />
                        <td>id property of Input component.</td>
                    </tr>
                    <tr>
                        <td><code>name</code></td>
                        <td><code>string</code></td>
                        <td />
                        <td>name property of Input component.</td>
                    </tr>
                    <tr>
                        <td><code>value</code></td>
                        <td><code>string</code></td>
                        <td />
                        <td>value property of Input component.</td>
                    </tr>
                    <tr>
                        <td><code>onChange</code></td>
                        <td><code>(event) => void</code></td>
                        <td />
                        <td>On change event handler.</td>
                    </tr>
                    <tr>
                        <td><code>placeholder</code></td>
                        <td><code>string</code></td>
                        <td />
                        <td>Placeholder text</td>
                    </tr>
                    <tr>
                        <td><code>disabled</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Disalbed state.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Container</Display1>
            <Name>TextField</Name>
            <Body2>
                Top-level container of textfield.
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

            <Display1>Input</Display1>
            <Name>TextField.Input</Name>
            <Body2>
                Input component.
            </Body2>

            <Display1>Label</Display1>
            <Name>TextField.Label</Name>
            <Body2>
                Label component.
            </Body2>

            <Title>Usage</Title>
            <Code value={stripIgnored(BasicDemoCode)} />
            <Demo>
                <BasicDemo />
            </Demo>
        </PageContainer>
    );
}
