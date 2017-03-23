import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { eventHandlerDecorator } from "@react-mdc/base/lib/util";

import { FoundationAdapter, NativeControlAdapter } from "./adapter";
import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
};

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
export type ChangeEventHandler = React.EventHandler<React.SyntheticEvent<ChildProps>>;

export type MetaProps = {
    onChange?: ChangeEventHandler,
};

export type ChildProps = {
    className?: string,
    onChange?: ChangeEventHandler,
    checked?: boolean,
};

export type Context = {
    adapter: FoundationAdapter<ChildProps>,

};

/**
 * Radio input component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static contextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public defaultOnChange: React.ChangeEventHandler<ChildProps>;
    public context: Context;

    public componentDidMount() {
        this.context.adapter.setNativeControlAdapter(new NativeControlAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setNativeControlAdapter(new NativeControlAdapter());
    }

    protected renderProps(): ChildProps {
        const {
      onChange,
    } = this.props;
        const className = CLASS_NAME;
        return {
            checked: this.context.adapter.isChecked() || undefined,
            className,
            onChange: eventHandlerDecorator(this.handleChange)(onChange || null),
        };
    }

    private handleChange = (evt: React.ChangeEvent<ChildProps>) => {
        this.defaultOnChange(evt);
    }
}

class NativeControlAdapterImpl extends NativeControlAdapter<ChildProps> {
    private element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }
    public getNativeControl(): Element | null {
        return ReactDOM.findDOMNode(this.element);
    }
    public setDefaultOnChangeHandler(onChange: React.ChangeEventHandler<ChildProps>) {
        this.element.defaultOnChange = onChange;
    }
}

// Input with type="radio" as default
function RadioInput(props: React.HTMLProps<HTMLInputElement>) {
    return (
        <input type="radio" {...props} />
    );
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps>(
        RadioInput, Meta, ["onChange"],
    );

export default component;
