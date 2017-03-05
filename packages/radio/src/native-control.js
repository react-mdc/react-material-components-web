/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import type {EventHandler} from '@react-mdc/base/lib/types';
import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';
import {eventHandlerDecorator} from '@react-mdc/base/lib/util';

import {FoundationAdapter, NativeControlAdapter} from './adapter';
import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

export const propertyClassNames = {
  PREFIX: CLASS_NAME
};

export type Props<P: {}> = WrapperProps<P> & {
};

type Context = {
  adapter: FoundationAdapter
};

// Input with type="radio" as default
function RadioInput (props: *): React.Element<*> {
  return (
    <input type="radio" {...props} />
  );
}

/**
 * Radio input component
 */
export default class NativeControl<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  context: Context

  defaultOnChange: EventHandler = () => {}

  static contextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired
  }

  static defaultProps = {
    wrap: RadioInput
  }

  componentDidMount () {
    this.context.adapter.setNativeControlAdapter(new NativeControlAdapterImpl(this));
  }

  componentWillUnmount () {
    this.context.adapter.setNativeControlAdapter(new NativeControlAdapter());
  }

  handleChange = (evt: SyntheticEvent, ...args: Array<void>) => {
    this.defaultOnChange(evt, ...args);
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      onChange,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      className
    );
    return {
      onChange: eventHandlerDecorator(this.handleChange)(onChange),
      ...props,
      className,
      checked: this.context.adapter.isChecked()
    };
  }
}

class NativeControlAdapterImpl extends NativeControlAdapter {
  element: NativeControl<*>

  constructor (element: NativeControl<*>) {
    super();
    this.element = element;
  }
  getNativeControl (): ?HTMLElement {
    return ReactDOM.findDOMNode(this.element);
  }
  setDefaultOnChangeHandler (onChange: EventHandler) {
    this.element.defaultOnChange = onChange;
  }
}
