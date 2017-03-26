import * as React from "react";
import * as ReactDOM from "react-dom";

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
export class Meta extends BaseMeta<ChildProps, MetaProps, State> {
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
            onChange,
        } = this.props;
        const className = CLASS_NAME;
        return {
            onChange: (eventHandlerDecorator(this.handleChange)(onChange || null) as React.ChangeEventHandler<any>),
            className,
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

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps>(
        CheckboxInput, Meta, [],
    );

export default component;
