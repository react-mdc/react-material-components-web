/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {
  Set,
  OrderedSet,
  Map
} from 'immutable';

import type {EventHandler} from '@react-mdc/base/lib/types';
import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {
  PropWrapper,
  NativeDOMAdapter
} from '@react-mdc/base';
import {eventHandlerDecorator} from '@react-mdc/base/lib/util';

import {BASE_CLASS_NAME} from './constants';
import {FoundationAdapter, NativeControlAdapter} from './adapter';

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

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
function CheckboxInput (props: *): React.Element<*> {
  return (
    <input type="checkbox" {...props} />
  );
}

/**
 * Checkbox input component
 */
export default class NativeControl<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  context: Context

  state: State

  defaultOnChange: EventHandler = () => {}

  static contextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired
  }

  static defaultProps = {
    wrap: CheckboxInput
  }

  state = {
    foundationEventListeners: new Map()
  }

  componentDidMount () {
    this.context.adapter.setNativeControlAdapter(new NativeControlAdapterImpl(this));
  }

  componentWillUnmount () {
    this.context.adapter.setNativeControlAdapter(new NativeControlAdapter());
  }

  handleChange = (evt: SyntheticEvent, ...args: Array<void>) => {
    this.defaultOnChange(evt, ...args);
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      onChange,
      ...props
    } = this.props;
    className = classNames(
      CLASS_NAME,
      className
    );
    return {
      onChange: eventHandlerDecorator(this.handleChange)(onChange),
      ...props,
      className,
      checked: this.context.adapter.isChecked()
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

class NativeControlAdapterImpl extends NativeControlAdapter {
  element: NativeControl<*>

  constructor (element: NativeControl<*>) {
    super();
    this.element = element;
  }

  registerChangeHandler (handler: EventListener) {
    this.element.setState((state: State) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        'change',
        new OrderedSet(),
        x => x.add(handler)
      )
    }));
  }
  deregisterChangeHandler (handler: EventListener) {
    this.element.setState((state: State) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        'change',
        new OrderedSet(),
        x => x.delete(handler)
      )
    }));
  }
  getNativeControl (): ?HTMLElement {
    return ReactDOM.findDOMNode(this.element);
  }
  setDefaultOnChangeHandler (handler: EventHandler) {
    this.element.defaultOnChange = handler;
  }
}
