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
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

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
    className?: string,
};

export type ChildProps = {
    className?: string,
};

export type State = {
    foundationCssVars: Map<string, string | null>,
    foundationEventListeners: Map<string, Set<EventListener>>,
};

export type Context = {
    adapter: FoundationAdapter,
};

export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
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

    protected renderNativeDOMProps() {
        return {
            cssVariables: this.state.foundationCssVars.toJS(),
            eventListeners: this.state.foundationEventListeners.toJS(),
        };
    }

    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

class DrawerAdapterImpl extends DrawerAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }

    public registerDrawerInteractionHandler(evt: string, handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                drawerUtil.remapEvent(evt, window),
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }

    public deregisterDrawerInteractionHandler(evt: string, handler: EventListener) {
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

export default class Drawer extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "className",
        ];
    }

    protected getChildComponent() {
        return "nav";
    }
}
