import * as React from "react";
import * as ReactDOM from "react-dom";

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

import {
    MDCDialogFoundation,
} from "@material/dialog/dist/mdc.dialog";
import { FoundationAdapter, SurfaceAdapter } from "./adapter";
import {
    BASE_CLASS_NAME,
} from "./constants";

const {
    strings: { FOCUSABLE_ELEMENTS },
} = MDCDialogFoundation;

export const CLASS_NAME = `${BASE_CLASS_NAME}__surface`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

export type State = {
    foundationClasses: Set<string>,
    foundationEventListeners: Map<string, Set<EventListener>>,
};

export type Context = {
    adapter: FoundationAdapter,
};

/**
 * Surface component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state: State = {
        foundationClasses: OrderedSet<string>(),
        foundationEventListeners: Map<string, Set<EventListener>>(),
    };

    public componentDidMount() {
        this.context.adapter.setSurfaceAdapter(new SurfaceAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setSurfaceAdapter(new SurfaceAdapter());
    }

    protected renderNativeDOMProps() {
        return {
            eventListeners: this.state.foundationEventListeners.toJS(),
        };
    }

    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

class SurfaceAdapterImpl extends SurfaceAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }
    public registerSurfaceInteractionHandler(evt: string, handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evt,
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }
    public deregisterSurfaceInteractionHandler(evt: string, handler: EventListener) {
        this.element.setState((state) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evt,
                OrderedSet<EventListener>(),
                (x) => x.delete(handler),
            ),
        }));
    }
    public numFocusableTargets(): number {
        return this.getDOMNode().querySelectorAll(FOCUSABLE_ELEMENTS)[0].length;
    }
    public setDialogFocusFirstTarget() {
        return this.getDOMNode().querySelectorAll(FOCUSABLE_ELEMENTS)[0].focus();
    }
    public setInitialFocus() {
    }
    public getFocusableElements(): Element[] {
        return this.getDOMNode().querySelectorAll(FOCUSABLE_ELEMENTS);
    }
    public getDOMNode(): Element {
        return ReactDOM.findDOMNode(this.element);
    }
}

export default class Surface extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [];
    }

    protected getChildComponent() {
        return "div";
    }
}
