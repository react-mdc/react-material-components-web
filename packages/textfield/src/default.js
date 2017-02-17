/* @flow */
import React from 'react';

import Container from './container';
import Input from './input';

/**
 * Internal default composed component
 */
class TextField extends React.Component {
  props: {
    containerProps: *,
    inputProps: *
  }

  render (): React.Element<*> {
    let {
      containerProps,
      inputProps
    } = this.props;
    return (
      <Container {...containerProps}>
        <Input {...inputProps} />
      </Container>
    );
  }
}

export type Props = {
  inputId?: string,
  name?: string,
  value?: any,
  onChange?: (evt: SyntheticInputEvent) => void,
  placeholder?: string,
  disabled?: boolean
};

/**
 * Textfield default composed component
 */
export class Textfield extends React.Component {
  props: Props

  static defaultProps = {
  }

  render (): React.Element<*> {
    let {
      inputId,
      name,
      value,
      onChange,
      placeholder,
      disabled,
      ...props
    } = this.props;
    const containerProps = {
      disabled,
      ...props
    };
    const inputProps = {
      id: inputId,
      name,
      value,
      onChange,
      placeholder
    };
    return (
      <TextField containerProps={containerProps} inputProps={inputProps} />
    );
  }
}

export type TextareaProps = {
  inputId?: string,
  name?: string,
  value?: any,
  onChange?: (evt: SyntheticInputEvent) => void,
  placeholder?: string,
  disabled?: boolean,
  rows: string | number,
  cols: string | number
};

/**
 * Textfield default composed component with textarea
 */
export class TextareaTextfield extends React.Component {
  props: TextareaProps

  static defaultProps = {
  }

  render (): React.Element<*> {
    let {
      inputId,
      name,
      value,
      onChange,
      placeholder,
      disabled,
      rows,
      cols,
      ...props
    } = this.props;
    const containerProps = {
      disabled,
      ...props
    };
    const inputProps = {
      id: inputId,
      name,
      value,
      onChange,
      placeholder,
      rows,
      cols,
      wrap: <textarea />
    };
    return (
      <TextField containerProps={containerProps} inputProps={inputProps} />
    );
  }
}

export default Textfield;
