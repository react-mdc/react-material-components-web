/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Wrappable} from '../core/types';
import {Wrapper} from '../core';

import type {TextStyle} from './types';
import {ADJUST_MARGIN_CLASS} from './constants';
import {classNameForTextStyle} from './helpers';

export type BaseProps<P: {}> = {
  adjustMargin?: boolean,
  className?: string,
  wrap?: Wrappable<P>
} & P;

export type Props<P: {}> = {
  textStyle: TextStyle,
  adjustMargin?: boolean,
  className?: string,
  wrap?: Wrappable<P>
} & P;

/**
 * Text component decorated by mdc-typography
 */
export default class Text<P: any> extends Wrapper<*, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    adjustMargin: false
  }

  renderWrap (): Wrappable<P> {
    if (this.props.wrap == null) {
      return defaultComponent(this.props.textStyle);
    }
    return this.props.wrap;
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      textStyle,
      adjustMargin,
      className,
      ...props
    } = this.props;
    className = classNames(
      classNameForTextStyle(textStyle),
      {
        [ADJUST_MARGIN_CLASS]: adjustMargin
      },
      className
    );
    return {
      className,
      ...props
    };
  }
}

export function defaultComponent (style: TextStyle): Wrappable<any> {
  switch (style) {
    case 'display4':
      return <h1 />;
    case 'display3':
      return <h2 />;
    case 'display2':
      return <h3 />;
    case 'display1':
      return <h4 />;
    case 'headline':
      return <h5 />;
    case 'title':
      return <h6 />;
    case 'subheading2':
    case 'subheading1':
      return <div />;
    case 'body2':
    case 'body1':
    case 'caption':
      return <p />;
    default:
      throw new TypeError(`Invalid text style: ${style}`);
  }
}
