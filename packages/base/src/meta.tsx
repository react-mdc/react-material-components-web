import * as React from "react";

import * as classNames from "classnames";

import { default as NativeDOMAdapter, Props as NativeDOMProps } from "./native-dom-adapter";

export type Props<ChildProps> = {
    children?: React.ReactElement<ChildProps>,
};

export default class Meta<ChildProps, P, S> extends React.Component<P & Props<ChildProps>, S> {
    public render() {
        const {
            children,
        } = this.props;
        if (children == null) {
            return null;
        }
        const child = children as React.ReactElement<ChildProps>;
        const props = this.renderProps(child.props);

        return React.cloneElement(child, props);
    }

    protected renderProps(childProps: ChildProps): ChildProps {
        return childProps;
    }
}

export type ClassNameChildProps = {
    className?: string,
};

export type ClassNameProps = {
    className?: string,
};

/**
 * Common meta implementation adapter.
 */
export class MetaAdapter<ChildProps extends ClassNameChildProps, P extends ClassNameProps, S>
    extends Meta<ChildProps, P, S> {

    public render() {
        const nativeDOMProps = this.getNativeDOMProps();
        return (
            <NativeDOMAdapter {...nativeDOMProps}>
                {super.render()}
            </NativeDOMAdapter>
        )
    }

    protected renderProps(childProps: ChildProps): ChildProps {
        childProps = super.renderProps(childProps);
        return {
            ...(childProps as any),
            className: this.renderClassName(childProps),
        };
    }

    protected renderClassName(childProps: ChildProps): string {
        return classNames(
            this.getBaseClassName(),
            ...this.getClassValues(childProps),
            this.props.className,
            childProps.className
        );
    }

    protected getBaseClassName(): string | null {
        throw new Error("getBaseClassName() not implemented");
    }

    protected getClassValues(childProps: ChildProps): ClassValue[] {
        return [];
    }

    protected getNativeDOMProps(): NativeDOMProps {
        return {};
    }
}

export type DefaultComponent<ChildProps, MetaProps> = React.StatelessComponent<ChildProps & MetaProps> & {
    Meta: React.ComponentClass<MetaProps>,
};

export function
    createDefaultComponent
    <ChildProps extends ClassNameChildProps, MetaProps extends ClassNameProps, Props extends ChildProps & MetaProps>
    (defaultComponent: React.ReactType, meta: React.ComponentClass<MetaProps>, metaKeys: Array<keyof MetaProps>):
    React.StatelessComponent<Props> & { Meta: React.ComponentClass<MetaProps> } {
    // FIXME: This is typecasting hell
    function Component(props: ChildProps & MetaProps) {
        let metaProps: Partial<MetaProps> = {};
        let childProps: Partial<ChildProps> = {};

        for (const key in props) {
            if (!props.hasOwnProperty(key)) {
                continue;
            }
            if (metaKeys.indexOf(key as any) !== -1) {
                metaProps[key] = props[key];
            } else {
                childProps[key] = props[key];
            }
        }

        return React.createElement(
            meta,
            metaProps as MetaProps,
            React.createElement(defaultComponent as any, childProps as ChildProps));
    }
    (Component as any).Meta = meta;

    return (Component as React.StatelessComponent<Props> & { Meta: React.ComponentClass<MetaProps> });
}
