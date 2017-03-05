/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import type {GridNumber, Alignment} from './types';
import {CELL_BASE_CLASS_NAME} from './constants';
import * as helpers from './helpers';

export const CLASS_NAME = CELL_BASE_CLASS_NAME;

export type Props<P> = WrapperProps<P> & {
  className?: string,
  span?: GridNumber,
  spanDesktop?: GridNumber,
  spanTablet?: GridNumber,
  spanPhone?: GridNumber,
  order?: GridNumber,
  align?: Alignment
};

/**
 * Grid cell component
 */
export default class Cell<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
  }

  getClassName (): string {
    let {
      className,
      span,
      spanDesktop,
      spanTablet,
      spanPhone,
      order,
      align
    } = this.props;

    let classes = [CLASS_NAME];
    if (span != null) {
      classes.push(helpers.classNameForCellSpan(span));
    }
    if (spanDesktop != null) {
      classes.push(helpers.classNameForCellSpan(spanDesktop, 'desktop'));
    }
    if (spanTablet != null) {
      classes.push(helpers.classNameForCellSpan(spanTablet, 'tablet'));
    }
    if (spanPhone != null) {
      classes.push(helpers.classNameForCellSpan(spanPhone, 'phone'));
    }
    if (align != null) {
      classes.push(helpers.classNameForCellAlignment(align));
    }
    if (order != null) {
      classes.push(helpers.classNameForCellOrder(order));
    }
    return classNames(classes, className);
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className: _className,
      span: _span,
      spanDesktop: _spanDesktop,
      spanTablet: _spanTablet,
      spanPhone: _spanPhone,
      order: _order,
      align: _align,
      ...props
    } = this.props;

    let className = this.getClassName();

    return {
      className,
      ...props
    };
  }
}
