/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../../core/wrapper';
import type {Wrappable} from '../../core/types';
import {PropWrapper} from '../../core';

import {HEADER_CONTENT_CLASS_NAME} from './constants';

export type Props<P> = WrapperProps<P> & {
  className?: string
};

export default class HeaderContent<P: any> extends PropWrapper<*, P, *> {
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
      HEADER_CONTENT_CLASS_NAME,
      className
    );
    props = {
      ...props,
      className
    };
    return props;
  }
}
