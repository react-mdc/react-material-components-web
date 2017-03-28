import * as React from "react";
import * as ReactDOM from "react-dom";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
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
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
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

    protected renderProps(childProps: ChildProps) {
        const {
            onChange,
        } = this.props;
        return {
            ...super.renderProps(childProps),
            checked: this.context.adapter.isChecked() || undefined,
            onChange: (eventHandlerDecorator(this.handleChange)(onChange || null) as React.ChangeEventHandler<any>),
        };
    }

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    private handleChange: React.ChangeEventHandler<any> = (evt: React.ChangeEvent<ChildProps>) => {
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

export type Props = React.HTMLProps<HTMLInputElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLInputElement>, MetaProps, Props>(
    RadioInput,
    Meta,
    [
        "onChange",
    ]) as DefaultComponent<React.HTMLProps<HTMLInputElement>, MetaProps>;

export default component;
