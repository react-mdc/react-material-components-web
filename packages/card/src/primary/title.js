/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from '../constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export const propertyClassNames = {
  LARGE: `${CLASS_NAME}--large`
};

export type Props<P: {}> = WrapperProps<P> & {
  large: boolean
};

/**
 * Primary section title component
 */
export default class Title<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    large: false,
    wrap: <h1 />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      large,
      className,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      {
        [propertyClassNames.LARGE]: large
      },
      className
    );

    return {
      ...props,
      className
    };
  }
}
