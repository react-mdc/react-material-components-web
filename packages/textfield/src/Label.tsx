import * as React from "react";

import {
    OrderedSet,
    Set,
} from "immutable";
import * as PropTypes from "prop-types";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

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
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues(_c, _p, state: State) {
        return state.foundationClasses.toJS();
    }
}

class Label extends PropMakerMetaComponent<ChildProps, MetaProps, State> {
    public static contextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public context: Context;

    public state: State = {
        foundationClasses: OrderedSet<string>(),
    };

    protected propMaker = new PropMaker();

    public componentDidMount() {
        this.context.adapter.setLabelAdapter(new LabelAdapterImpl(this));
    }

    public componentWillUnmount() {
        this.context.adapter.setLabelAdapter(new LabelAdapter());
    }
}

class LabelAdapterImpl extends LabelAdapter {
    public element: Label;

    constructor(element: Label) {
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

export default class Label extends DefaultComponentBase<React.HTMLProps<HTMLLabelElement>, MetaProps, {}> {
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
    "label",
    Label,
    [],
);
