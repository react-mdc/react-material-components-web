import * as React from "react";

import FormField from "@react-mdc/form-field";
import Switch from "@react-mdc/switch";
import Typography from "@react-mdc/typography";
import {
    Caption,
} from "@react-mdc/typography/lib/shortcuts";

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
