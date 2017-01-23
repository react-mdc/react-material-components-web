/* @flow */
import React from 'react';
import classNames from 'classnames';
import '@material/drawer/dist/mdc.drawer.css';

import type {ReactComponent} from '../../types';
import {DRAWER_CLASS_NAME} from './constants';

export type Props = {
  component: ReactComponent,
  className?: string,
  [string]: any
};

export default class Drawer extends React.Component {
  props: Props

  static defaultProps = {
    component: 'nav'
  }

  render (): React.Element<*> {
    let {
      component,
      className,
      ...props
    } = this.props;
    className = classNames(
      DRAWER_CLASS_NAME,
      className
    );
    props = {
      ...props,
      className
    };
    return React.createElement(component, props);
  }
}
