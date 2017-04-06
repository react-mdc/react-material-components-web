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
    Caption,
    Typography,
} from "@react-mdc/typography";

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
