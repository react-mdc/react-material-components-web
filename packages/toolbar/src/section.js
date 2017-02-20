/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import type {Alignment} from './types';
import {SECTION_BASE_CLASS_NAME} from './constants';
import * as helpers from './helpers';

export const CLASS_NAME = SECTION_BASE_CLASS_NAME;

export type Props<P: {}> = WrapperProps<P> & {
  align?: Alignment
};

/**
 * Toolbar section
 */
export default class Section<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <section />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      align,
      className,
      ...props
    } = this.props;
    let classes = [];
    if (align != null) {
      classes.push(helpers.classNameForSectionAlignment(align));
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
