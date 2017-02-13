/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {MDCTemporaryDrawerFoundation} from '@material/drawer/dist/mdc.drawer';
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
import {eventHandlerDecorator} from '@react-mdc/base/lib/util';

import * as drawerUtil from './drawerUtil';
import {FoundationAdapter, ContainerAdapter} from './adapter';
import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = BASE_CLASS_NAME;

export type Props<P> = WrapperProps<P> & {
  open: boolean,
  className?: string,
  rtl: boolean,
  style: {[string]: any},
  onOpenDrawer?: (TemporaryDrawer<P>) => void,
  onCloseDrawer?: (TemporaryDrawer<P>) => void
};

type State = {
  foundationClasses: Set<string>,
  foundationCssVars: Map<string, ?string>,
  foundationEventListeners: Map<string, Set<EventListener>>,
  open: boolean
};

export type ChildContext = {
  adapter: FoundationAdapter
};

const {
  cssClasses: {
    OPEN: OPEN_CLASS_NAME
  },
  strings: {
    OPACITY_VAR_NAME
  }
} = MDCTemporaryDrawerFoundation;

export default class TemporaryDrawer<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>
  adapter: FoundationAdapter
  foundation: MDCTemporaryDrawerFoundation

  static childContextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter)
  }

  static defaultProps = {
    wrap: <aside />,
    rtl: false,
    style: {}
  }

  state: State = {
    foundationClasses: new OrderedSet(),
    foundationCssVars: new Map(),
    foundationEventListeners: new Map(),
    open: false
  }

  constructor (props: Props<P>) {
    super(props);
    this.adapter = new FoundationAdapter(this);
    this.foundation = new MDCTemporaryDrawerFoundation(this.adapter.toObject());
  }

  getChildContext (): ChildContext {
    return {
      adapter: this.adapter
    };
  }

  getClassName (props: Props<P>, state: State): string {
    let {className} = props;
    return classNames(
      CLASS_NAME,
      className,
      state.foundationClasses.toJS()
    );
  }

  getRootDOMNode (): HTMLElement {
    return ReactDOM.findDOMNode(this);
  }

  // Sync props and internal state
  componentWillReceiveProps (props: Props<P>) {
    if (props.open !== this.state.open) {
      if (props.open) {
        this.foundation.open();
      } else {
        this.foundation.close();
      }
    }
  }

  // Foundation lifecycle
  componentDidMount () {
    this.adapter.setContainerAdapter(new ContainerAdapterImpl(this));
    this.foundation.init();
  }

  componentWillUnmount () {
    this.foundation.destroy();
    this.adapter.setContainerAdapter(new ContainerAdapter());
  }

  // Custom event handler
  handleClick = (_evt: SyntheticEvent) => {
    // Cannot handle properly click event because of react bug
    // We implement react event handler with same functionally of this one
    // https://github.com/material-components/material-components-web/issues/225
    // https://github.com/facebook/react/issues/8693
    this.foundation.close();
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className: _className,
      rtl: _rtl,
      onClick,
      onOpenDrawer: _onOpenDrawer,
      onCloseDrawer: _onCloseDrawer,
      ...props
    } = this.props;

    let className = this.getClassName(this.props, this.state);
    props = {
      onClick: eventHandlerDecorator(this.handleClick)(onClick),
      ...props,
      className
    };
    return props;
  }

  render (): React.Element<*> {
    return (
      <NativeDOMAdapter
        cssVariables={this.state.foundationCssVars.toJS()}
        eventListeners={this.state.foundationEventListeners.toJS()}>
        {super.render()}
      </NativeDOMAdapter>
    );
  }
}

class ContainerAdapterImpl extends ContainerAdapter {
  element: TemporaryDrawer<*>

  constructor (element: TemporaryDrawer<*>) {
    super();
    this.element = element;
  }
  addClass (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.add(className)
    }));

    // MDCTemporaryDrawerFoundation does not provide opening/closing event.
    // But we can assume open/close by adding/removing OPEN_CLASS_NAME
    if (className === OPEN_CLASS_NAME) {
      this.element.setState({
        open: true
      });
      if (this.element.props.onOpenDrawer) {
        this.element.props.onOpenDrawer(this.element);
      }
    }
  }
  removeClass (className: string) {
    this.element.setState((state) => ({
      foundationClasses: state.foundationClasses.remove(className)
    }));

    // MDCTemporaryDrawerFoundation does not provide opening/closing event.
    // But we can assume open/close by adding/removing OPEN_CLASS_NAME
    if (className === OPEN_CLASS_NAME) {
      this.element.setState({
        open: false
      });
      if (this.element.props.onCloseDrawer) {
        this.element.props.onCloseDrawer(this.element);
      }
    }
  }
  hasClass (className: string): boolean {
    return this.element.getClassName(this.element.props, this.element.state).split(/\s+/).includes(className);
  }
  registerInteractionHandler (evt: string, handler: EventListener) {
    // Don't use click event handler of MDCTemporaryDrawerFoundation
    // See `handleClick()` for more detail.
    if (evt === 'click') {
      return;
    }
    this.element.setState((state) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        drawerUtil.remapEvent(evt, window),
        new OrderedSet(),
        x => x.add(handler)
      )
    }));
  }
  deregisterInteractionHandler (evt: string, handler: EventListener) {
    // Don't use click event handler of MDCTemporaryDrawerFoundation
    // See `handleClick()` for more detail.
    if (evt === 'click') {
      return;
    }
    this.element.setState((state) => ({
      foundationEventListeners: state.foundationEventListeners.update(
        drawerUtil.remapEvent(evt, window),
        new OrderedSet(),
        x => x.delete(handler)
      )
    }));
  }
  registerTransitionEndHandler (handler: EventListener) {
    const evt = 'transitionend';
    this.registerInteractionHandler(evt, handler);
  }
  deregisterTransitionEndHandler (handler: EventListener) {
    const evt = 'transitionend';
    this.deregisterInteractionHandler(evt, handler);
  }
  registerDocumentKeydownHandler (handler: EventListener) {
    document.addEventListener('keydown', handler);
  }
  deregisterDocumentKeydownHandler (handler: EventListener) {
    document.removeEventListener('keydown', handler);
  }
  updateCssVariable (value: string) {
    this.element.setState((state) => ({
      foundationCssVars: state.foundationCssVars.set(OPACITY_VAR_NAME, value)
    }));
  }
  saveElementTabState (el: Element) {
    drawerUtil.saveElementTabState(el);
  }
  restoreElementTabState (el: Element) {
    drawerUtil.restoreElementTabState(el);
  }
  makeElementUntabbable (el: Element) {
    el.setAttribute('tabindex', '-1');
  }
  isRtl (): boolean {
    return this.element.props.rtl;
  }
}
