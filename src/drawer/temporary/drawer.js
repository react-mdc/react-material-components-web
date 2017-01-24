/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../../core/wrapper';
import {PropWrapper} from '../../core';

import type {AdapterDrawerDelegate, AdapterDrawerCallback} from './types';
import {AdapterDrawerDelegatePropType} from './types';
import {DRAWER_CLASS_NAME} from './constants';

export type Props<P> = WrapperProps<P> & {
  className?: string
};

type State = {
  translateX: number
};

type Context = {
  adapterDrawerDelegate: AdapterDrawerDelegate
};

export default class Drawer<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>
  state: State
  context: Context

  static contextTypes = {
    adapterDrawerDelegate: AdapterDrawerDelegatePropType.isRequired
  }

  static defaultProps = {
    wrap: <nav />
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

  renderProps (): P {
    let {
      wrap: _wrap,
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
    return props;
  }
}
