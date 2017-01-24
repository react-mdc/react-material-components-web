/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import type {MainColor, TextColor, ColorTheme} from './types';
import * as helpers from './helpers';

export type Props<P> = WrapperProps<P> & {
  className?: string,
  color?: MainColor,
  backgroundColor?: MainColor
} & ({} | {
  textColor: TextColor,
  onColor?: MainColor | ColorTheme
});

export default class Themed<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      color,
      backgroundColor,
      textColor,
      onColor,
      ...props
    } = this.props;

    let classes = [];
    if (color != null) {
      classes.push(helpers.classNameForColor(color));
    }
    classes.push(helpers.classNameForBackground(backgroundColor));
    if (textColor != null) {
      classes.push(helpers.classNameForTextColor(textColor, onColor));
    }
    className = classNames(classes, className);

    props = {
      className,
      ...props
    };
    return props;
  }
}
