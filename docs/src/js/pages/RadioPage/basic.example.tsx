import * as React from "react";

import FormField from "@react-mdc/form-field";
import Radio from "@react-mdc/radio";
import Typography from "@react-mdc/typography";
import { Caption } from "@react-mdc/typography/lib/shortcuts";

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
