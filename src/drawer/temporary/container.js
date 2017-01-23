/* @flow */
import React from 'react';
import classNames from 'classnames';
import {MDCTemporaryDrawerFoundation} from '@material/drawer/temporary';
import * as drawerConstants from '@material/drawer/temporary/constants';
import * as drawerUtil from '@material/drawer/util';
import {Set, OrderedSet} from 'immutable';
import '@material/drawer/dist/mdc.drawer.css';

import type {ReactComponent} from '../../types';
import type {AdapterDrawerDelegate, AdapterDrawerCallback} from './types';
import {AdapterDrawerDelegatePropType} from './types';
import {CONTAINER_CLASS_NAME} from './constants';

export type Props = {
  component: ReactComponent,
  open: boolean,
  className?: string,
  rtl: boolean,
  style: {[string]: any},
  onOpenDrawer?: (TemporaryDrawer) => void,
  onCloseDrawer?: (TemporaryDrawer) => void,
  [string]: any
};

type State = {
  foundationClasses: Set<string>,
  open: boolean
};

export type Context = {
  adapterDrawerDelegate: AdapterDrawerDelegate
};

const {
  cssClasses: {
    OPEN: OPEN_CLASS_NAME
  },
  strings: {
    FOCUSABLE_ELEMENTS
  }
} = drawerConstants;

export default class TemporaryDrawer extends React.Component {
  props: Props
  drawer: ?Element

  static childContextTypes = {
    adapterDrawerDelegate: AdapterDrawerDelegatePropType
  }

  static defaultProps = {
    component: 'aside',
    rtl: false,
    style: {}
  }

  drawerCallbacks: Set<AdapterDrawerCallback> = new OrderedSet()

  state: State = {
    foundationClasses: new OrderedSet(),
    open: false
  }

  adapterDrawerDelegate: AdapterDrawerDelegate = {
    onDrawerMount: (el: Element) => {
      this.drawer = el;
    },
    onDrawerUnmount: () => {
      this.drawer = null;
    },
    addAdapterDrawerCallback: (callback: AdapterDrawerCallback) => {
      this.drawerCallbacks = this.drawerCallbacks.add(callback);
    },
    removeAdapterDrawerCallback: (callback: AdapterDrawerCallback) => {
      this.drawerCallbacks = this.drawerCallbacks.remove(callback);
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
      return this.getClassNames(this.props, this.state).includes(className);
    },
    hasNecessaryDom: (): boolean => {
      return this.drawer !== null;
    },
    registerInteractionHandler: (evt: Event, handler: EventListener) => {
      this.refs.root.addEventListener(drawerUtil.remapEvent(evt), handler, drawerUtil.applyPassive());
    },
    deregisterInteractionHandler: (evt: Event, handler: EventListener) => {
      this.refs.root.removeEventListener(drawerUtil.remapEvent(evt), handler, drawerUtil.applyPassive());
    },
    registerDrawerInteractionHandler: (evt: Event, handler: EventListener) => {
      if (this.drawer) {
        this.drawer.addEventListener(drawerUtil.remapEvent(evt), handler);
      }
    },
    deregisterDrawerInteractionHandler: (evt: Event, handler: EventListener) => {
      if (this.drawer) {
        this.drawer.removeEventListener(drawerUtil.remapEvent(evt), handler);
      }
    },
    registerTransitionEndHandler: (handler: EventListener) => {
      if (this.drawer != null) {
        this.drawer.addEventListener('transitionend', handler);
      }
    },
    deregisterTransitionEndHandler: (handler: EventListener) => {
      if (this.drawer != null) {
        this.drawer.removeEventListener('transitionend', handler);
      }
    },
    registerDocumentKeydownHandler: (handler: EventListener) => {
      document.addEventListener('keydown', handler);
    },
    deregisterDocumentKeydownHandler: (handler: EventListener) => {
      document.removeEventListener('keydown', handler);
    },
    getDrawerWidth: (): number => {
      if (this.drawer == null) {
        return 0;
      }
      return this.drawer.getBoundingClientRect().width;
    },
    setTranslateX: (value: number) => {
      this.drawerCallbacks.forEach((callback) => callback.setTranslateX(value));
    },
    updateCssVariable: (_value: string) => {
      // There's nothing we can do in react
    },
    getFocusableElements: (): Iterable<Node> => {
      if (this.drawer == null) {
        return [];
      }
      return this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
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
      return el === this.drawer;
    }
  })

  getChildContext (): Context {
    return {
      adapterDrawerDelegate: this.adapterDrawerDelegate
    };
  }

  getClassNames (props: Props, state: State): Array<string> {
    let {className} = props;
    classNames(
      CONTAINER_CLASS_NAME,
      className
    );
    return [CONTAINER_CLASS_NAME].concat(state.foundationClasses.toJS());
  }

  // Sync props and internal state
  componentWillReceiveProps (props: Props) {
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

  render (): React.Element<*> {
    let {
      component,
      className: _className,
      rtl: _rtl,
      onOpenDrawer: _onOpenDrawer,
      onCloseDrawer: _onCloseDrawer,
      ...props
    } = this.props;

    let className = this.getClassNames(this.props, this.state).join(' ');
    props = {
      ref: 'root',
      ...props,
      className
    };
    return React.createElement(component, props);
  }
}
