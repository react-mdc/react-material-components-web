/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
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

import {BASE_CLASS_NAME} from './constants';
import {FoundationAdapter, InputAdapter} from './adapter';

export const CLASS_NAME = `${BASE_CLASS_NAME}__input`;

export const propertyClassNames = {
  PREFIX: CLASS_NAME
};

export type Props<P: {}> = WrapperProps<P> & {
};

type State = {
  foundationEventListeners: Map<string, Set<EventListener>>
};

type Context = {
  adapter: FoundationAdapter
};

// Input with type="checkbox" as default
function TextInput (props: *): React.Element<*> {
  return (
    <input type="text" {...props} />
  );
}

/**
 * Textfield input component
 */
export default class Input<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  context: Context

  state: State

  static contextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired
  }

  static defaultProps = {
    wrap: TextInput
  }

  state = {
    foundationEventListeners: new Map()
  }

  componentDidMount () {
    this.context.adapter.setInputAdapter(new InputAdapterImpl(this));
  }

  componentWillUnmount () {
    this.context.adapter.setInputAdapter(new InputAdapter());
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      className
    );
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

class InputAdapterImpl extends InputAdapter {
  element: Input<*>

  constructor (element: Input<*>) {
    super();
    this.element = element;
  }

  _registerInputHandler (evt: string, handler: EventListener) {
    this.element.setState((state: State) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        evt,
        new OrderedSet(),
        x => x.add(handler)
      )
    }));
  }

  _deregisterInputHandler (evt: string, handler: EventListener) {
    this.element.setState((state: State) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        evt,
        new OrderedSet(),
        x => x.delete(handler)
      )
    }));
  }

  registerInputFocusHandler (handler: EventListener) {
    this._registerInputHandler('focus', handler);
  }
  deregisterInputFocusHandler (handler: EventListener) {
    this._deregisterInputHandler('focus', handler);
  }
  registerInputBlurHandler (handler: EventListener) {
    this._registerInputHandler('blur', handler);
  }
  deregisterInputBlurHandler (handler: EventListener) {
    this._deregisterInputHandler('blur', handler);
  }
  registerInputInputHandler (handler: EventListener) {
    this._registerInputHandler('input', handler);
  }
  deregisterInputInputHandler (handler: EventListener) {
    this._deregisterInputHandler('input', handler);
  }
  registerInputKeydownHandler (handler: EventListener) {
    this._registerInputHandler('keydown', handler);
  }
  deregisterInputKeydownHandler (handler: EventListener) {
    this._deregisterInputHandler('keydown', handler);
  }
  getNativeInput (): ?{value: string, disabled: boolean, checkValidity: () => boolean} {
    return ReactDOM.findDOMNode(this.element);
  }
}
