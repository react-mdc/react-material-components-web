import * as React from "react";
import * as ReactDOM from "react-dom";

import { MDCTemporaryDrawerFoundation } from "@material/drawer/dist/mdc.drawer";
import {
    Map,
    OrderedSet,
    Set,
} from "immutable";
import * as PropTypes from "prop-types";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";
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

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, State> {
    public makeNativeDOMProps(_c, _p, state: State) {
        return {
            cssVariables: state.foundationCssVars.toJS(),
            eventListeners: state.foundationEventListeners.toJS(),
        };
    }
}

class Drawer extends ClassNameMeta<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state: State = {
        foundationCssVars: Map<string, string | null>(),
        foundationEventListeners: Map<string, Set<EventListener>>(),
    };

    protected propMaker = new PropMaker();

    public componentDidMount() {
        this.context.adapter.setDrawerAdapter(new DrawerAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setDrawerAdapter(new DrawerAdapter());
    }

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected renderProps(childProps: ChildProps) {
        const {
            onClick,
        } = this.props;

        return {
            ...super.renderProps(childProps),
            onClick: (eventHandlerDecorator(this.handleClick)(onClick || null) as React.ReactEventHandler<any>),
        };
    }

    private handleClick: React.ReactEventHandler<any> = (evt: React.SyntheticEvent<any>) => {
        // Don't use click event handler of MDCTemporaryDrawerFoundation
        // See `TemporaryDrawer.handleClick()` for more detail.
        evt.stopPropagation();
    }
}

class DrawerAdapterImpl extends DrawerAdapter {
    private element: Drawer;

    constructor(element: Drawer) {
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

export default createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>(
    "nav",
    Drawer,
    [],
);
