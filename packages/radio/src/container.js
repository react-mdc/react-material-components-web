/* @flow */
import React from 'react';
import classNames from 'classnames';
import {MDCRadioFoundation} from '@material/radio/dist/mdc.radio';
import {Set, OrderedSet} from 'immutable';

import type {EventHandler} from '@react-mdc/core/lib/types';
import type {Props as WrapperProps} from '@react-mdc/core/lib/wrapper';
import {PropWrapper} from '@react-mdc/core';

import type {AdapterNativeControlDelegate, AdapterNativeControlCallback} from './types';
import {AdapterNativeControlDelegatePropType} from './types';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  PREFIX: CLASS_NAME
};

export type Props<P: {}> = WrapperProps<P> & {
  onChange?: EventHandler,
  checked?: boolean,
  disabled?: boolean
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

  static childContextTypes = {
    adapterNativeControlDelegate: AdapterNativeControlDelegatePropType
  }

  state: State = {
    foundationClasses: new OrderedSet()
  }

  static defaultProps = {
    wrap: <div />
  }

  drawerCallback: ?AdapterNativeControlCallback

  adapterNativeControlDelegate: AdapterNativeControlDelegate = {
    setCallback: (callback: AdapterNativeControlCallback) => {
      this.drawerCallback = callback;
      this.drawerCallback.setDefaultOnChange(this.handleChange);
    },
    unsetCallback: (callback: AdapterNativeControlCallback) => {
      if (this.drawerCallback === callback) {
        this.drawerCallback = null;
      }
    },
    isChecked: (): ?boolean => {
      if (this.props.checked != null) {
        return this.props.checked;
      }
      return undefined;
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
      if (this.drawerCallback == null) {
        return null;
      }
      return this.drawerCallback.getDOMNode();
    }
  })

  getChildContext (): ChildContext {
    return {
      adapterNativeControlDelegate: this.adapterNativeControlDelegate
    };
  }

  getClassName (props: Props<P>, state: State): string {
    let {
      className
    } = props;
    return classNames(
      CLASS_NAME,
      className,
      state.foundationClasses.toJS()
    );
  }

  syncFoundation (props: Props<P>) {
    if (props.checked != null && this.foundation.isChecked() !== props.checked) {
      this.foundation.setChecked(props.checked);
    }
    if (props.disabled != null && this.foundation.isDisabled() !== props.disabled) {
      this.foundation.setDisabled(props.disabled);
    }
  }

  // Foundation lifecycle
  componentDidMount () {
    this.foundation.init();
    if (this.props.checked != null) {
      this.foundation.setChecked(this.props.checked);
    }
    if (this.props.disabled != null) {
      this.foundation.setDisabled(this.props.disabled);
    }
  }

  componentWillUnmount () {
    this.foundation.destroy();
  }

  // Sync props and internal state
  componentWillReceiveProps (props: Props<P>) {
    this.syncFoundation(props);
  }

  // Event handler
  handleChange = (evt: SyntheticInputEvent, ...args: Array<void>) => {
    if (this.props.checked != null) {
      if (this.foundation.isChecked() !== this.props.checked) {
        // Checked state should not be changed by foundation
        this.foundation.setChecked(this.props.checked);
      }
    }
    if (this.props.onChange != null) {
      this.props.onChange(evt, ...args);
    }
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      checked: _checked,
      disabled: _disabled,
      className: _className,
      onChange: _onChange,
      ...props
    } = this.props;

    let className = this.getClassName(this.props, this.state);
    return {
      ...props,
      className
    };
  }
}
