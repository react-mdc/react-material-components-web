/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {
  PropWrapper,
  NativeDOMAdapter
} from '@react-mdc/base';

import type {Margin, Gutter} from './types';
import {
  BASE_CLASS_NAME,
  MARGIN_CSS_VARIABLE,
  GUTTER_CSS_VARIABLE
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export type Props<P> = WrapperProps<P> & {
  className?: string,
  margin?: Margin,
  gutter?: Gutter
};

/**
 * Wrapper component of mdc-layout-grid
 */
export default class Container<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <div />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      margin: _margin,
      gutter: _gutter,
      className,
      ...props
    } = this.props;
    return {
      ...props,
      className: classNames(CLASS_NAME, className)
    };
  }

  normalizeMarginAndGutter (value: Margin | Gutter): string {
    if (typeof value === 'number') {
      return `${value}px`;
    } else {
      return value;
    }
  }

  render (): React.Element<*> {
    let cssVariables = {};
    if (this.props.margin != null) {
      cssVariables[MARGIN_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.margin);
    }
    if (this.props.gutter != null) {
      cssVariables[GUTTER_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.gutter);
    }
    return (
      <NativeDOMAdapter cssVariables={cssVariables}>
        {super.render()}
      </NativeDOMAdapter>
    );
  }
}
