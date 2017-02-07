/* @flow */
import React from 'react';

import Container from './container';
import NativeControl from './native-control';
import Background from './background';
import Checkmark from './checkmark';
import Mixedmark from './mixedmark';

export type Props = {
  inputId?: string,
  name?: string,
  value?: any,
  onChange?: (evt: SyntheticInputEvent) => void,
  checked?: boolean,
  disabled?: boolean,
  indeterminate?: boolean,
  defaultChecked?: boolean
};

/**
 * Checkbox default composed component
 */
export default class Checkbox extends React.Component {
  props: Props

  static defaultProps = {
  }

  render (): React.Element<*> {
    let {
      inputId,
      name,
      value,
      onChange,
      checked,
      disabled,
      indeterminate,
      defaultChecked,
      ...props
    } = this.props;
    return (
      <Container
        disabled={disabled}
        checked={checked}
        indeterminate={indeterminate}
        onChange={onChange}
        {...props}>
        <NativeControl
          id={inputId}
          name={name}
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
