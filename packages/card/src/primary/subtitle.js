/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/core/lib/wrapper';
import {PropWrapper} from '@react-mdc/core';

import {
  BASE_CLASS_NAME
} from '../constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__subtitle`;

export type Props<P: {}> = WrapperProps<P> & {
};

/**
 * Primary section subtitle component
 */
export default class Subtitle<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <h2 />
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
