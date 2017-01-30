/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  DARK: `${CLASS_NAME}--theme-dark`
};

export type Props<P: {}> = WrapperProps<P> & {
  dark: boolean
};

/**
 * Card component
 */
export default class Card<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    dark: false,
    wrap: <div />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      dark,
      className,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.DARK]: dark
      },
      className
    );

    return {
      ...props,
      className
    };
  }
}
