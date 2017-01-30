/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__supporting-text`;

export type Props<P: {}> = WrapperProps<P> & {
};

/**
 * Supporting text section component
 */
export default class SupportingText<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <section />
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
