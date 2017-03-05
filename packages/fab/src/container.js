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
  MINI: `${CLASS_NAME}--mini`,
  PLAIN: `${CLASS_NAME}--plain`
};

export type Props<P: {}> = WrapperProps<P> & {
  mini: boolean,
  plain: boolean
};

/**
 * Fab container
 */
export default class Fab<P: any> extends PropWrapper<P, *, Props<P>, *> {
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
      CLASS_NAME,
      {
        [propertyClassNames.MINI]: mini,
        [propertyClassNames.PLAIN]: plain
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}
