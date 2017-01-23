/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {ReactComponent} from '../../types';
import {HEADER_CLASS_NAME} from './constants';

export type Props = {
  component: ReactComponent,
  className?: string,
  [string]: any
};

export default class Header extends React.Component {
  props: Props

  static defaultProps = {
    component: 'header'
  }

  render (): React.Element<*> {
    let {
      component,
      className,
      ...props
    } = this.props;
    className = classNames(
      HEADER_CLASS_NAME,
      className
    );
    props = {
      ...props,
      className
    };
    return React.createElement(component, props);
  }
}
