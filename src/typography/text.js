/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {ReactComponent} from '../types';
import type {TextStyle} from './types';
import {ADJUST_MARGIN_CLASS} from './constants';
import {classNameForTextStyle} from './helpers';

type BaseProps = {
  component?: ReactComponent,
  adjustMargin: boolean,
  [string]: any
};

type Props = {
  textStyle: TextStyle
} & BaseProps;

/**
 * Text component decorated by mdc-typography
 */
export default class Text extends React.Component {
  props: Props

  static defaultProps = {
    adjustMargin: false
  }

  render (): React.Element<*> {
    let {
      textStyle,
      component,
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
    props = {
      ...props,
      className
    };
    if (!component) {
      component = defaultComponent(textStyle);
    }
    return React.createElement(component, props, null);
  }
}

export function defaultComponent (style: TextStyle): ReactComponent {
  switch (style) {
    case 'display4':
      return 'h1';
    case 'display3':
      return 'h2';
    case 'display2':
      return 'h3';
    case 'display1':
      return 'h4';
    case 'headline':
      return 'h5';
    case 'title':
      return 'h6';
    case 'subheading2':
    case 'subheading1':
      return 'div';
    case 'body2':
    case 'body1':
    case 'caption':
      return 'p';
    default:
      throw new TypeError(`Invalid text style: ${style}`);
  }
}
