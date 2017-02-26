/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}-fixed-adjust`;
// It will be replaced with above one
// https://github.com/material-components/material-components-web/issues/320#issuecomment-282535960
const DEPRECATED_CLASS_NAME = `${BASE_CLASS_NAME}__fixed-adjust`;

export type Props<P: {}> = WrapperProps<P> & {
};

/**
 * Fixed toolbar adjusted main component
 */
export default class FixedToolbarAdjusted<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <main />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      DEPRECATED_CLASS_NAME,
      className
    );
    return {
      ...props,
      className
    };
  }
}
