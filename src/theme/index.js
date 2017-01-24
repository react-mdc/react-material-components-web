/* @flow */
import React from 'react';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import type {MainColor, ColorTheme, TextColor} from './types';
import * as helpers from './helpers';

export type Props<P> = WrapperProps<P> & {
};

// TODO: Implement me
export class Themed<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      ...props
    } = this.props;
    return props;
  }
}
