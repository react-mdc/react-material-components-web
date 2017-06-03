import * as React from "react";
import * as ReactDOM from "react-dom";

import * as PropTypes from "prop-types";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";
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
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

class NativeControl extends PropMakerMetaComponent<ChildProps, MetaProps, {}> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public defaultOnChange: React.ChangeEventHandler<ChildProps>;
    public context: Context;

    protected propMaker = new PropMaker();

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

    private handleChange: React.ChangeEventHandler<any> = (evt: React.ChangeEvent<ChildProps>) => {
        this.defaultOnChange(evt);
    }
}

class NativeControlAdapterImpl extends NativeControlAdapter<ChildProps> {
    private element: NativeControl;

    constructor(element: NativeControl) {
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

export default class NativeControl extends DefaultComponentBase<React.HTMLProps<HTMLInputElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            ???
        ];
    }

    protected getChildComponent() {
        return
    RadioInput,
    NativeControl,
    [
        "onChange",
    ],
);
