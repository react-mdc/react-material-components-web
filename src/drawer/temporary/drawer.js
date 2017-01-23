/* @flow */
import React from 'react';
import classNames from 'classnames';
import '@material/drawer/dist/mdc.drawer.css';

import type {ReactComponent} from '../../types';
import type {AdapterDrawerDelegate, AdapterDrawerCallback} from './types';
import {AdapterDrawerDelegatePropType} from './types';
import {DRAWER_CLASS_NAME} from './constants';

export type Props = {
  component: ReactComponent,
  className?: string,
  [string]: any
};

type State = {
  translateX: number
};

type Context = {
  adapterDrawerDelegate: AdapterDrawerDelegate
};

export default class Drawer extends React.Component {
  props: Props
  state: State
  context: Context

  static contextTypes = {
    adapterDrawerDelegate: AdapterDrawerDelegatePropType.isRequired
  }

  static defaultProps = {
    component: 'nav'
  }

  adapterCallback: AdapterDrawerCallback = {
    setTranslateX: (value: number) => {
      this.setState({translateX: value});
    }
  }

  componentDidMount () {
    this.context.adapterDrawerDelegate.addAdapterDrawerCallback(this.adapterCallback);
  }

  componentWillUnmount () {
    this.context.adapterDrawerDelegate.onDrawerUnmount();
    this.context.adapterDrawerDelegate.removeAdapterDrawerCallback(this.adapterCallback);
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
      ref: (el) => this.context.adapterDrawerDelegate.onDrawerMount(el),
      ...props,
      className
    };
    return React.createElement(component, props);
  }
}
