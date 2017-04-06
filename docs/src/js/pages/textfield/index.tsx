import * as React from "react";

import { FormField } from "@react-mdc/form-field";
import {
    Container as TextFieldContainer,
    default as Textfield,
    Input,
    Label,
} from "@react-mdc/textfield";
import {
    Body2,
    Display1,
    Title,
} from "@react-mdc/typography";

import Code from "app/js/components/code";
import Lib from "app/js/components/lib";
import PageContainer from "app/js/components/page-container";
import PageTitle from "app/js/components/page-title";
import {
    Demo,
} from "app/js/components/section";
import Table from "app/js/components/table";
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
                    <TextFieldContainer>
                        <Input id="textfield1" autoComplete="email" />
                        <Label htmlFor="textfield1">
                            Email Address
                        </Label>
                    </TextFieldContainer>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Multiline</legend>
                <FormField style={{ margin: 16 }}>
                    <TextFieldContainer multiline>
                        <Input.Meta>
                            <textarea
                                id="textfield2"
                                style={{ width: "100%" }}
                                rows={8}
                                cols={40} />
                        </Input.Meta>
                        <Label htmlFor="textfield2">
                            Comment
                        </Label>
                    </TextFieldContainer>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Full Width</legend>
                <Textfield
                    inputId="textfield3"
                    placeholder="Title"
                    fullwidth />
                <TextFieldContainer fullwidth multiline>
                    <Input.Meta>
                        <textarea
                            rows={8}
                            cols={40}
                            id="textfield4"
                            placeholder="Content" />
                    </Input.Meta>
                </TextFieldContainer>
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
            <Lib>@react-mdc/textfield</Lib>
            <Body2>
                Material textfield component. This component is default composition of textfield sub-components.
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
            <Lib>@react-mdc/textfield/lib/container</Lib>
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
            <Lib>@react-mdc/textfield/lib/input</Lib>
            <Body2>
                Input component.
            </Body2>

            <Display1>Label</Display1>
            <Lib>@react-mdc/textfield/lib/label</Lib>
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
