import * as React from "react";

import { MDCTextfieldFoundation } from "@material/textfield/dist/mdc.textfield";
import classNames from "classnames";
import { OrderedSet, Set } from "immutable";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

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

export type Props<P> = WrapperProps<P> & {
    disabled?: boolean,
    multiline?: boolean,
    fullwidth?: boolean,
    className?: string,
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
export default class Container<P> extends PropWrapper<P, Props<P>, State> {
    public static childContextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter),
    };

    public static defaultProps = {
        wrap: <div />,
    };

    public props: Props<P>;

    public state: State = {
        foundationClasses: OrderedSet<string>(),
    };

    private adapter: FoundationAdapter;
    private foundation: MDCTextfieldFoundation;

    constructor(props: Props<P>) {
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

    protected renderProps() {
        let {
            wrap: _wrap,
            disabled: _disabled,
            multiline: _multiline,
            fullwidth: _fullwidth,
            className: _className,
            ...props,
        } = this.props;

        let className = this.getClassName(this.props, this.state);
        return {
            ...props,
            className,
        };
    }

    private getClassName(props: Props<P>, state: State): string {
        let {
      className,
    } = props;
        return classNames(
            CLASS_NAME,
            {
                [propertyClassNames.MULTILINE]: this.props.multiline,
                [propertyClassNames.FULLWIDTH]: this.props.fullwidth,
            },
            className,
            state.foundationClasses.toJS(),
        );
    }
};

class ContainerAdapterImpl<P> extends ContainerAdapter {
    private element: Container<P>;

    constructor(element: Container<P>) {
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
