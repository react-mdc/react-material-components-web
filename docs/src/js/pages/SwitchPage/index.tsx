import * as React from "react";

import FormField from "@react-mdc/form-field";
import Switch from "@react-mdc/switch";
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
                        <Switch>
                            <Switch.NativeControl
                                id="switch-1"
                                name="switch-1"
                                defaultChecked />
                            <Switch.Background>
                                <Switch.Knob />
                            </Switch.Background>
                        </Switch>
                        <label htmlFor="switch-1">
                            Switch 1
                        </label>
                    </FormField>
                </FieldSet>
                <FieldSet>
                    <legend>Disabled Switch</legend>
                    <FormField>
                        <Switch.Simple inputId="switch-1" name="switch-2" disabled />
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
                        <Switch.Simple
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
            <Name>Switch.Simple</Name>
            <Body2>
                Material switch component. This component is common composition of switch sub-components.
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
            <Name>Switch</Name>
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
            <Name>Switch.Background</Name>
            <Body2>
                Background component.
            </Body2>

            <Display1>Knob</Display1>
            <Name>Switch.Knob</Name>
            <Body2>
                Knob component.
            </Body2>

            <Display1>Native Control</Display1>
            <Name>Switch.NativeControl</Name>
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
