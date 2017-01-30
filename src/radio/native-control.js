/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import type {AdapterNativeControlDelegate} from './types';
import {AdapterNativeControlDelegatePropType} from './types';
import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

export const propertyClassNames = {
  PREFIX: CLASS_NAME
};

export type Props<P: {}> = WrapperProps<P> & {
};

type Context = {
  adapterNativeControlDelegate: AdapterNativeControlDelegate
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
export default class NativeControl<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  context: Context

  static contextTypes = {
    adapterNativeControlDelegate: AdapterNativeControlDelegatePropType.isRequired
  }

  static defaultProps = {
    wrap: RadioInput
  }

  componentWillUnmount () {
    this.context.adapterNativeControlDelegate.onNativeControlUnmount();
  }

  handleRef = (el: Element) => {
    this.context.adapterNativeControlDelegate.onNativeControlMount(el);
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      className
    );
    return {
      ref: this.handleRef,
      ...props,
      className
    };
  }
}
