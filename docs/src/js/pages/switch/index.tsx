import * as React from "react";

import { FormField } from "@react-mdc/form-field";
import {
    Background,
    Container as SwitchContainer,
    default as Switch,
    Knob,
    NativeControl,
} from "@react-mdc/switch";
import {
    Body2,
    Caption,
    Display1,
    Title,
    Typography,
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

type SwitchState = "checked" | "unchecked";

type State = {
    switch3State: SwitchState,
};
class BasicDemo extends React.Component<{}, State> {
    public state: State = {
        switch3State: "unchecked",
    };

    public render() {
        return (
            <div>
                <FieldSet>
                    <legend>Switch</legend>
                    <FormField>
                        <SwitchContainer>
                            <NativeControl
                                id="switch-1"
                                name="switch-1"
                                defaultChecked />
                            <Background>
                                <Knob />
                            </Background>
                        </SwitchContainer>
                        <label htmlFor="switch-1">
                            Switch 1
                        </label>
                    </FormField>
                </FieldSet>
                <FieldSet>
                    <legend>Disabled Switch</legend>
                    <FormField>
                        <Switch inputId="switch-1" name="switch-2" disabled />
                        <label htmlFor="switch-2">
                            Switch 2
                        </label>
                    </FormField>
                </FieldSet>
                <FieldSet>
                    <legend>Switch Controlled by React State</legend>
                    <Typography>
                        <Caption>
                            State: {this.state.switch3State}
                        </Caption>
                    </Typography>
                    <FormField>
                        <Switch
                            inputId="switch-3"
                            onChange={this.handleSwitch3Change}
                            checked={this.state.switch3State === "checked"} />
                        <label htmlFor="switch-3">
                            Switch 3
                        </label>
                    </FormField>
                </FieldSet>
            </div>
        );
    }

    private handleSwitch3Change = () => {
        this.setState((state: State): State => {
            let switch3State: SwitchState = "checked";
            switch (state.switch3State) {
                case "checked":
                    switch3State = "unchecked";
                default:
            }
            return { switch3State };
        });
    }
}

export default function SwitchPage() {
    return (
        <PageContainer>
            <PageTitle>
                Switch Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-switch"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Switch
                </a> Component
            </Body2>

            <Display1>Switch</Display1>
            <Lib>@react-mdc/switch</Lib>
            <Body2>
                Material switch component. This component is default composition of switch sub-components.
                You can customize switch by composing your own sub-components.
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
            <Lib>@react-mdc/checkbox/lib/container</Lib>
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
            <Lib>@react-mdc/checkbox/lib/background</Lib>
            <Body2>
                Background component.
            </Body2>

            <Display1>Knob</Display1>
            <Lib>@react-mdc/checkbox/lib/knob</Lib>
            <Body2>
                Knob component.
            </Body2>

            <Display1>Native Control</Display1>
            <Lib>@react-mdc/checkbox/lib/native-control</Lib>
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
