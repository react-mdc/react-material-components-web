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

import {supportsCssVariables, getMatchesProperty} from './util';

import {
  BASE_CLASS_NAME
} from './constants';

const MATCHES = getMatchesProperty(window.HTMLElement.prototype);

export const CLASS_NAME = `${BASE_CLASS_NAME}-surface`;

export type Props<P: {}> = WrapperProps<P> & {
  unbounded: boolean
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

  state: State = {
    foundationClasses: new OrderedSet(),
    foundationCssVars: new OrderedMap(),
    foundationEventListeners: new OrderedMap()
  }

  static defaultProps = {
    wrap: <div />,
    unbounded: false
  }

  foundation = new MDCRippleFoundation({
    browserSupportsCssVars: () => supportsCssVariables(window),
    isUnbounded: () => this.props.unbounded,
    isSurfaceActive: () => (this.getDOMNode(): any)[MATCHES](':active'),
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
    registerInteractionHandler: (evtType: string, handler: EventListener) => {
      this.setState((state) => ({
        foundationEventListeners: state.foundationEventListeners.update(
          evtType,
          new OrderedSet(),
          (x) => x.add(handler)
        )
      }));
    },
    deregisterInteractionHandler: (evtType: string, handler: EventListener) => {
      this.setState((state) => ({
        foundationEventListeners: state.foundationEventListeners.update(
          evtType,
          new OrderedSet(),
          (x) => x.delete(handler)
        )
      }));
    },
    registerResizeHandler: (handler: EventListener) => {
      window.addEventListener('resize', handler);
    },
    deregisterResizeHandler: (handler: EventListener) => {
      window.removeEventListener('resize', handler);
    },
    updateCssVariable: (varName: string, value: ?string) => {
      this.setState((state) => ({
        foundationCssVars: state.foundationCssVars.set(varName, value)
      }));
    },
    computeBoundingRect: () => this.getDOMNode().getBoundingClientRect(),
    getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset})
  })

  // Foundation lifecycle
  componentDidMount () {
    this.foundation.init();
  }

  componentWillUnmount () {
    this.foundation.destroy();
  }

  getDOMNode (): HTMLElement {
    return ReactDOM.findDOMNode(this);
  }

  getClassName (props: Props<P>, state: State): string {
    let {className} = props;
    return classNames(
      CLASS_NAME,
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

export default Ripple;
