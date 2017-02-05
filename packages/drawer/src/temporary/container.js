/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {MDCTemporaryDrawerFoundation} from '@material/drawer/dist/mdc.drawer';
import {
  Set,
  OrderedSet,
  Map,
  OrderedMap
} from 'immutable';

import type {Props as WrapperProps} from '../../core/wrapper';
import {PropWrapper} from '../../core';
import {eventHandlerDecorator} from '../../core/util';

import * as drawerUtil from './drawerUtil';
import type {AdapterDrawerDelegate, AdapterDrawerCallback} from './types';
import {AdapterDrawerDelegatePropType} from './types';
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
  foundationEventListeners: Map<string, EventListener>,
  foundationDrawerEventListeners: Map<string, EventListener>,
  open: boolean
};

export type ChildContext = {
  adapterDrawerDelegate: AdapterDrawerDelegate
};

const {
  cssClasses: {
    OPEN: OPEN_CLASS_NAME
  },
  strings: {
    FOCUSABLE_ELEMENTS,
    OPACITY_VAR_NAME
  }
} = MDCTemporaryDrawerFoundation;

export default class TemporaryDrawer<P: any> extends PropWrapper<*, P, *> {
  props: Props<P>

  static childContextTypes = {
    adapterDrawerDelegate: AdapterDrawerDelegatePropType
  }

  static defaultProps = {
    wrap: <aside />,
    rtl: false,
    style: {}
  }

  drawerCallback: ?AdapterDrawerCallback;

  state: State = {
    foundationClasses: new OrderedSet(),
    foundationCssVars: new OrderedMap(),
    foundationEventListeners: new OrderedMap(),
    foundationDrawerEventListeners: new OrderedMap(),
    open: false
  }

  adapterDrawerDelegate: AdapterDrawerDelegate = {
    setCallback: (callback: AdapterDrawerCallback) => {
      this.drawerCallback = callback;
    },
    unsetCallback: (callback: AdapterDrawerCallback) => {
      if (this.drawerCallback === callback) {
        this.drawerCallback = null;
      }
    }
  }

  foundation = new MDCTemporaryDrawerFoundation({
    addClass: (className: string) => {
      this.setState((state) => ({
        foundationClasses: state.foundationClasses.add(className)
      }));

      // MDCTemporaryDrawerFoundation does not provide opening/closing event.
      // But we can assume open/close by adding/removing OPEN_CLASS_NAME
      if (className === OPEN_CLASS_NAME) {
        this.setState({
          open: true
        });
        if (this.props.onOpenDrawer) {
          this.props.onOpenDrawer(this);
        }
      }
    },
    removeClass: (className: string) => {
      this.setState((state) => ({
        foundationClasses: state.foundationClasses.remove(className)
      }));

      // MDCTemporaryDrawerFoundation does not provide opening/closing event.
      // But we can assume open/close by adding/removing OPEN_CLASS_NAME
      if (className === OPEN_CLASS_NAME) {
        this.setState({
          open: false
        });
        if (this.props.onCloseDrawer) {
          this.props.onCloseDrawer(this);
        }
      }
    },
    hasClass: (className: string): boolean => {
      return this.getClassName(this.props, this.state).split(/\s+/).includes(className);
    },
    hasNecessaryDom: (): boolean => {
      if (this.drawerCallback == null) {
        return false;
      }
      return this.drawerCallback.getDOMNode() != null;
    },
    registerInteractionHandler: (evt: string, handler: EventListener) => {
      this.setState((state) => ({
        foundationEventListeners: state.foundationEventListeners.set(evt, handler)
      }));
    },
    deregisterInteractionHandler: (evt: string, handler: EventListener) => {
      if (this.state.foundationEventListeners.get(evt) === handler) {
        this.setState((state) => ({
          foundationEventListeners: state.foundationEventListeners.delete(evt)
        }));
      }
    },
    registerDrawerInteractionHandler: (evt: string, handler: EventListener) => {
      this.setState((state) => ({
        foundationDrawerEventListeners: state.foundationDrawerEventListeners.set(evt, handler)
      }));
    },
    deregisterDrawerInteractionHandler: (evt: string, handler: EventListener) => {
      if (this.state.foundationDrawerEventListeners.get(evt) === handler) {
        this.setState((state) => ({
          foundationDrawerEventListeners: state.foundationDrawerEventListeners.delete(evt)
        }));
      }
    },
    registerTransitionEndHandler: (handler: EventListener) => {
      const evt = 'transitionend';
      this.setState((state) => ({
        foundationDrawerEventListeners: state.foundationDrawerEventListeners.set(evt, handler)
      }));
    },
    deregisterTransitionEndHandler: (handler: EventListener) => {
      const evt = 'transitionend';
      if (this.state.foundationDrawerEventListeners.get(evt) === handler) {
        this.setState((state) => ({
          foundationDrawerEventListeners: state.foundationDrawerEventListeners.delete(evt)
        }));
      }
    },
    registerDocumentKeydownHandler: (handler: EventListener) => {
      document.addEventListener('keydown', handler);
    },
    deregisterDocumentKeydownHandler: (handler: EventListener) => {
      document.removeEventListener('keydown', handler);
    },
    getDrawerWidth: (): number => {
      if (this.drawerCallback == null) {
        return 0;
      }
      return this.drawerCallback.getDOMNode().getBoundingClientRect().width;
    },
    setTranslateX: (value: number) => {
      if (this.drawerCallback != null) {
        this.drawerCallback.setTranslateX(value);
      }
    },
    updateCssVariable: (value: string) => {
      this.setState((state) => ({
        foundationCssVars: state.foundationCssVars.set(OPACITY_VAR_NAME, value)
      }));
    },
    getFocusableElements: (): Iterable<Node> => {
      if (this.drawerCallback == null) {
        return [];
      }
      return this.drawerCallback.getDOMNode().querySelectorAll(FOCUSABLE_ELEMENTS);
    },
    saveElementTabState: (el: Element) => {
      drawerUtil.saveElementTabState(el);
    },
    restoreElementTabState: (el: Element) => {
      drawerUtil.restoreElementTabState(el);
    },
    makeElementUntabbable: (el: Element) => {
      el.setAttribute('tabindex', '-1');
    },
    isRtl: (): boolean => {
      return this.props.rtl;
    },
    isDrawer: (el: Element): boolean => {
      if (this.drawerCallback == null) {
        return false;
      }
      return el === this.drawerCallback.getDOMNode();
    }
  })

