/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {MDCCheckboxFoundation} from '@material/checkbox/dist/mdc.checkbox';
import {getCorrectEventName} from '@material/animation/dist/mdc.animation';
import {
  Set,
  OrderedSet,
  Map
} from 'immutable';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {
  PropWrapper,
  NativeDOMAdapter
} from '@react-mdc/base';

import {ContainerAdapter, FoundationAdapter} from './adapter';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  PREFIX: CLASS_NAME
};

export type Props<P: {}> = WrapperProps<P> & {
  checked?: boolean,
  disabled?: boolean,
  indeterminate?: boolean
};

type State = {
  foundationClasses: Set<string>,
  foundationEventListeners: Map<string, Set<EventListener>>
};

export type ChildContext = {
  adapter: FoundationAdapter
};

/**
 * Checkbox input container component
 */
export default class Container<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>
  adapter: FoundationAdapter
  foundation: MDCCheckboxFoundation

  static childContextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter)
  }

  state: State = {
    foundationClasses: new OrderedSet(),
    foundationEventListeners: new Map()
  }

  static defaultProps = {
    wrap: <div />
  }

  constructor (props: Props<P>) {
    super(props);
    this.adapter = new FoundationAdapter(this);
    this.foundation = new MDCCheckboxFoundation(this.adapter.toObject());
  }

  getChildContext (): ChildContext {
    return {
      adapter: this.adapter
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

  getRootDOMNode (): HTMLElement {
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
    this.adapter.setContainerAdapter(new ContainerAdapterImpl(this));
    this.foundation.init();
    this.adapter.setDefaultOnChangeHandler(this.handleChange);
    if (this.props.checked != null) {
      this.foundation.setChecked(this.props.checked);
    }
    if (this.props.disabled != null) {
      this.foundation.setDisabled(this.props.disabled);
    }
  }

  componentWillUnmount () {
    this.foundation.destroy();
    this.adapter.setContainerAdapter(new ContainerAdapter());
  }

  // Sync props and internal state
  componentWillReceiveProps (props: Props<P>) {
    this.syncFoundation(props);
  }

  // Event handler
  handleChange = (_evt: SyntheticInputEvent) => {
    if (this.props.checked != null) {
      if (this.foundation.isChecked() !== this.props.checked) {
        // Checked state should not be changed by foundation
        this.foundation.setChecked(this.props.checked);
      }
    }
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      checked: _checked,
      disabled: _disabled,
      indeterminate: _indeterminate,
      className: _className,
      ...props
    } = this.props;

    let className = this.getClassName(this.props, this.state);
    return {
      ...props,
      className
    };
  }

  render (): * {
    return (
      <NativeDOMAdapter
        eventListeners={this.state.foundationEventListeners.toJS()}>
        {super.render()}
      </NativeDOMAdapter>
    );
  }
}

class ContainerAdapterImpl extends ContainerAdapter {
  element: Container<*>

  constructor (element: Container<*>) {
    super();
    this.element = element;
  }
  addClass (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.add(className)
    }));
  }
  removeClass (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.remove(className)
    }));
  }
  registerAnimationEndHandler (handler: EventListener) {
    this.element.setState((state) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        getCorrectEventName(window, 'animationend'),
        new OrderedSet(),
        x => x.add(handler)
      )
    }));
  }
  deregisterAnimationEndHandler (handler: EventListener) {
    const evt = getCorrectEventName(window, 'animationend');
    if (this.element.state.foundationEventListeners.get(evt) === handler) {
      this.element.setState((state) => ({
        foundationEventListeners: state.foundationEventListeners.delete(evt)
      }));
    }
  }
  forceLayout () {
    /* no-op */
  }
  isAttachedToDOM (): boolean {
    // Always true. Because we initialize foundation on componentDidMount
    return true;
  }
  isChecked (): ?boolean {
    return this.element.props.checked;
  }
}
