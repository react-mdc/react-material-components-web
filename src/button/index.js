/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {
  BUTTON_CLASS,
  DENSE_CLASS_NAME,
  RAISED_CLASS_NAME,
  COMPACT_CLASS_NAME,
  PRIMARY_CLASS_NAME,
  ACCENT_CLASS_NAME
} from './constants';

export type Props<P: {}> = WrapperProps<P> & {
  dense: boolean,
  raised: boolean,
  compact: boolean,
  primary: boolean,
  accent: boolean
};

/**
 * Button component
 */
export class Button<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    dense: false,
    raised: false,
    compact: false,
    primary: false,
    accent: false,
    wrap: <button />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      dense,
      raised,
      compact,
      primary,
      accent,
      className,
      ...props
    } = this.props;
    className = classNames(
      BUTTON_CLASS,
      {
        [DENSE_CLASS_NAME]: dense,
        [RAISED_CLASS_NAME]: raised,
        [COMPACT_CLASS_NAME]: compact,
        [PRIMARY_CLASS_NAME]: primary,
        [ACCENT_CLASS_NAME]: accent
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}

export default Button;
