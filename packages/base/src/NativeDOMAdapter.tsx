import {
    OrderedSet,
} from "immutable";
import * as forEach from "lodash.foreach";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { EVENT_MAP } from "./event";

export type EventListeners = {
    [eventType: string]: EventListener[],
};

export type CSSVariables = {
    [name: string]: string,
};

export type Attributes = {
    [name: string]: string,
};

export type Props = {
    cssVariables?: CSSVariables,
    eventListeners?: EventListeners,
    attributes?: Attributes,
    children?: React.ReactElement<any>,
};

type InternalProps = {
    cssVariables: CSSVariables,
    eventListeners: EventListeners,
    attributes: Attributes,
    children: React.ReactElement<any>,
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
        if (this.props.children == null) {
            return null;
        }
        const child = this.props.children;
        const reactConvertibles = this.filterReactEventConvertibles(this.props.eventListeners || {});
        const merged = this.mergeEvents(reactConvertibles, child.props);
        return React.cloneElement(child, {
            ref: this.handleRef,
            ...merged,
        });
    }

    public componentDidUpdate(origPrevProps: Props) {
        const props = this.internalProps(this.props);
        const prevProps = this.internalProps(origPrevProps);
        const node = this.lastDOMNode;
        if (node != null) {
            // Update
            this.updateCssVariables(node, prevProps.cssVariables, props.cssVariables);
            this.updateEventListeners(node, prevProps.eventListeners, props.eventListeners);
            this.updateAttributes(node, prevProps.attributes, props.attributes);
        }
    }

    private internalProps(props: Props): InternalProps {
        return {
            cssVariables: (props.cssVariables as CSSVariables),
            eventListeners: (props.eventListeners as EventListeners),
            attributes: (props.attributes as Attributes),
            children: (props.children as React.ReactElement<any>),
        };
    }

    private mergeEvents(eventListeners: EventListeners, props: any) {
        const merged = { ...props };
        forEach(eventListeners, (listeners: EventListener[], eventType: string) => {
            const eventProp = EVENT_MAP[eventType];
            if (eventProp == null) {
                return;
            }
            let givenEvent;
            if (eventProp in merged) {
                givenEvent = merged[eventProp];
            } else {
                givenEvent = () => { };
            }
            const listener = (event: React.SyntheticEvent<any>) => {
                const nativeEvent = event.nativeEvent;
                const proxiedEvent: any = {};
                for (const key in nativeEvent) {
                    if (key.slice(0, 1) !== "_") {
                        proxiedEvent[key] = nativeEvent[key];
                    }
                }
                proxiedEvent.stopPropagation = () => {
                    event.stopPropagation();
                    nativeEvent.stopPropagation();
                };
                givenEvent(event);
                if (event.defaultPrevented) {
                    return;
                }
                listeners.reverse().every((nativeListener) => {
                    nativeListener(proxiedEvent);
                    return !nativeEvent.defaultPrevented;
                });
            };
            merged[eventProp] = listener;
        });
        return merged;
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

    private updateCssVariables(dom: HTMLElement, prev: CSSVariables, next: CSSVariables) {
        const toRemove: CSSVariables = {};
        const toAdd: CSSVariables = {};
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
    private filterReactEventConvertibles(eventListeners: EventListeners): EventListeners {
        const nativeListeners: EventListeners = {};
        forEach(eventListeners, (listeners, eventType) => {
            if (eventType in EVENT_MAP) {
                nativeListeners[eventType] = listeners;
            }
        });
        return nativeListeners;
    }

    private filterNativeEvents(eventListeners: EventListeners): EventListeners {
        const nativeListeners: EventListeners = {};
        forEach(eventListeners, (listeners, eventType) => {
            if (!(eventType in EVENT_MAP)) {
                nativeListeners[eventType] = listeners;
            }
        });
        return nativeListeners;
    }

    private removeEventListeners(dom: HTMLElement, toRemove: EventListeners) {
        forEach(this.filterNativeEvents(toRemove), (listeners: EventListener[], event: string) => {
            listeners.forEach((listener) => {
                dom.removeEventListener(event, listener);
            });
        });
    }

    private addEventListeners(dom: HTMLElement, toAdd: EventListeners) {
        forEach(this.filterNativeEvents(toAdd), (listeners: EventListener[], event: string) => {
            listeners.forEach((listener) => {
                dom.addEventListener(event, listener);
            });
        });
    }

    private updateEventListeners(dom: HTMLElement, prev: EventListeners, next: EventListeners) {
        const prevKeys = Object.keys(prev);
        const nextKeys = Object.keys(next);
        const allKeys: string[] = OrderedSet
            .of(...nextKeys.concat(prevKeys))
            .toJS();

        // Find listeners to add / remove with order preservation
        type Diff = {
            event: string,
            toAdd: EventListener[],
            toRemove: EventListener[],
        };
        const diff: Diff[] = allKeys.map((event: string) => {
            const prevListeners: EventListener[] = prev[event] || [];
            const nextListeners: EventListener[] = next[event] || [];
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
        const toAdd: EventListeners = diff.reduce((listeners, item) => ({
            ...listeners,
            [item.event]: item.toAdd,
        }), {} as EventListeners);
        const toRemove: EventListeners = diff.reduce((listeners, item) => ({
            ...listeners,
            [item.event]: item.toRemove,
        }), {} as EventListeners);

        this.removeEventListeners(dom, toRemove);
        this.addEventListeners(dom, toAdd);
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

    private updateAttributes(dom: HTMLElement, prev: Attributes, next: Attributes) {
        const toRemove: Attributes = {};
        const toAdd: Attributes = {};
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

    private handleRef = (ref: React.ReactInstance) => {
        const props = this.internalProps(this.props);
        const previousNode = this.lastDOMNode;
        const node = ReactDOM.findDOMNode<HTMLElement>(ref);

        // Update current DOM node
        this.lastDOMNode = node;

        if (node === this.lastDOMNode) {
            return;
        }

        if (previousNode != null) {
            // Remove from previous DOM node
            this.removeCssVariables(previousNode, props.cssVariables);
            this.removeEventListeners(previousNode, props.eventListeners);
            this.removeAttributes(previousNode, props.attributes);
        }
        if (node != null) {
            // Add to new DOM node
            this.addCssVariables(node, props.cssVariables);
            this.addEventListeners(node, props.eventListeners);
            this.addAttributes(node, props.attributes);
        }
    }
}
