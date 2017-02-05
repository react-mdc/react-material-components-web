/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__media-item`;

export type Size = 1.5 | 2 | 3;

export function classNameForSize (size: Size): string {
  switch (size) {
    case 1.5:
      return `${CLASS_NAME}--1dot5x`;
    case 2:
      return `${CLASS_NAME}--2x`;
    case 3:
      return `${CLASS_NAME}--3x`;
    default:
      throw new TypeError('Invalid size type');
  }
}

export type Props<P: {}> = WrapperProps<P> & {
  size?: Size
};

/**
 * Media item component
 */
export default class MediaItem<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <img />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      size,
      className,
      ...props
    } = this.props;

    let classes = [];
    if (size != null) {
      classes.push(classNameForSize(size));
    }

    className = classNames(
      CLASS_NAME,
      classes,
      className
    );

    return {
      ...props,
      className
    };
  }
}
