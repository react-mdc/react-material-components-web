/* @flow */
import React from 'react';
import classNames from 'classnames';
import {MDCRadioFoundation} from '@material/radio/dist/mdc.radio';
import {Set, OrderedSet} from 'immutable';

import type {Props as WrapperProps} from '../core/wrapper';
import {PropWrapper} from '../core';

import type {AdapterNativeControlDelegate} from './types';
import {AdapterNativeControlDelegatePropType} from './types';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  PREFIX: CLASS_NAME,
  DISABLED: `${CLASS_NAME}--disabled`
};

export type Props<P: {}> = WrapperProps<P> & {
  disabled: boolean
};

type State = {
  foundationClasses: Set<string>
};

export type ChildContext = {
  adapterNativeControlDelegate: AdapterNativeControlDelegate
};

/**
 * Radio input container component
 */
export default class Container<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  nativeControl: ?Element

  static childContextTypes = {
    adapterNativeControlDelegate: AdapterNativeControlDelegatePropType
  }

  state: State = {
    foundationClasses: new OrderedSet()
  }

  static defaultProps = {
    disabled: false,
    wrap: <div />
  }

  adapterNativeControlDelegate: AdapterNativeControlDelegate = {
    onNativeControlMount: (el: Element) => {
      this.nativeControl = el;
    },
    onNativeControlUnmount: () => {
      this.nativeControl = null;
    }
  }

  foundation = new MDCRadioFoundation({
    addClass: (className: string) => {
      this.setState((state) => ({
        foundationClasses: state.foundationClasses.add(className)
      }));
    },
    removeClass: (className: string) => {
      this.setState((state) => ({
        foundationClasses: state.foundationClasses.remove(className)
      }));
    },
    getNativeControl: (): ?Element => {
      return this.nativeControl;
    }
  })

  getChildContext (): ChildContext {
    return {
      adapterNativeControlDelegate: this.adapterNativeControlDelegate
    };
  }

  getClassName (props: Props<P>, state: State): string {
    let {
      className,
      disabled
    } = props;
    return classNames(
      CLASS_NAME,
      {
        [propertyClassNames.DISABLED]: disabled
      },
      className,
      state.foundationClasses.toJS()
    );
  }

  // Foundation lifecycle
  componentDidMount () {
    this.foundation.init();
  }

  componentWillUnmount () {
    this.foundation.destroy();
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      disabled: _disabled,
      className: _className,
      ...props
    } = this.props;

    let className = this.getClassName(this.props, this.state);
    return {
      ...props,
      className
    };
  }
}
