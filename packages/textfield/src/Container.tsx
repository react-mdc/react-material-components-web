import * as React from "react";

import { MDCTextfieldFoundation } from "@material/textfield/dist/mdc.textfield";
import { OrderedSet, Set } from "immutable";
import * as PropTypes from "prop-types";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { ContainerAdapter, FoundationAdapter } from "./adapter";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
    MULTILINE: `${CLASS_NAME}--multiline`,
    FULLWIDTH: `${CLASS_NAME}--fullwidth`,
};

export type ChildProps = {
    className?: string,
};

export type MetaProps = {
    disabled?: boolean,
    multiline?: boolean,
    fullwidth?: boolean,
};

export type State = {
    foundationClasses: Set<string>,
};

export type ChildContext = {
    adapter: FoundationAdapter,
};

/**
 * Textfield input container component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues(_c, props: MetaProps, state: State) {
        return [{
            [propertyClassNames.MULTILINE]: this.props.multiline,
            [propertyClassNames.FULLWIDTH]: this.props.fullwidth,
        }, state.foundationClasses.toJS()];
    }
}

class Container extends PropMakerMetaComponent<ChildProps, MetaProps, State> {
    public static childContextTypes = {
        adapter: PropTypes.instanceOf(FoundationAdapter),
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
    };

    protected propMaker = new PropMaker();

    private adapter: FoundationAdapter;
    private foundation: MDCTextfieldFoundation;

    constructor(props) {
        super(props);
        this.adapter = new FoundationAdapter();
        this.foundation = new MDCTextfieldFoundation(this.adapter.toObject());
    }

    // Foundation lifecycle
    public componentDidMount() {
        this.adapter.setContainerAdapter(new ContainerAdapterImpl(this));
        this.foundation.init();
    }

    public componentWillUnmount() {
        this.foundation.destroy();
        this.adapter.setContainerAdapter(new ContainerAdapter());
    }

    public getChildContext(): ChildContext {
        return {
            adapter: this.adapter,
        };
    }
}

class ContainerAdapterImpl extends ContainerAdapter {
    private element: Container;

    constructor(element: Container) {
        super();
        this.element = element;
    }
    public addClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.add(className),
        }));
    }
    public removeClass(className: string) {
        this.element.setState((state) => ({
            foundationClasses: state.foundationClasses.remove(className),
        }));
    }
}

export default class Container extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
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
    "div",
    Container,
    [
        "disabled",
        "multiline",
        "fullwidth",
    ]);
