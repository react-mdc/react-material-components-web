import * as React from "react";

import Container from "./Container";

// Typescript transpiler does not compile following line.
// I don't know why, and it seems to be bug of typescript
//
// import Input from "./Input";
//
// We bypass the bug using following lines
/* ---from here --- */
import * as InputModule from "./Input";
// tslint:disable:variable-name
const Input = InputModule.default;
// tslint:enable:variable-name
/* --- to here --- */

export type ContainerProps = any;
export type InputProps = any;

type TextFieldInternalProps = {
    containerProps: ContainerProps,
    inputProps: InputProps,
};

/**
 * Internal default composed component
 */
class TextFieldInternal extends React.Component<TextFieldInternalProps, {}> {
    public render() {
        const {
            containerProps,
            inputProps,
        } = this.props;

        return (
            <Container {...containerProps}>
                <Input {...inputProps} />
            </Container>
        );
    }
}

export type Props = ContainerProps & {
    inputId?: string,
    name?: string,
    value?: any,
    onChange?: React.ChangeEventHandler<any>,
    placeholder?: string,
    disabled?: boolean,
};

/**
 * Textfield simple common composed component
 */
export default class Default extends React.Component<Props, {}> {
    public render() {
        const {
            inputId,
            name,
            value,
            onChange,
            placeholder,
            disabled,
            ...props,
        } = this.props;
        const containerProps = {
            disabled,
            ...props,
        };
        const inputProps = {
            id: inputId,
            name,
            value,
            onChange,
            placeholder,
            disabled,
        };
        return (
            <TextFieldInternal containerProps={containerProps} inputProps={inputProps} />
        );
    }
}
