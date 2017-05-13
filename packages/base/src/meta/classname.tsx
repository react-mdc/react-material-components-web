/**
 * Meta factory component.
 */
import * as React from "react";

import * as classNames from "classnames";

import {
    default as Meta,
    NativeDOMProps,
} from "./base";
import { IPropMaker } from "./prop-maker";

export type ClassNameChildProps = {
    className?: string,
};

export type ClassNameProps = {
    className?: string,
};

export abstract class ClassNamePropMakerAdapter
    <ChildProps extends ClassNameChildProps, Props extends ClassNameProps, State>
    implements IPropMaker<ChildProps, Props, State> {
    public makeProps(childProps: ChildProps, props: Props, state: State): ChildProps {
        return {
            ...childProps as any,
            className: this.renderClassName(childProps, props, state),
        };
    }

    public makeNativeDOMProps(_childProps: ChildProps, _props: Props, _state: State) {
        return {};
    }

    protected renderClassName(childProps: ChildProps, props: Props, state: State): string {
        return classNames(
            this.getBaseClassName(childProps, props, state),
            ...this.getClassValues(childProps, props, state),
            props.className,
            childProps.className,
        );
    }

    protected getBaseClassName(_childProps: ChildProps, _props: Props, _state: State): string | null {
        return null;
    }

    protected getClassValues(_childProps: ChildProps, _props: Props, _state: State): ClassValue[] {
        return [];
    }
}

export type Props<ChildProps> = {
    children?: React.ReactElement<ChildProps>,
};

/**
 * Common meta with className property implementation adapter.
 */
export abstract class ClassNameMeta
    <ChildProps extends ClassNameChildProps, Props extends ClassNameProps, State>
    extends Meta<ChildProps, Props, State> {

    /**
     * Simple meta factory that has no extra implementations
     */
    public static simple<ChildProps, Props>(
        propMaker: IPropMaker<ChildProps, Props, {}>, displayName: string): React.ComponentClass<Props> {
        class SimpleMeta extends ClassNameMeta<ChildProps, Props, {}> {
            public static displayName = displayName;
            public propMaker = propMaker;
        }
        return SimpleMeta;
    }

    protected abstract propMaker: IPropMaker<ChildProps, Props, State>;

    protected renderProps(childProps: ChildProps): ChildProps {
        return this.propMaker.makeProps(childProps, this.getMetaProps(), this.state);
    }

    protected getNativeDOMProps(childProps: ChildProps): NativeDOMProps {
        return this.propMaker.makeNativeDOMProps(childProps, this.getMetaProps(), this.state);
    }

    private getMetaProps(): Props {
        // Typecheck always fails on following lines. So we use casting with any
        const {
            children,
            ...rest,
        } = this.props as any;
        return rest;
    }
}
