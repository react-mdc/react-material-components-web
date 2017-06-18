import * as React from "react";

import Background from "./Background";
import Container from "./Container";
import Knob from "./Knob";
import NativeControl from "./NativeControl";

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
 * Switch default composed component
 */
export default class Default extends React.Component<Props, {}> {
    public props: Props;

    public render() {
        const {
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
                    checked={checked}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    value={value} />
                <Background>
                    <Knob />
                </Background>
            </Container >
        );
    }
}
