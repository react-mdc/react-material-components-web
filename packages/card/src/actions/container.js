/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from '../constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__actions`;

export const propertyClassNames = {
  VERTICAL: `${CLASS_NAME}--vertical`
};

export type Props<P: {}> = WrapperProps<P> & {
  vertical: boolean
};

/**
 * Actions section component
 */
export default class Actions<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    vertical: false,
    wrap: <section />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      vertical,
      className,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.VERTICAL]: vertical
      },
      className
    );

    return {
      ...props,
      className
    };
  }
}
