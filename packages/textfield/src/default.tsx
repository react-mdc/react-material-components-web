import * as React from "react";

import Container from "./container";
import Input from "./input";

export type ContainerProps = any;
export type InputProps = any;

type TextFieldInternalProps<C, I> = {
    containerProps: ContainerProps,
    inputProps: InputProps,
};

/**
 * Internal default composed component
 */
class TextFieldInternal<C, I> extends React.Component<TextFieldInternalProps<C, I>, {}> {
    public render() {
        let {
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
 * Textfield default composed component
 */
export class Textfield extends React.Component<Props, {}> {
    public render() {
        let {
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
        };
        return (
            <TextFieldInternal containerProps={containerProps} inputProps={inputProps} />
        );
    }
}

export type TextareaProps = ContainerProps & {
    inputId?: string,
    name?: string,
    value?: any,
    onChange?: React.ChangeEventHandler<any>,
    placeholder?: string,
    disabled?: boolean,
    rows: string | number,
    cols: string | number,
};

export default Textfield;
