/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {WRAPPER_CLASS} from './constants';

export type Props<P> = WrapperProps<P> & {
  className?: string
};

/**
 * Wrapper component of mdc-typography
 */
export default class Typography<P: any> extends PropWrapper<*, P, *> {
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
    return {
      ...props,
      className: classNames(WRAPPER_CLASS, className)
    };
  }
}
