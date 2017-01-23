/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {ReactComponent} from '../../types';
import {HEADER_CONTENT_CLASS_NAME} from './constants';

export type Props = {
  component: ReactComponent,
  className?: string,
  [string]: any
};

export default class HeaderContent extends React.Component {
  props: Props

  static defaultProps = {
    component: 'div'
  }

  render (): React.Element<*> {
    let {
      component,
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
    return React.createElement(component, props);
  }
}
