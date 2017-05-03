import * as React from "react";

import {
    OrderedSet,
    Set,
} from "immutable";
import * as PropTypes from "prop-types";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
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
export class Meta extends MetaAdapter<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
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

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return this.state.foundationClasses.toJS();
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

export type Props = React.HTMLProps<HTMLLabelElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLLabelElement>, MetaProps, Props>(
    "label",
    Meta,
    []) as DefaultComponent<React.HTMLProps<HTMLLabelElement>, MetaProps>;

export default component;
