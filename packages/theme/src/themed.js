/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Config} from '@react-mdc/base/lib/types';
import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import type {Color, BackgroundColor, TextColor, OnColor} from './types';
import * as helpers from './helpers';

export type Props<P> = WrapperProps<P> & {
  className?: string,
  color?: Color,
  backgroundColor?: BackgroundColor,
  textColor?: TextColor,
  onColor?: OnColor
};

export default class Themed<P: Config> extends PropWrapper<P, *, Props<P>, *> {
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
    if (backgroundColor != null) {
      classes.push(helpers.classNameForBackground(backgroundColor));
    }
    if (textColor != null && onColor != null) {
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
