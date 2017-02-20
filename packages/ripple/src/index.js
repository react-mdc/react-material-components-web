/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {
  MDCRippleFoundation
} from '@material/ripple/dist/mdc.ripple';
import {
  Set,
  OrderedSet,
  Map,
  OrderedMap
} from 'immutable';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper, NativeDOMAdapter} from '@react-mdc/base';

import type {Color} from './types';
import {FoundationAdapter, RippleAdapter} from './adapter';
import {supportsCssVariables, getMatchesProperty} from './util';
import * as helpers from './helpers';

import {
  SURFACE_BASE_CLASS_NAME
} from './constants';

const MATCHES = getMatchesProperty(window.HTMLElement.prototype);

export const CLASS_NAME = SURFACE_BASE_CLASS_NAME;

export type Props<P: {}> = WrapperProps<P> & {
  unbounded: boolean,
  color?: Color
};

type State = {
  foundationClasses: Set<string>,
  foundationCssVars: Map<string, ?string>,
  foundationEventListeners: Map<string, Set<EventListener>>
};

/**
 * Ripple foundation component
 */
export class Ripple<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>
  adapter: FoundationAdapter
  foundation: MDCRippleFoundation

  state: State = {
    foundationClasses: new OrderedSet(),
    foundationCssVars: new OrderedMap(),
    foundationEventListeners: new OrderedMap()
  }

  static defaultProps = {
    wrap: <div />,
    unbounded: false
  }

  constructor (props: Props<P>) {
    super(props);
    this.adapter = new FoundationAdapter(this);
    this.foundation = new MDCRippleFoundation(this.adapter.toObject());
  }

  // Exposed methods
  activate () {
    this.foundation.activate();
  }

  deactivate () {
    this.foundation.deactivate();
  }

  // Foundation lifecycle
  componentDidMount () {
    this.adapter.setRippleAdapter(new RippleAdapterImpl(this));
    this.foundation.init();
  }

  componentWillUnmount () {
    this.foundation.destroy();
    this.adapter.setRippleAdapter(new RippleAdapter());
  }

  getDOMNode (): HTMLElement {
    return ReactDOM.findDOMNode(this);
  }

  getClassName (props: Props<P>, state: State): string {
    let {className} = props;
    let classes = [];
    if (this.props.color != null) {
      classes.push(helpers.classNameForColor(this.props.color));
    }
    return classNames(
      CLASS_NAME,
      classes,
      className,
      state.foundationClasses.toJS()
    );
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className: _className,
      unbounded: _unbounded,
      ...props
    } = this.props;

    let className = this.getClassName(this.props, this.state);

    props = {
      ...props,
      className
    };
    return props;
  }

  render (): * {
    return (
      <NativeDOMAdapter
        cssVariables={this.state.foundationCssVars.toJS()}
        eventListeners={this.state.foundationEventListeners.toJS()}>
        {super.render()}
      </NativeDOMAdapter>
    );
  }
}

class RippleAdapterImpl extends RippleAdapter {
  element: Ripple<*>

  constructor (element: Ripple<*>) {
    super();
    this.element = element;
  }
  browserSupportsCssVars (): boolean {
    return supportsCssVariables(window);
  }
  isUnbounded (): boolean {
    return this.element.props.unbounded;
  }
  isSurfaceActive (): boolean {
    return (this.element.getDOMNode(): any)[MATCHES](':active');
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
  registerInteractionHandler (evtType: string, handler: EventListener) {
    console.log(evtType);
    this.element.setState((state) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        evtType,
        new OrderedSet(),
        (x) => x.add(handler)
      )
    }));
  }
  deregisterInteractionHandler (evtType: string, handler: EventListener) {
    this.element.setState((state) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        evtType,
        new OrderedSet(),
        (x) => x.delete(handler)
      )
    }));
  }
  registerResizeHandler (handler: EventListener) {
    window.addEventListener('resize', handler);
  }
  deregisterResizeHandler (handler: EventListener) {
    window.removeEventListener('resize', handler);
  }
  updateCssVariable (varName: string, value: ?string) {
    if (value == null) {
      this.element.setState((state) => ({
        foundationCssVars: state.foundationCssVars.delete(varName)
      }));
    } else {
      this.element.setState((state) => ({
        foundationCssVars: state.foundationCssVars.set(varName, value)
      }));
    }
  }
  computeBoundingRect (): ?ClientRect {
    return this.element.getDOMNode().getBoundingClientRect();
  }
  getWindowPageOffset (): {x: number, y: number} {
    return {x: window.pageXOffset, y: window.pageYOffset};
  }
}

export default Ripple;
