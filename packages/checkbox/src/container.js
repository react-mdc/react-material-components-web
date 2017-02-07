/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {MDCCheckboxFoundation} from '@material/checkbox/dist/mdc.checkbox';
import {getCorrectEventName} from '@material/animation/dist/mdc.animation';
import {
  Set,
  OrderedSet,
  Map,
  OrderedMap
} from 'immutable';

import type {EventHandler} from '@react-mdc/base/lib/types';
import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

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
  disabled?: boolean,
  indeterminate?: boolean
};

type State = {
  foundationClasses: Set<string>,
  foundationEventListeners: Map<string, EventListener>,
  foundationNativeControlEventListeners: Map<string, EventListener>
};

export type ChildContext = {
  adapterNativeControlDelegate: AdapterNativeControlDelegate
};

/**
 * Checkbox input container component
 */
export default class Container<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static childContextTypes = {
    adapterNativeControlDelegate: AdapterNativeControlDelegatePropType
  }

  state: State = {
    foundationClasses: new OrderedSet(),
    foundationEventListeners: new OrderedMap(),
    foundationNativeControlEventListeners: new OrderedMap()
  }

  static defaultProps = {
    wrap: <div />
  }

  nativeControlCallback: ?AdapterNativeControlCallback

  adapterNativeControlDelegate: AdapterNativeControlDelegate = {
    setCallback: (callback: AdapterNativeControlCallback) => {
      this.nativeControlCallback = callback;
      this.nativeControlCallback.setDefaultOnChange(this.handleChange);
    },
    unsetCallback: (callback: AdapterNativeControlCallback) => {
      if (this.nativeControlCallback === callback) {
        this.nativeControlCallback = null;
      }
    },
    isChecked: (): ?boolean => {
      if (this.props.checked != null) {
        return this.props.checked;
      }
      return undefined;
    }
  }

  foundation = new MDCCheckboxFoundation({
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
    registerAnimationEndHandler: (handler: EventListener) => {
      this.setState((state) => ({
        foundationEventListeners: state.foundationEventListeners.set(getCorrectEventName(window, 'animationend'), handler)
      }));
    },
    deregisterAnimationEndHandler: (handler: EventListener) => {
      const evt = getCorrectEventName(window, 'animationend');
      if (this.state.foundationEventListeners.get(evt) === handler) {
        this.setState((state) => ({
          foundationEventListeners: state.foundationEventListeners.delete(evt)
        }));
      }
    },
    registerChangeHandler: (handler: EventListener) => {
      this.setState((state: State) => ({
        foundationNativeControlEventListener: state.foundationNativeControlEventListeners.set('change', handler)
      }));
    },
    deregisterChangeHandler: (handler: EventListener) => {
      if (this.state.foundationNativeControlEventListeners.get('change') === handler) {
        this.setState((state: State) => ({
          foundationNativeControlEventListener: state.foundationNativeControlEventListeners.delete('change')
        }));
      }
    },
    getNativeControl: (): ?Element => {
      if (this.nativeControlCallback == null) {
        return null;
      }
      return this.nativeControlCallback.getDOMNode();
    },
    forceLayout: () => { /* no-op */ },
    isAttachedToDOM: () => true // Always true. Because we initialize foundation on componentDidMount
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

  getRootDOMNode (): window.HTMLElement {
    return ReactDOM.findDOMNode(this);
  }

  syncFoundation (props: Props<P>) {
    if (props.checked != null && this.foundation.isChecked() !== props.checked) {
      this.foundation.setChecked(props.checked);
    }
    if (props.disabled != null && this.foundation.isDisabled() !== props.disabled) {
      this.foundation.setDisabled(props.disabled);
    }
    if (props.indeterminate != null && this.foundation.isIndeterminate() !== props.indeterminate) {
      this.foundation.setIndeterminate(props.indeterminate);
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

  // Sync dom node with foundation
  componentDidUpdate (_prevProps: Props<P>, prevState: State) {
    const rootNode = this.getRootDOMNode();
    // Sync root event listeners
    prevState.foundationEventListeners.forEach((v: *, k: *) => {
      if (v !== this.state.foundationEventListeners.get(k)) {
        rootNode.removeEventListener(k, v);
      }
    });
    this.state.foundationEventListeners.forEach((v: *, k: *) => {
      rootNode.addEventListener(k, v);
    });

    if (this.nativeControlCallback != null) {
      const nativeNode = this.nativeControlCallback.getDOMNode();
      // Sync native control event listeners
      prevState.foundationNativeControlEventListeners.forEach((v: *, k: *) => {
        if (v !== this.state.foundationNativeControlEventListeners.get(k)) {
          nativeNode.removeEventListener(k, v);
        }
      });
      this.state.foundationNativeControlEventListeners.forEach((v: *, k: *) => {
        nativeNode.addEventListener(k, v);
      });
    }
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
      indeterminate: _indeterminate,
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
