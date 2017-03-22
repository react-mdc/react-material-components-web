import * as React from "react";

import {default as Container, Props as ContainerProps} from "./container";
import {default as Input, Props as InputProps} from "./input";

type TextFieldInternalProps<C, I> = {
    containerProps: ContainerProps<any>,
    inputProps: InputProps<any>,
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
                <Input {...inputProps} />;
            </Container >
        );
    }
}

export type Props = {
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

export type TextareaProps = {
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
