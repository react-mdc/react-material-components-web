/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../../core/wrapper';
import {PropWrapper} from '../../core';

import {
  BASE_CLASS_NAME
} from '../constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__primary`;

export type Props<P: {}> = WrapperProps<P> & {
};

/**
 * Primary section component
 */
export default class Primary<P: any> extends PropWrapper<*, P, *> {
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
