import * as React from "react";

import * as classNames from "classnames";
import {
    OrderedSet,
    Set,
} from "immutable";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { FoundationAdapter, LabelAdapter } from "./adapter";
import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__label`;

export type MetaProps = {};

export type ChildProps = {
    classNames?: string,
};

export type State = {
    foundationClasses: Set<string>,
};

export type Context = {
    adapter: FoundationAdapter,
};

/**
 * Textfield label component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state: State = {
        foundationClasses: OrderedSet<string>(),
    };

    public componentDidMount() {
        this.context.adapter.setLabelAdapter(new LabelAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setLabelAdapter(new LabelAdapter());
    }

    protected renderProps(childProps: ChildProps) {
        const className = classNames(
            CLASS_NAME,
            childProps.classNames,
            this.state.foundationClasses.toJS(),
        );
        return {
            ...childProps,
            className,
        };
    }
}

class LabelAdapterImpl<P> extends LabelAdapter {
    public element: Meta;

    constructor(element: Meta) {
        super();
        this.element = element;
    }

    public addClassToLabel(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.add(className),
        }));
    }
    public removeClassFromLabel(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.remove(className),
        }));
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLLabelElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLLabelElement>, ChildProps, MetaProps>(
        "label", Meta, [],
    );

export default component;
