/**
 * Meta factory component.
 */
import * as React from "react";

import * as classNames from "classnames";

import {
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
