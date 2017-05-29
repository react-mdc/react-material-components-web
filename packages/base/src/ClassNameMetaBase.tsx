/**
 * Meta factory component.
 */
import * as React from "react";

import * as classNames from "classnames";

import {
    default as MetaBase,
    NativeDOMProps,
} from "./MetaBase";

export type ClassNameChildProps = {
    className?: string,
};

export type ClassNameProps = {
    className?: string,
};

export default abstract class ClassNameMetaBase
    <ChildProps extends ClassNameChildProps, Props extends ClassNameProps, State>
    extends MetaBase<ChildProps, Props, State> {
    public renderProps(childProps: ChildProps): ChildProps {
        return {
            ...childProps as any,
            className: this.renderClassName(childProps),
        };
    }

    public renderNativeDOMProps(childProps: ChildProps) {
        return {};
    }

    protected renderClassName(childProps: ChildProps): string {
        return classNames(
            this.renderBaseClassName(childProps),
            ...this.renderClassValues(childProps),
            this.props.className,
            childProps.className,
        );
    }

    protected renderBaseClassName(childProps: ChildProps): string | null {
        return null;
    }

    protected renderClassValues(childProps: ChildProps): ClassValue[] {
        return [];
    }
}
