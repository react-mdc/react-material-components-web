/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {
  OrderedSet
} from 'immutable';

export type NativeDOMNode = window.HTMLElement;

export type EventListeners = {
  [string]: Array<EventListener>
};

export type CSSVariables = {
  [string]: any
};

export type Props = {
  cssVariables: CSSVariables,
  eventListeners: EventListeners,
  // FIXME: How do we handle children property properly?
  children?: React.Element<*>
};

/**
 * High order components that adds native DOM properties
 * that can't be controlled by React.
 */
export default class NativeDOMAdapter extends React.Component {
  props: Props

  static defaultProps = {
    cssVariables: {},
    eventListeners: {}
  };

  // Last known DOM node
  lastDOMNode: ?NativeDOMNode

  // Get root DOM node of element
  getDOMNode (): NativeDOMNode {
    return ReactDOM.findDOMNode(this);
  }

  // Manage CSS variables
  removeCssVariables (dom: NativeDOMNode, toRemove: CSSVariables) {
    _.each(toRemove, (value: any, key: string) => {
      if (dom.style.getPropertyValue(key) === value) {
        dom.style.removeProperty(key);
      }
    });
  }

  addCssVariables (dom: NativeDOMNode, toAdd: CSSVariables) {
    _.each(toAdd, (value: any, key: string) => {
      if (dom.style.getPropertyValue(key) !== value) {
        dom.style.setProperty(key, value);
      }
    });
  }

  updateCssVariables (dom: NativeDOMNode,
                      prev: CSSVariables,
                      next: CSSVariables) {
    let toRemove: CSSVariables = {};
    let toAdd: CSSVariables = {};
    _.each(prev, (value: any, key: string) => {
      if (next[key] !== value) {
        toRemove[key] = value;
      }
    });
    _.each(next, (value: any, key: string) => {
      if (prev[key] !== value) {
        toAdd[key] = value;
      }
    });
    this.removeCssVariables(dom, toRemove);
    this.addCssVariables(dom, toAdd);
  }

  // Manage event listeners
  removeEventListeners (dom: NativeDOMNode, toRemove: EventListeners) {
    _.each(toRemove, (item: *) => {
      const [event, listener] = item;
      dom.removeEventListener(event, listener);
    });
  }

  addEventListeners (dom: NativeDOMNode, toAdd: EventListeners) {
    _.each(toAdd, (item: *) => {
      const [event, listener] = item;
      dom.addEventListener(event, listener);
    });
  }

  updateEventListeners (dom: NativeDOMNode,
                        prev: EventListeners,
                        next: EventListeners) {
    const prevKeys = Object.keys(prev);
    const nextKeys = Object.keys(next);
    const allKeys: Array<string> = OrderedSet
          .of(...nextKeys.concat(prevKeys))
          .toJS();

    // Find listeners to add / remove with order preservation
    const diff = allKeys.map((event: string): * => {
      let prevListeners: Array<EventListener> = prev[event] || [];
      let nextListeners: Array<EventListener> = next[event] || [];
      let diffStart;
      for (diffStart = 0; diffStart < Math.min(prevListeners.length, nextListeners.length); diffStart++) {
        if (prevListeners[diffStart] !== nextListeners[diffStart]) {
          break;
        }
      }
      return {
        event,
        toRemove: prevListeners.slice(diffStart),
        toAdd: nextListeners.slice(diffStart)
      };
    });

    _.each(diff, ({event, toRemove, toAdd}: *) => {
      toRemove = toRemove.map(x => [event, x]);
      toAdd = toAdd.map(x => [event, x]);
      this.removeEventListeners(dom, toRemove);
      this.addEventListeners(dom, toAdd);
    });
  }

  componentDidMount () {
    this.lastDOMNode = this.getDOMNode();
    this.addCssVariables(this.lastDOMNode, this.props.cssVariables);
    this.addEventListeners(this.lastDOMNode, this.props.eventListeners);
  }

  componentDidUpdate (prevProps: Props) {
    const node = this.getDOMNode();
    if (node !== this.lastDOMNode) {
      // Remove from previous DOM node
      this.removeCssVariables(this.lastDOMNode, prevProps.cssVariables);
      this.removeEventListeners(this.lastDOMNode, prevProps.eventListeners);
      // Add to new DOM node
      this.addCssVariables(node, this.props.cssVariables);
      this.addEventListeners(node, this.props.eventListeners);
      // Update current DOM node
      this.lastDOMNode = node;
    } else {
      // Update
      this.updateCssVariables(node,
                              prevProps.cssVariables,
                              this.props.cssVariables);
      this.updateEventListeners(node,
                                prevProps.eventListeners,
                                this.props.eventListeners);
    }
  }

  render (): React.Element<*> {
    if (this.props.children != null) {
      return this.props.children;
    } else {
      throw Error('Child were not given');
    }
  }
}
