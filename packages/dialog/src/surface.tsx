import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    Map,
    OrderedSet,
    Set,
} from "immutable";
import * as PropTypes from "prop-types";

import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
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

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, State> {
    public makeNativeDOMProps(_c, _p, state: State) {
        return {
            eventListeners: state.foundationEventListeners.toJS(),
        };
    }

    protected getBaseClassName() {
        return CLASS_NAME;
    }

}

/**
 * Surface component
 */
class Surface extends PropMakerMetaComponent<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state: State = {
        foundationClasses: OrderedSet<string>(),
        foundationEventListeners: Map<string, Set<EventListener>>(),
    };

    protected propMaker = new PropMaker();

    public componentDidMount() {
        this.context.adapter.setSurfaceAdapter(new SurfaceAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setSurfaceAdapter(new SurfaceAdapter());
    }
}

class SurfaceAdapterImpl extends SurfaceAdapter {
    private element: Surface;

    constructor(element: Surface) {
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

export default createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    Surface,
    [],
);
