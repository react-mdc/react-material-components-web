/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  FIXED: `${CLASS_NAME}--fixed`
};

export type Props<P: {}> = WrapperProps<P> & {
  fixed: boolean
};

/**
 * Toolbar container
 */
export default class Toolbar<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    fixed: false,
    wrap: <header />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      fixed,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.FIXED]: fixed
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}
