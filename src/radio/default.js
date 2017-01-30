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
  onChange?: (evt: SyntheticEvent) => void,
  checked?: boolean,
  disabled?: boolean
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
      ...props
    } = this.props;
    return (
      <Container disabled={disabled} {...props}>
        <NativeControl
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          disabled={disabled} />
        <Background>
          <OuterCircle />
          <InnerCircle />
        </Background>
      </Container>
    );
  }
}
