/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import forEach from 'lodash.foreach';
import {
  OrderedSet
} from 'immutable';

export type EventListeners = {
  [string]: Array<EventListener>
};

export type CSSVariables = {
  [string]: any
};

export type Attributes = {
  [string]: string
};

export type Props = {
  cssVariables: CSSVariables,
  eventListeners: EventListeners,
  attributes: Attributes,
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
    eventListeners: {},
    attributes: {}
  };

  // Last known DOM node
  lastDOMNode: HTMLElement

  // Get root DOM node of element
  getDOMNode (): HTMLElement {
    return ReactDOM.findDOMNode(this);
  }

  // Manage CSS variables
  removeCssVariables (dom: HTMLElement, toRemove: CSSVariables) {
    forEach(toRemove, (value: any, key: string) => {
      if (dom.style.getPropertyValue(key) === value) {
        dom.style.removeProperty(key);
      }
    });
  }

  addCssVariables (dom: HTMLElement, toAdd: CSSVariables) {
    forEach(toAdd, (value: any, key: string) => {
      if (dom.style.getPropertyValue(key) !== value) {
        dom.style.setProperty(key, value);
      }
    });
  }

  updateCssVariables (dom: HTMLElement,
                      prev: CSSVariables,
                      next: CSSVariables) {
    let toRemove: CSSVariables = {};
    let toAdd: CSSVariables = {};
    forEach(prev, (value: any, key: string) => {
      if (next[key] !== value) {
        toRemove[key] = value;
      }
    });
    forEach(next, (value: any, key: string) => {
      if (prev[key] !== value) {
        toAdd[key] = value;
      }
    });
    this.removeCssVariables(dom, toRemove);
    this.addCssVariables(dom, toAdd);
  }

  // Manage event listeners
  removeEventListeners (dom: HTMLElement, toRemove: EventListeners) {
    forEach(toRemove, (item: *) => {
      const [event, listener] = item;
      dom.removeEventListener(event, listener);
    });
  }

  addEventListeners (dom: HTMLElement, toAdd: EventListeners) {
    forEach(toAdd, (item: *) => {
      const [event, listener] = item;
      dom.addEventListener(event, listener);
    });
  }

  updateEventListeners (dom: HTMLElement,
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

    forEach(diff, ({event, toRemove, toAdd}: *) => {
      toRemove = toRemove.map(x => [event, x]);
      toAdd = toAdd.map(x => [event, x]);
      this.removeEventListeners(dom, toRemove);
      this.addEventListeners(dom, toAdd);
    });
  }

  // Manage attributes
  removeAttributes (dom: HTMLElement, toRemove: Attributes) {
    forEach(toRemove, (value: any, key: string) => {
      if (dom.getAttribute(key) === value) {
        dom.removeAttribute(key);
      }
    });
  }

  addAttributes (dom: HTMLElement, toAdd: Attributes) {
    forEach(toAdd, (value: any, key: string) => {
      if (dom.getAttribute(key) !== value) {
        dom.setAttribute(key, value);
      }
    });
  }

  updateAttributes (dom: HTMLElement,
                    prev: Attributes,
                    next: Attributes) {
    let toRemove: Attributes = {};
    let toAdd: Attributes = {};
    forEach(prev, (value: string, key: string) => {
      if (next[key] !== value) {
        toRemove[key] = value;
      }
    });
    forEach(next, (value: string, key: string) => {
      if (prev[key] !== value) {
        toAdd[key] = value;
      }
    });
    this.removeAttributes(dom, toRemove);
    this.addAttributes(dom, toAdd);
  }

  componentDidMount () {
    this.lastDOMNode = this.getDOMNode();
    this.addCssVariables(this.lastDOMNode, this.props.cssVariables);
    this.addEventListeners(this.lastDOMNode, this.props.eventListeners);
    this.addAttributes(this.lastDOMNode, this.props.attributes);
  }

  componentDidUpdate (prevProps: Props) {
    const node = this.getDOMNode();
    if (node !== this.lastDOMNode) {
      // Remove from previous DOM node
      this.removeCssVariables(this.lastDOMNode, prevProps.cssVariables);
      this.removeEventListeners(this.lastDOMNode, prevProps.eventListeners);
      this.removeAttributes(this.lastDOMNode, this.props.attributes);
      // Add to new DOM node
      this.addCssVariables(node, this.props.cssVariables);
      this.addEventListeners(node, this.props.eventListeners);
      this.addAttributes(node, this.props.attributes);
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
      this.updateAttributes(node,
                            prevProps.attributes,
                            this.props.attributes);
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
