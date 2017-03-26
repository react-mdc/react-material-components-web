import * as React from "react";

import Background from "./background";
import Checkmark from "./checkmark";
import Container from "./container";
import Mixedmark from "./mixedmark";
import NativeControl from "./native-control";

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
        let {
      inputId,
            name,
            value,
            onChange,
            checked,
            disabled,
            indeterminate,
            defaultChecked,
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
