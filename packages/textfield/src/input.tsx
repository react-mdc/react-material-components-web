import * as React from "react";
import ReactDOM from "react-dom";

import * as classNames from "classnames";
import {
    Map,
    OrderedSet,
    Set,
} from "immutable";

import { NativeDOMAdapter } from "@react-mdc/base";
import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
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
export class Meta extends BaseMeta<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired,
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

    public render() {
        return (
            <NativeDOMAdapter
                eventListeners={this.state.foundationEventListeners.toJS()}>
                {super.render()}
            </NativeDOMAdapter>
        );
    }

    protected renderProps(childProps: ChildProps) {
        const className = classNames(
            CLASS_NAME,
            childProps.className,
        );

        return {
            ...childProps,
            className,
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

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps>(
        TextInput, Meta, [],
    );

export default component;
