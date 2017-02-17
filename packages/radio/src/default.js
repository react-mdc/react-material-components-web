/* @flow */
import React from 'react';

import Container from './container';
import NativeControl from './native-control';
import Background from './background';
import OuterCircle from './outer-circle';
import InnerCircle from './inner-circle';

export type Props = {
  inputId?: string,
  name?: string,
  value?: any,
  onChange?: (evt: SyntheticInputEvent) => void,
  checked?: boolean,
  disabled?: boolean,
  defaultChecked?: boolean
};

/**
 * Radio default composed component
 */
export default class Radio extends React.Component {
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
      defaultChecked,
      ...props
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
