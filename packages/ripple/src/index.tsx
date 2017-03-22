import * as React from "react";

import {
    MDCRippleFoundation,
} from "@material/ripple/dist/mdc.ripple";
import classNames from "classnames";
import {
    Map,
    OrderedMap,
    OrderedSet,
    Set,
} from "immutable";
import ReactDOM from "react-dom";

import { NativeDOMAdapter } from "@react-mdc/base";
import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import { FoundationAdapter, RippleAdapter } from "./adapter";
import * as helpers from "./helpers";
import { Color } from "./types";
import { getMatchesProperty, supportsCssVariables } from "./util";

import {
    SURFACE_BASE_CLASS_NAME,
} from "./constants";

const MATCHES = getMatchesProperty(HTMLElement.prototype);

export const CLASS_NAME = SURFACE_BASE_CLASS_NAME;

export type Props<P> = WrapperProps<P> & {
    unbounded: boolean,
    color?: Color,
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
export class Ripple<P> extends PropWrapper<P, Props<P>, State> {
    public static defaultProps = {
        wrap: <div />,
        unbounded: false,
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
        foundationCssVars: OrderedMap<string, string | null>(),
        foundationEventListeners: OrderedMap<string, Set<EventListener>>(),
    };

    private adapter: FoundationAdapter;
    private foundation: MDCRippleFoundation;

    constructor(props: Props<P>) {
        super(props);
        this.adapter = new FoundationAdapter();
        this.foundation = new MDCRippleFoundation(this.adapter.toObject());
    }

    public render() {
        return (
            <NativeDOMAdapter
                cssVariables={this.state.foundationCssVars.toJS()}
                eventListeners={this.state.foundationEventListeners.toJS()}>
                {super.render()}
            </NativeDOMAdapter>
        );
    }

    // Exposed methods
    public activate() {
        this.foundation.activate();
    }

    public deactivate() {
        this.foundation.deactivate();
    }

    public getDOMNode(): HTMLElement {
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

    protected renderProps() {
        let {
      wrap: _wrap,
            className: _className,
            unbounded: _unbounded,
            ...props,
    } = this.props;

        let className = this.getClassName(this.props, this.state);

        props = {
            ...props,
            className,
        };
        return props;
    }

    private getClassName(props: Props<P>, state: State): string {
        let { className } = props;
        let classes: string[] = [];
        if (props.color != null) {
            classes.push(helpers.classNameForColor(props.color));
        }
        return classNames(
            CLASS_NAME,
            classes,
            className,
            state.foundationClasses.toJS(),
        );
    }
}

class RippleAdapterImpl<P> extends RippleAdapter {
    private element: Ripple<P>;

    constructor(element: Ripple<P>) {
        super();
        this.element = element;
    }
    public browserSupportsCssVars(): boolean {
        return supportsCssVariables(window);
    }
    public isUnbounded(): boolean {
        return this.element.props.unbounded;
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

export default Ripple;
