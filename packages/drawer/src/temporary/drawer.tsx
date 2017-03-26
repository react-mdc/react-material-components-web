import * as React from "react";
import * as ReactDOM from "react-dom";

import { MDCTemporaryDrawerFoundation } from "@material/drawer/dist/mdc.drawer";
import * as classNames from "classnames";
import {
    Map,
    OrderedSet,
    Set,
} from "immutable";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";
import NativeDOMAdapter from "@react-mdc/base/lib/native-dom-adapter";
import { eventHandlerDecorator } from "@react-mdc/base/lib/util";

import { DrawerAdapter, FoundationAdapter } from "./adapter";
import { BASE_CLASS_NAME } from "./constants";
import * as drawerUtil from "./drawerUtil";

export const CLASS_NAME = `${BASE_CLASS_NAME}__drawer`;

const {
  strings: {
    FOCUSABLE_ELEMENTS,
  },
} = MDCTemporaryDrawerFoundation;

export type MetaProps = {
    onClick?: React.MouseEventHandler<any>,
};

export type ChildProps = {
    className?: string,
    onClick?: React.MouseEventHandler<any>,
};

export type State = {
    foundationCssVars: Map<string, string | null>,
    foundationEventListeners: Map<string, Set<EventListener>>,
};

export type Context = {
    adapter: FoundationAdapter,
};

export class Meta extends BaseMeta<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state: State = {
        foundationCssVars: Map<string, string | null>(),
        foundationEventListeners: Map<string, Set<EventListener>>(),
    };

    public componentDidMount() {
        this.context.adapter.setDrawerAdapter(new DrawerAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setDrawerAdapter(new DrawerAdapter());
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

    protected renderProps(childProps: ChildProps) {
        const {
            onClick,
        } = this.props;
        const className = classNames(CLASS_NAME, childProps.className);

        return {
            ...childProps,
            onClick: (eventHandlerDecorator(this.handleClick)(onClick || null) as React.ReactEventHandler<any>),
            className,
        };
    }

    private handleClick: React.ReactEventHandler<any> = (evt: React.SyntheticEvent<any>) => {
        // Don't use click event handler of MDCTemporaryDrawerFoundation
        // See `TemporaryDrawer.handleClick()` for more detail.
        evt.stopPropagation();
    }
}

class DrawerAdapterImpl extends DrawerAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }

    public registerDrawerInteractionHandler(evt: string, handler: EventListener) {
        // Don't use click event handler of MDCTemporaryDrawerFoundation
        // See `TemporaryDrawer.handleClick()` for more detail.
        if (evt === "click") {
            return;
        }
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                drawerUtil.remapEvent(evt, window),
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }
    public deregisterDrawerInteractionHandler(evt: string, handler: EventListener) {
        // Don't use click event handler of MDCTemporaryDrawerFoundation
        // See `TemporaryDrawer.handleClick()` for more detail.
        if (evt === "click") {
            return;
        }
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                drawerUtil.remapEvent(evt, window),
                OrderedSet<EventListener>(),
                (x) => x.delete(handler),
            ),
        }));
    }
    public hasNecessaryDom(): boolean {
        return this.getDOMNode() != null;
    }
    public getDrawerWidth(): number {
        return this.getDOMNode().getBoundingClientRect().width;
    }
    public setTranslateX(value: number) {
        if (value == null) {
            this.element.setState((state) => ({
                foundationCssVars: state.foundationCssVars.delete(drawerUtil.getTransformPropertyName()),
            }));
        } else {
            this.element.setState((state) => ({
                foundationCssVars: state
                    .foundationCssVars
                    .set(drawerUtil.getTransformPropertyName(), `translateX(${value}px)`),
            }));
        }
    }
    public isDrawer(el: Element): boolean {
        return this.getDOMNode() === el;
    }
    public getFocusableElements(): NodeListOf<Element> {
        return this.getDOMNode().querySelectorAll(FOCUSABLE_ELEMENTS);
    }
    public getDOMNode(): Element {
        return ReactDOM.findDOMNode(this.element);
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLElement>, ChildProps, MetaProps>(
        "nav", Meta, [],
    );

export default component;
