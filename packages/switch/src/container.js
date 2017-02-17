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
  PREFIX: CLASS_NAME,
  DISABLED: `${CLASS_NAME}--disabled`
};

export type Props<P: {}> = WrapperProps<P> & {
  disabled?: boolean
};

/**
 * Switch input container component
 */
export default class Container<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
  }

  renderProps (): P {
    let {
      className,
      wrap: _wrap,
      disabled: _disabled,
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
