import * as React from "react";

import Background from "./Background";
import { ChildProps as ContainerChildProps, default as Container } from "./Container";
import InnerCircle from "./InnerCircle";
import NativeControl from "./NativeControl";
import OuterCircle from "./OuterCircle";

export type Props = {
    inputId?: string,
    name?: string,
    value?: any,
    onChange?: (evt: React.ChangeEvent<ContainerChildProps>) => void,
    checked?: boolean,
    disabled?: boolean,
    defaultChecked?: boolean,
};

/**
 * Radio default composed component
 */
export default class Simple extends React.Component<Props, {}> {
    public render() {
        const {
            inputId,
            name,
            value,
            onChange,
            checked,
            disabled,
            defaultChecked,
            children: _children, // Ignore original children
            ...props,
        } = this.props;
        return (
            <Container
                disabled={disabled}
                checked={checked}
                {...props}>
                <NativeControl
                    id={inputId}
                    name={name}
                    onChange={onChange}
                    checked={checked}
                    defaultChecked={defaultChecked}
                    value={value} />
                <Background>
                    <OuterCircle />
                    <InnerCircle />
                </Background>
            </Container>
        );
    }
}
