import classNames from "classnames";
import {
    OrderedSet,
    Set,
} from "immutable";
import * as React from "react";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import { FoundationAdapter, LabelAdapter } from "./adapter";
import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__label`;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
};

export type Props<P> = WrapperProps<P> & {
    className?: string,
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
export default class Label<P> extends PropWrapper<P, Props<P>, State> {
    public static contextTypes = {
        adapter: React.PropTypes.instanceOf(FoundationAdapter).isRequired,
    };

    public static defaultProps = {
        wrap: <label />,
    };

    public props: Props<P>;

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

    protected renderProps() {
        let {
            wrap: _wrap,
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
            className,
            state.foundationClasses.toJS(),
        );
    }
}

class LabelAdapterImpl<P> extends LabelAdapter {
    public element: Label<P>;

    constructor(element: Label<P>) {
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
