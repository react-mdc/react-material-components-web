import {
    OrderedSet,
} from "immutable";
import forEach from "lodash.foreach";
import * as React from "react";
import * as ReactDOM from "react-dom";

export type EventListeners = {
    [eventType: string]: EventListener[],
};

export type CSSVariables = {
    [name: string]: any,
};

export type Attributes = {
    [name: string]: string,
};

export type Props = {
    cssVariables: CSSVariables,
    eventListeners: EventListeners,
    attributes: Attributes,
    children: React.ReactElement<any> | null,
};

/**
 * High order components that adds native DOM properties
 * that can't be controlled by React.
 */
export default class NativeDOMAdapter extends React.Component<Props, {}> {
    public static defaultProps = {
        cssVariables: {},
        eventListeners: {},
        attributes: {},
    };

    public props: Props;

    // Last known DOM node
    private lastDOMNode: HTMLElement;

    public render() {
        return this.props.children || null;
    }

    public componentDidMount() {
        this.lastDOMNode = this.getDOMNode();
        this.addCssVariables(this.lastDOMNode, this.props.cssVariables);
        this.addEventListeners(this.lastDOMNode, this.props.eventListeners);
        this.addAttributes(this.lastDOMNode, this.props.attributes);
    }

    public componentDidUpdate(prevProps: Props) {
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
            this.updateCssVariables(node, prevProps.cssVariables, this.props.cssVariables);
            this.updateEventListeners(node, prevProps.eventListeners, this.props.eventListeners);
            this.updateAttributes(node, prevProps.attributes, this.props.attributes);
        }
    }

    // Get root DOM node of element
    private getDOMNode(): HTMLElement {
        return ReactDOM.findDOMNode<HTMLElement>(this);
    }

    // Manage CSS variables
    private removeCssVariables(dom: HTMLElement, toRemove: CSSVariables) {
        forEach(toRemove, (value: any, key: string) => {
            if (dom.style.getPropertyValue(key) === value) {
                dom.style.removeProperty(key);
            }
        });
    }

    private addCssVariables(dom: HTMLElement, toAdd: CSSVariables) {
        forEach(toAdd, (value: any, key: string) => {
            if (dom.style.getPropertyValue(key) !== value) {
                dom.style.setProperty(key, value);
            }
        });
    }

    private updateCssVariables(dom: HTMLElement,
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
    private removeEventListeners(dom: HTMLElement, toRemove: EventListeners) {
        forEach(toRemove, (item) => {
            const [event, listener] = item;
            dom.removeEventListener(event, listener);
        });
    }

    private addEventListeners(dom: HTMLElement, toAdd: EventListeners) {
        forEach(toAdd, (item) => {
            const [event, listener] = item;
            dom.addEventListener(event, listener);
        });
    }

    private updateEventListeners(dom: HTMLElement,
                                 prev: EventListeners,
                                 next: EventListeners) {
        const prevKeys = Object.keys(prev);
        const nextKeys = Object.keys(next);
        const allKeys: string[] = OrderedSet
            .of(...nextKeys.concat(prevKeys))
            .toJS();

        // Find listeners to add / remove with order preservation
        const diff = allKeys.map((event: string) => {
            let prevListeners: EventListener[] = prev[event] || [];
            let nextListeners: EventListener[] = next[event] || [];
            let diffStart;
            for (diffStart = 0; diffStart < Math.min(prevListeners.length, nextListeners.length); diffStart++) {
                if (prevListeners[diffStart] !== nextListeners[diffStart]) {
                    break;
                }
            }
            return {
                event,
                toRemove: prevListeners.slice(diffStart),
                toAdd: nextListeners.slice(diffStart),
            };
        });

        forEach(diff, ({ event, toRemove, toAdd }) => {
            toRemove = toRemove.map((x) => [event, x]);
            toAdd = toAdd.map((x) => [event, x]);
            this.removeEventListeners(dom, toRemove);
            this.addEventListeners(dom, toAdd);
        });
    }

    // Manage attributes
    private removeAttributes(dom: HTMLElement, toRemove: Attributes) {
        forEach(toRemove, (value: any, key: string) => {
            if (dom.getAttribute(key) === value) {
                dom.removeAttribute(key);
            }
        });
    }

    private addAttributes(dom: HTMLElement, toAdd: Attributes) {
        forEach(toAdd, (value: any, key: string) => {
            if (dom.getAttribute(key) !== value) {
                dom.setAttribute(key, value);
            }
        });
    }

    private updateAttributes(dom: HTMLElement,
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
}
