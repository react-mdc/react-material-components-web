/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../../core/wrapper';
import {PropWrapper} from '../../core';

import {HEADER_CLASS_NAME} from './constants';

export type Props<P> = WrapperProps<P> & {
  className?: string
};

export default class Header<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <header />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;
    className = classNames(
      HEADER_CLASS_NAME,
      className
    );
    props = {
      ...props,
      className
    };
    return props;
  }
}
