import * as React from "react";
import * as ReactDOM from "react-dom";

import * as classNames from "classnames";

import {
    Map,
    OrderedSet,
    Set,
} from "immutable";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";
import { eventHandlerDecorator } from "@react-mdc/base/lib/util";

import { FoundationAdapter, NativeControlAdapter } from "./adapter";
import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

export type MetaProps = {
    onChange?: React.ChangeEventHandler<any>,
};

export type ChildProps = {
    className?: string,
    checked?: boolean,
};

export type State = {
    foundationEventListeners: Map<string, Set<EventListener>>,
};

export type Context = {
    adapter: FoundationAdapter,
};

/**
 * Checkbox input component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state = {
        foundationEventListeners: Map<string, Set<EventListener>>(),
    };

    public defaultOnChange: React.ChangeEventHandler<any> = () => { };

    public componentDidMount() {
        this.context.adapter.setNativeControlAdapter(new NativeControlAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setNativeControlAdapter(new NativeControlAdapter());
    }

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getNativeDOMProps() {
        return {
            eventListeners: this.state.foundationEventListeners.toJS(),
        };
    }

    protected renderProps(childProps: ChildProps) {
        const {
            onChange,
        } = this.props;

        return {
            ...super.renderProps(childProps),
            onChange: (eventHandlerDecorator(this.handleChange)(onChange || null) as React.ChangeEventHandler<any>),
            checked: this.context.adapter.isChecked() || undefined,
        };
    }

    private handleChange = (evt: React.ChangeEvent<any>) => {
        this.defaultOnChange(evt);
    }
}

class NativeControlAdapterImpl extends NativeControlAdapter {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }

    public registerChangeHandler(handler: EventListener) {
        this.element.setState((state: State) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                "change",
                OrderedSet<EventListener>(),
                (x) => x.add(handler),
            ),
        }));
    }
    public deregisterChangeHandler(handler: EventListener) {
        this.element.setState((state: State) => ({
            foundationEventListeners: state.foundationEventListeners.update(
                "change",
                OrderedSet<EventListener>(),
                (x) => x.delete(handler),
            ),
        }));
    }
    public getNativeControl(): Element | null {
        return ReactDOM.findDOMNode(this.element);
    }
    public setDefaultOnChangeHandler(handler: React.ChangeEventHandler<any>) {
        this.element.defaultOnChange = handler;
    }
}

// Input with type="checkbox" as default
function CheckboxInput(props: React.HTMLProps<HTMLInputElement>) {
    return (
        <input type="checkbox" {...props} />
    );
}

export type Props = React.HTMLProps<HTMLButtonElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLInputElement>, MetaProps, Props>(
    CheckboxInput,
    Meta,
    [
        "onChange",
    ]) as DefaultComponent<React.HTMLProps<HTMLInputElement>, MetaProps>;

export default component;
