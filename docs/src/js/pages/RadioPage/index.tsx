import * as React from "react";

import FormField from "@react-mdc/form-field";
import Radio from "@react-mdc/radio";
import Typography from "@react-mdc/typography";
import {
    Body2,
    Caption,
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

type State = {
    group3Selected: string,
};

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
class BasicDemo extends React.Component<{}, State> {
    public state: State = {
        group3Selected: "radio-1",
    };

    public render() {
        return (
            <div>
                <FieldSet>
                    <legend>Radio</legend>
                    <FormField>
                        <Radio>
                            <Radio.NativeControl id="group-1-radio-1"
                                name="group-1"
                                defaultChecked />
                            <Radio.Background>
                                <Radio.OuterCircle />
                                <Radio.InnerCircle />
                            </Radio.Background>
                        </Radio>
                        <label htmlFor="group-1-radio-1">
                            Radio 1
                        </label>
                    </FormField>
                    <FormField>
                        <Radio>
                            <Radio.NativeControl id="group-1-radio-2"
                                name="group-1" />
                            <Radio.Background>
                                <Radio.OuterCircle />
                                <Radio.InnerCircle />
                            </Radio.Background>
                        </Radio>
                        <label htmlFor="group-1-radio-2">
                            Radio 2
                        </label>
                    </FormField>
                </FieldSet>
                <FieldSet>
                    <legend>Disabled Radio</legend>
                    <FormField>
                        <Radio.Simple inputId="group-2-radio-1" name="group-2" disabled />
                        <label htmlFor="group-2-radio-1">
                            Radio 1
                        </label>
                    </FormField>
                    <FormField>
                        <Radio.Simple inputId="group-2-radio-2" name="group-2" checked disabled />
                        <label htmlFor="group-2-radio-2">
                            Radio 2
                        </label>
                    </FormField>
                </FieldSet>
                <FieldSet>
                    <legend>Radio Controlled by React State</legend>
                    <Typography>
                        <Caption>
                            Selected: {this.state.group3Selected}
                        </Caption>
                    </Typography>
                    <FormField>
                        <Radio.Simple
                            inputId="group-3-radio-1"
                            name="group-3"
                            value="radio-1"
                            onChange={this.handleGroup3ItemChange}
                            checked={this.state.group3Selected === "radio-1"} />
                        <label htmlFor="group-3-radio-1">
                            Radio 1
                        </label>
                    </FormField>
                    <FormField>
                        <Radio.Simple
                            inputId="group-3-radio-2"
                            name="group-3"
                            value="radio-2"
                            onChange={this.handleGroup3ItemChange}
                            checked={this.state.group3Selected === "radio-2"} />
                        <label htmlFor="group-3-radio-2">
                            Radio 2
                        </label>
                    </FormField>
                </FieldSet>
            </div>
        );
    }

    private handleGroup3ItemChange = (evt: React.ChangeEvent<any>) => {
        this.setState({
            group3Selected: evt.target.value,
        });
    }
}

export default function RadioPage() {
    return (
        <PageContainer>
            <PageTitle>
                Radio Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Radio
                </a> Component
            </Body2>

            <Display1>Radio</Display1>
            <Name>Radio.Simple</Name>
            <Body2>
                Material radio component. This component is common composition of radio sub-components.
                You can customize radio by composing your own sub-components.
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
                        <td><code>checked</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Checked state.</td>
                    </tr>
                    <tr>
                        <td><code>disabled</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Disalbed state.</td>
                    </tr>
                    <tr>
                        <td><code>defaultChecked</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Default state for checked.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Container</Display1>
            <Name>Radio</Name>
            <Body2>
                Top-level container of checkbox.
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
                        <td><code>checked</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Checked state.</td>
                    </tr>
                    <tr>
                        <td><code>disabled</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Disalbed state.</td>
                    </tr>
                    <tr>
                        <td><code>indeterminate</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Indeterminate state.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Background</Display1>
            <Name>Radio.Background</Name>
            <Body2>
                Background component.
            </Body2>

            <Display1>Inner Circle</Display1>
            <Name>Radio.InnerCircle</Name>
            <Body2>
                Inner circle component.
            </Body2>

            <Display1>Outer Circle</Display1>
            <Name>Radio.OuterCircle</Name>
            <Body2>
                Outer circle component.
            </Body2>

            <Display1>Native Control</Display1>
            <Name>Radio.NativeControl</Name>
            <Body2>
                Native control of checkbox. ex) <code>{`<input type="checkbox" />`}</code>
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
                        <td><code>onChange</code></td>
                        <td><code>(event) => void</code></td>
                        <td />
                        <td>On change event handler.</td>
                    </tr>
                </tbody>
            </Table>

            <Title>Usage</Title>
            <Code value={stripIgnored(BasicDemoCode)} />
            <Demo>
                <BasicDemo />
            </Demo>
        </PageContainer>
    );
}