  getChildContext (): ChildContext {
    return {
      adapterDrawerDelegate: this.adapterDrawerDelegate
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

  getRootDOMNode (): window.HTMLElement {
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
    this.foundation.init();
  }

  componentWillUnmount () {
    this.foundation.destroy();
  }

  // Custom event handler
  handleClick = (_evt: SyntheticEvent) => {
    // Cannot handle properly click event because of react bug
    // We implement react event handler with same functionally of this one
    // https://github.com/material-components/material-components-web/issues/225
    // https://github.com/facebook/react/issues/8693
    this.foundation.close();
  }

  // Sync dom node with foundation
  componentDidUpdate (_prevProps: Props<P>, prevState: State) {
    const rootNode = this.getRootDOMNode();
    const drawerNode = this.drawerCallback && this.drawerCallback.getDOMNode();
    // Sync css vars
    prevState.foundationCssVars.forEach((v: *, k: *) => {
      if (v !== this.state.foundationCssVars.get(k)) {
        rootNode.style.removeProperty(k);
      }
    });
    this.state.foundationCssVars.forEach((v: *, k: *) => {
      rootNode.style.setProperty(k, v);
    });
    // Sync root event listeners
    prevState.foundationDrawerEventListeners.forEach((v: *, k: *) => {
      // Don't use click event handler of MDCTemporaryDrawerFoundation
      // See `handleClick()` for more detail.
      if (k === 'click') {
        return;
      }
      if (v !== this.state.foundationDrawerEventListeners.get(k)) {
        rootNode.removeEventListener(k, v);
      }
    });
    this.state.foundationDrawerEventListeners.forEach((v: *, k: *) => {
      // Don't use click event handler of MDCTemporaryDrawerFoundation
      // See `handleClick()` for more detail.
      if (k === 'click') {
        return;
      }
      rootNode.addEventListener(k, v);
    });
    // Sync drawer event listeners
    if (drawerNode != null) {
      prevState.foundationDrawerEventListeners.forEach((v: *, k: *) => {
        // Don't use click event handler of MDCTemporaryDrawerFoundation
        // See `handleClick()` for more detail.
        if (k === 'click') {
          return;
        }
        if (v !== this.state.foundationDrawerEventListeners.get(k)) {
          drawerNode.removeEventListener(k, v);
        }
      });
      this.state.foundationDrawerEventListeners.forEach((v: *, k: *) => {
        // Don't use click event handler of MDCTemporaryDrawerFoundation
        // See `handleClick()` for more detail.
        if (k === 'click') {
          return;
        }
        drawerNode.addEventListener(k, v);
      });
    }
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
}
