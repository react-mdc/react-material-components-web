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

import {FoundationAdapter, DrawerAdapter} from './adapter';
import * as drawerUtil from './drawerUtil';
import {BASE_CLASS_NAME} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__drawer`;

const {
  strings: {
    FOCUSABLE_ELEMENTS
  }
} = MDCTemporaryDrawerFoundation;

export type Props<P> = WrapperProps<P> & {
  className?: string
};

type State = {
  foundationCssVars: Map<string, ?string>,
  foundationEventListeners: Map<string, Set<EventListener>>
};

type Context = {
  adapter: FoundationAdapter
};

export default class Drawer<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  state: State

  context: Context

  static contextTypes = {
    adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired
  }

  static defaultProps = {
    wrap: <nav />
  }

  state = {
    foundationCssVars: new Map(),
    foundationEventListeners: new Map()
  }

  componentDidMount () {
    this.context.adapter.setDrawerAdapter(new DrawerAdapterImpl(this));
  }

  componentWillUnmount () {
    this.context.adapter.setDrawerAdapter(new DrawerAdapter());
  }

  handleClick = (evt: SyntheticEvent) => {
    // Don't use click event handler of MDCTemporaryDrawerFoundation
    // See `handleClick()` in `container.js` for more detail.
    evt.stopPropagation();
  }

  getRootDOMNode (): HTMLElement {
    return ReactDOM.findDOMNode(this);
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

class DrawerAdapterImpl extends DrawerAdapter {
  element: Drawer<*>

  constructor (element: Drawer<*>) {
    super();
    this.element = element;
  }

  registerDrawerInteractionHandler (evt: string, handler: EventListener) {
    // Don't use click event handler of MDCTemporaryDrawerFoundation
    // See `TemporaryDrawer.handleClick()` for more detail.
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
  deregisterDrawerInteractionHandler (evt: string, handler: EventListener) {
    // Don't use click event handler of MDCTemporaryDrawerFoundation
    // See `TemporaryDrawer.handleClick()` for more detail.
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
  hasNecessaryDom (): boolean {
    return this.getDOMNode() != null;
  }
  getDrawerWidth (): number {
    return this.getDOMNode().getBoundingClientRect().width;
  }
  setTranslateX (value: number) {
    if (value == null) {
      this.element.setState((state) => ({
        foundationCssVars: state.foundationCssVars.delete(drawerUtil.getTransformPropertyName())
      }));
    } else {
      this.element.setState((state) => ({
        foundationCssVars: state.foundationCssVars.set(drawerUtil.getTransformPropertyName(), `translateX(${value}px)`)
      }));
    }
  }
  isDrawer (el: Element): boolean {
    return this.getDOMNode() === el;
  }
  getFocusableElements (): Iterable<Node> {
    return this.getDOMNode().querySelectorAll(FOCUSABLE_ELEMENTS);
  }
  getDOMNode (): HTMLElement {
    return ReactDOM.findDOMNode(this.element);
  }
}
