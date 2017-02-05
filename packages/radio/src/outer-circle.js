/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__outer-circle`;

export const propertyClassNames = {
  PREFIX: CLASS_NAME
};

export type Props<P: {}> = WrapperProps<P> & {
};

/**
 * Radio outer circle component
 */
export default class OuterCircle<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
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
      ...props,
      className
    };
  }
}
