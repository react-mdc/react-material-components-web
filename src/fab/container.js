/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {
  CONTAINER_CLASS,
  MINI_CLASS_NAME,
  PLAIN_CLASS_NAME
} from './constants';

export type Props<P: {}> = WrapperProps<P> & {
  mini: boolean,
  plain: boolean
};

/**
 * Fab container
 */
export default class Fab<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    mini: false,
    plain: false,
    wrap: <button />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      mini,
      plain,
      className,
      ...props
    } = this.props;
    className = classNames(
      CONTAINER_CLASS,
      {
        [MINI_CLASS_NAME]: mini,
        [PLAIN_CLASS_NAME]: plain
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}
