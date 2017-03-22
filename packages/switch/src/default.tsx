import * as React from "react";

import Background from "./background";
import Container from "./container";
import Knob from "./knob";
import NativeControl from "./native-control";

export type Props = {
    inputId?: string,
    name?: string,
    value?: any,
    onChange?: React.ChangeEventHandler<any>
    checked?: boolean,
    disabled?: boolean,
    defaultChecked?: boolean,
};

/**
 * Checkbox default composed component
 */
export default class Checkbox extends React.Component<Props, {}> {
    public props: Props;

    public render() {
        let {
            inputId,
            name,
            value,
            onChange,
            checked,
            disabled,
            defaultChecked,
            ...props,
        } = this.props;
        return (
            <Container
                disabled={disabled}
                {...props}>
                <NativeControl
                    id={inputId}
                    name={name}
                    onChange={onChange}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    value={value} />
                <Background>
                    <Knob />
                </Background>;
            </Container >
        );
    }
}
