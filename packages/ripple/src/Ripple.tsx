import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    MDCRippleFoundation,
} from "@material/ripple/dist/mdc.ripple";
import {
    Map,
    OrderedMap,
    OrderedSet,
    Set,
} from "immutable";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { FoundationAdapter, RippleAdapter } from "./adapter";
import { Color } from "./types";
import { getMatchesProperty, supportsCssVariables } from "./rippleUtil";
import * as utils from "./utils";

import {
    SURFACE_BASE_CLASS_NAME,
} from "./constants";

const MATCHES = getMatchesProperty(HTMLElement.prototype);

export const CLASS_NAME = SURFACE_BASE_CLASS_NAME;

export type MetaProps = {
    unbounded?: boolean,
    color?: Color,
};

export type ChildProps = {
    className?: string,
};

export type State = {
    foundationClasses: Set<string>,
    foundationCssVars: Map<string, string | null>,
    foundationEventListeners: Map<string, Set<EventListener>>,
};

/**
 * Ripple foundation component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, State> {
    public static defaultProps = {
        unbounded: false,
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
        foundationCssVars: OrderedMap<string, string | null>(),
        foundationEventListeners: OrderedMap<string, Set<EventListener>>(),
    };

    private adapter: FoundationAdapter;
    private foundation: MDCRippleFoundation;

    constructor(props) {
        super(props);
        this.adapter = new FoundationAdapter();
        this.foundation = new MDCRippleFoundation(this.adapter.toObject());
    }

    // Exposed methods
    public activate() {
        this.foundation.activate();
    }

    public deactivate() {
        this.foundation.deactivate();
    }

    public getDOMNode(): Element {
        return ReactDOM.findDOMNode(this);
    }

    // Foundation lifecycle
    public componentDidMount() {
        this.adapter.setRippleAdapter(new RippleAdapterImpl(this));
        this.foundation.init();
    }

    public componentWillUnmount() {
        this.foundation.destroy();
        this.adapter.setRippleAdapter(new RippleAdapter());
    }
    protected renderNativeDOMProps() {
        return {
            cssVariables: this.state.foundationCssVars.toJS(),
            eventListeners: this.state.foundationEventListeners.toJS(),
        };
    }

    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        const classes: string[] = [];
        if (this.props.color != null) {
            classes.push(utils.classNameForColor(this.props.color));
        }
        return [
            classes,
            this.state.foundationClasses.toJS(),
        ];
    }
}

class RippleAdapterImpl extends RippleAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }
    public browserSupportsCssVars(): boolean {
        return supportsCssVariables(window);
    }
    public isUnbounded(): boolean {
        return this.element.props.unbounded || false;
    }
    public isSurfaceActive(): boolean {
        return this.element.getDOMNode()[MATCHES](":active");
    }
    public addClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.add(className),
        }));
    }
    public removeClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.remove(className),
        }));
    }
    public registerInteractionHandler(evtType: string, handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evtType,
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }
    public deregisterInteractionHandler(evtType: string, handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evtType,
                OrderedSet<EventListener>(),
                (x) => x.delete(handler),
            ),
        }));
    }
    public registerResizeHandler(handler: EventListener) {
        window.addEventListener("resize", handler);
    }
    public deregisterResizeHandler(handler: EventListener) {
        window.removeEventListener("resize", handler);
    }
    public updateCssVariable(varName: string, value: string | null) {
        if (value == null) {
            this.element.setState((state) => ({
                foundationCssVars: state.foundationCssVars.delete(varName),
            }));
        } else {
            this.element.setState((state) => ({
                foundationCssVars: state.foundationCssVars.set(varName, value),
            }));
        }
    }
    public computeBoundingRect(): ClientRect | null {
        return this.element.getDOMNode().getBoundingClientRect();
    }
    public getWindowPageOffset(): { x: number, y: number } {
        return { x: window.pageXOffset, y: window.pageYOffset };
    }
}

export default class Ripple extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "unbounded",
            "color",
        ];
    }

    protected getChildComponent() {
        return "div";
    }
}
