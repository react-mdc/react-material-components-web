/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import type {ZSpace} from './types';
import {classNameForZSpace} from './helpers';
import {TRANSITION_CLASS} from './constants';

export type Props<P: {}> = WrapperProps<P> & {
  zSpace: ZSpace,
  transition?: boolean,
  className?: string
};

/**
 * Text component decorated by mdc-typography
 */
export class Elevation<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    transition: false,
    wrap: <p />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      zSpace,
      transition,
      className,
      ...props
    } = this.props;
    className = classNames(
      classNameForZSpace(zSpace),
      {
        [TRANSITION_CLASS]: transition
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}

export default Elevation;
