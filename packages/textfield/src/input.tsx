import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    Map,
    OrderedSet,
    Set,
} from "immutable";
import * as PropTypes from "prop-types";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import { FoundationAdapter, InputAdapter } from "./adapter";
import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__input`;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
};

export type ChildProps = {
    className?: string,
};

export type MetaProps = {
};

export type State = {
    foundationEventListeners: Map<string, Set<EventListener>>,
};

export type Context = {
    adapter: FoundationAdapter,
};

/**
 * Textfield input component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state: State = {
        foundationEventListeners: Map<string, Set<EventListener>>(),
    };

    public componentDidMount() {
        this.context.adapter.setInputAdapter(new InputAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setInputAdapter(new InputAdapter());
    }

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getNativeDOMProps() {
        return {
            eventListeners: this.state.foundationEventListeners.toJS(),
        };
    }
};

class InputAdapterImpl<P> extends InputAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }

    public registerInputFocusHandler(handler: EventListener) {
        this.registerInputHandler("focus", handler);
    }
    public deregisterInputFocusHandler(handler: EventListener) {
        this.deregisterInputHandler("focus", handler);
    }
    public registerInputBlurHandler(handler: EventListener) {
        this.registerInputHandler("blur", handler);
    }
    public deregisterInputBlurHandler(handler: EventListener) {
        this.deregisterInputHandler("blur", handler);
    }
    public registerInputInputHandler(handler: EventListener) {
        this.registerInputHandler("input", handler);
    }
    public deregisterInputInputHandler(handler: EventListener) {
        this.deregisterInputHandler("input", handler);
    }
    public registerInputKeydownHandler(handler: EventListener) {
        this.registerInputHandler("keydown", handler);
    }
    public deregisterInputKeydownHandler(handler: EventListener) {
        this.deregisterInputHandler("keydown", handler);
    }
    public getNativeInput(): { value: string, disabled: boolean, checkValidity: () => boolean } | null {
        return ReactDOM.findDOMNode(this.element);
    }

    private registerInputHandler(evt: string, handler: EventListener) {
        this.element.setState((state: State) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evt,
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }

    private deregisterInputHandler(evt: string, handler: EventListener) {
        this.element.setState((state: State) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                evt,
                OrderedSet<EventListener>(),
                (x) => x.delete(handler),
            ),
        }));
    }
}

// Input with type="checkbox" as default
function TextInput(props: React.HTMLProps<HTMLInputElement>) {
    return (
        <input type="text" {...props} />
    );
}

export type Props = React.HTMLProps<HTMLInputElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLInputElement>, MetaProps, Props>(
    TextInput,
    Meta,
    []) as DefaultComponent<React.HTMLProps<HTMLInputElement>, MetaProps>;

export default component;
