/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '../../core/wrapper';
import {PropWrapper} from '../../core';
import {eventHandlerDecorator} from '../../core/util';

import type {AdapterDrawerDelegate, AdapterDrawerCallback} from './types';
import {AdapterDrawerDelegatePropType} from './types';
import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__drawer`;

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

  handleRef = (el: Element) => {
    this.context.adapterDrawerDelegate.onDrawerMount(el);
  }

  handleClick = (evt: SyntheticEvent) => {
    // Don't use click event handler of MDCTemporaryDrawerFoundation
    // See `handleClick()` in `container.js` for more detail.
    evt.stopPropagation();
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      onClick,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      className
    );
    props = {
      ref: this.handleRef,
      onClick: eventHandlerDecorator(this.handleClick)(onClick),
      ...props,
      className
    };
    return props;
  }
}
