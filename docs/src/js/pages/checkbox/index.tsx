import * as React from "react";

import Button from "@react-mdc/button";
import Checkbox from "@react-mdc/checkbox";
import FormField from "@react-mdc/form-field";
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

type CheckboxState = "checked" | "unchecked" | "indeterminate";

type State = {
    checkbox3State: CheckboxState,
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
        checkbox3State: "unchecked",
    };

    public render() {
        return (
            <div>
                <FieldSet>
                    <legend>Checkbox</legend>
                    <FormField>
                        <Checkbox inputId="checkbox-1" name="checkbox-1" defaultChecked />
                        <label htmlFor="checkbox-1">
                            Checkbox 1
                        </label>
                    </FormField>
                </FieldSet>
                <FieldSet>
                    <legend>Disabled Checkbox</legend>
                    <FormField>
                        <Checkbox inputId="checkbox-1" name="checkbox-2" disabled />
                        <label htmlFor="checkbox-2">
                            Checkbox 2
                        </label>
                    </FormField>
                </FieldSet>
                <FieldSet>
                    <legend>Checkbox Controlled by React State</legend>
                    <div>State: {this.state.checkbox3State}</div>
                    <FormField>
                        <Checkbox
                            inputId="checkbox-3"
                            onChange={this.handleCheckbox3Change}
                            indeterminate={this.state.checkbox3State === "indeterminate"}
                            checked={this.state.checkbox3State === "checked"} />
                        <label htmlFor="checkbox-3">
                            Checkbox 3
                        </label>
                    </FormField>
                    <div>
                        <Button onClick={this.handleIndeterminateClick} raised>
                            Make Indetermiated
                        </Button>
                    </div>
                </FieldSet>
            </div>
        );
    }

    private handleCheckbox3Change = () => {
        this.setState((state: State): State => {
            let checkbox3State: CheckboxState = "checked";
            switch (state.checkbox3State) {
                case "checked":
                    checkbox3State = "unchecked";
                default:
            }
            return { checkbox3State };
        });
    }

    private handleIndeterminateClick = () => {
        this.setState({
            checkbox3State: "indeterminate",
        });
    }
}

export default function CheckboxPage() {
    return (
        <PageContainer>
            <PageTitle>
                Checkbox Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Checkbox
                </a> Component
            </Body2>

            <Display1>Checkbox</Display1>
            <Lib>@react-mdc/checkbox</Lib>
            <Body2>
                Material checkbox component. This component is default composition of checkbox sub-components.
                You can customize checkbox by composing your own sub-components.
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
                        <td><code>indeterminate</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Indeterminate state.</td>
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

            <Display1>Checkmark</Display1>
            <Lib>@react-mdc/checkbox/lib/checkmark</Lib>
            <Body2>
                Checkmark SVG component. It doesn't have meta component.
            </Body2>

            <Display1>Mixedmark</Display1>
            <Lib>@react-mdc/checkbox/lib/mixedmark</Lib>
            <Body2>
                Mixedmark component.
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
