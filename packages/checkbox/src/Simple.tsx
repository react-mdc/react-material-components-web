import * as React from "react";

import Background from "./Background";
import Checkmark from "./Checkmark";
import Container from "./Container";
import Mixedmark from "./Mixedmark";
import NativeControl from "./NativeControl";

export type Props = {
    inputId?: string,
    name?: string,
    value?: any,
    onChange?: (evt: React.ChangeEvent<any>) => void,
    checked?: boolean,
    disabled?: boolean,
    indeterminate?: boolean,
    defaultChecked?: boolean,
};

/**
 * Checkbox default composed component
 */
export default class Checkbox extends React.Component<Props, {}> {
    public render() {
        const {
            inputId,
            name,
            value,
            onChange,
            checked,
            disabled,
            indeterminate,
            defaultChecked,
            children: _children, // Ignore children
            ...props,
        } = this.props;
        return (
            <Container
                disabled={disabled}
                checked={checked}
                indeterminate={indeterminate}
                {...props}>
                <NativeControl
                    id={inputId}
                    name={name}
                    onChange={onChange}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    value={value} />
                <Background>
                    <Checkmark />
                    <Mixedmark />
                </Background>
            </Container>
        );
    }
}
