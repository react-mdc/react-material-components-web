/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import type {Wrappable} from '@react-mdc/base/lib/types';
import {PropWrapper} from '@react-mdc/base';

import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__header-content`;

export type Props<P> = WrapperProps<P> & {
  className?: string
};

export default class HeaderContent<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
  }

  renderWrap (): Wrappable<P> {
    return super.renderWrap();
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      className
    );
    props = {
      ...props,
      className
    };
    return props;
  }
}
