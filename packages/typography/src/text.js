/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Wrappable} from '@react-mdc/base/lib/types';
import {Wrapper} from '@react-mdc/base';

import type {TextStyle} from './types';
import {BASE_CLASS_NAME} from './constants';
import {classNameForTextStyle} from './helpers';

export const propertyClassNames = {
  ADJUST_MARGIN: `${BASE_CLASS_NAME}--adjust-margin`
};

export type BaseProps<P> = {
  adjustMargin?: boolean,
  className?: string,
  wrap?: Wrappable<P>
};

export type Props<P> = BaseProps<P> & {
  textStyle: TextStyle
};

/**
 * Text component decorated by mdc-typography
 */
export default class Text<P: {}> extends Wrapper<P, *, Props<P>, *> {
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
        [propertyClassNames.ADJUST_MARGIN]: adjustMargin
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
