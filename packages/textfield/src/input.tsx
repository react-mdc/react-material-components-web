import * as React from "react";
import ReactDOM from "react-dom";

import classNames from "classnames";
import {
    Map,
    OrderedSet,
    Set,
} from "immutable";

import { NativeDOMAdapter } from "@react-mdc/base";
import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import { FoundationAdapter, InputAdapter } from "./adapter";
import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__input`;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
};

export type Props<P> = WrapperProps<P> & {
    className?: string,
};

export type State = {
    foundationEventListeners: Map<string, Set<EventListener>>,
};

export type Context = {
    adapter: FoundationAdapter,
};

// Input with type="checkbox" as default
function TextInput(props) {
    return (
        <input type="text" {...props} />
    );
}

/**
 * Textfield input component
 */
export default class Input<P> extends PropWrapper<P, Props<P>, State> {
    public static contextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public static defaultProps = {
        wrap: TextInput,
    };

    public props: Props<P>;

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

    protected renderProps() {
        let {
      wrap: _wrap,
            className,
            ...props,
    } = this.props;
        className = classNames(
            CLASS_NAME,
            className,
        );
        return {
            ...props,
            className,
        };
    }
};

class InputAdapterImpl<P> extends InputAdapter {
    private element: Input<P>;

    constructor(element: Input<P>) {
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
