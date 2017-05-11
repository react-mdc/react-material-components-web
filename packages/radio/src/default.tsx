import * as React from "react";

import Background from "./background";
import { ChildProps as ContainerChildProps, default as Container } from "./container";
import InnerCircle from "./inner-circle";
import NativeControl from "./native-control";
import OuterCircle from "./outer-circle";

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
export default class Radio extends React.Component<Props, {}> {
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
