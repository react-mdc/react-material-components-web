/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

// Input with type="checkbox" as default
function CheckboxInput (props: *): React.Element<*> {
  return (
    <input type="checkbox" {...props} />
  );
}

export type Props<P: {}> = WrapperProps<P> & {};

/**
 * Native control component
 */
export default class NativeControl<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: CheckboxInput
  }

  renderProps (): P {
    let {
      className,
      wrap: _wrap,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      className
    );
    return {
      ...props,
      className
    };
  }
}
