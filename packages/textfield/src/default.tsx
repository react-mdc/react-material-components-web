import * as React from "react";

import { default as Container } from "./container";
import { default as Input } from "./input";

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
            </Container >
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
    public static defaultProps = {
    };

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

/**
 * Textfield default composed component with textarea
 */
export class TextareaTextfield extends React.Component<TextareaProps, {}> {
    public render() {
        let {
            inputId,
            name,
            value,
            onChange,
            placeholder,
            disabled,
            rows,
            cols,
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
            rows,
            cols,
            wrap: <textarea />,
        };
        return (
            <TextFieldInternal containerProps={containerProps} inputProps={inputProps} />
        );
    }
}

export default Textfield;
