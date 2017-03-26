import * as React from "react";

import * as classNames from "classnames";

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
        throw new Error("Not implemented");
    }
}

export type ComponentProps<DefaultChildProps, ChildProps, MetaProps> = DefaultChildProps & ChildProps & MetaProps;

export type ClassOf<T> = {
    prototype: T,
    new (): T,
};

export type DefaultComponent<DefaultChildProps, ChildProps, MetaProps> = {
    Meta: ClassOf<Meta<ChildProps, MetaProps, any>>;
} & React.StatelessComponent<ComponentProps<DefaultChildProps, ChildProps, MetaProps>>;

export function createDefaultComponent<DefaultChildProps, ChildProps, MetaProps>(
    defaultComponent: React.ReactType, meta, metaKeys: Array<keyof MetaProps>,
): DefaultComponent<DefaultChildProps, ChildProps, MetaProps> {
    // FIXME: This is typecasting hell
    let component =
        (props: ComponentProps<DefaultChildProps, ChildProps, MetaProps>) => {
            let metaProps: Partial<MetaProps> = {};
            let childProps: Partial<DefaultChildProps & ChildProps> = {};

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
                React.createElement(defaultComponent as any, childProps as DefaultChildProps & ChildProps));
        };
    (component as any).Meta = meta;
    return (component as any) as DefaultComponent<DefaultChildProps, ChildProps, MetaProps>;
}
