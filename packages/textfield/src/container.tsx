import * as React from "react";

import { MDCTextfieldFoundation } from "@material/textfield/dist/mdc.textfield";
import { OrderedSet, Set } from "immutable";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

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
export class Meta extends MetaAdapter<ChildProps, MetaProps, State> {
    public static childContextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter),
    };

    public state: State = {
        foundationClasses: OrderedSet<string>(),
    };

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
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.MULTILINE]: this.props.multiline,
            [propertyClassNames.FULLWIDTH]: this.props.fullwidth,
        }, this.state.foundationClasses.toJS()];
    }
};

class ContainerAdapterImpl extends ContainerAdapter {
    private element: Meta;

    constructor(element: Meta) {
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

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps, Props>(
    "div",
    Meta,
    [
        "disabled",
        "multiline",
        "fullwidth",
    ]) as DefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>;

export default component;
