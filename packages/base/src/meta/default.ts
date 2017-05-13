/**
 * Default component for meta component.
 */
import * as React from "react";

export type DefaultComponent<ChildProps, MetaProps> = React.ComponentClass<ChildProps & MetaProps> & {
    Meta: React.ComponentClass<MetaProps>,
};

export function createDefaultComponent<ChildProps extends React.HTMLProps<any>, MetaProps>(
    defaultComponent: string,
    meta: React.ComponentClass<MetaProps>,
    metaKeys: Array<keyof MetaProps>,
): DefaultComponent<ChildProps, MetaProps>;
export function createDefaultComponent<ChildProps extends {}, MetaProps>(
    defaultComponent: React.ComponentClass<ChildProps> | React.SFC<ChildProps>,
    meta: React.ComponentClass<MetaProps>,
    metaKeys: Array<keyof MetaProps>,
): DefaultComponent<ChildProps, MetaProps>;
export function createDefaultComponent<ChildProps extends {}, MetaProps>(
    defaultComponent: React.ReactType,
    meta: React.ComponentClass<MetaProps>,
    metaKeys: Array<keyof MetaProps>,
): DefaultComponent<ChildProps, MetaProps> {
    // FIXME: This is typecasting hell
    class Component extends React.Component<ChildProps & MetaProps, {}> {
        // tslint:disable:variable-name
        public static Meta = meta;
        // tslint:enable:variable-name
        public static displayName = `Default${meta.displayName || (meta as any).name}`;

        public render() {
            const metaProps: Partial<MetaProps> = {};
            const childProps: Partial<ChildProps> = {};

            for (const key in this.props) {
                if (!this.props.hasOwnProperty(key)) {
                    continue;
                }
                if (metaKeys.indexOf(key as any) !== -1) {
                    metaProps[key] = this.props[key];
                } else {
                    childProps[key] = this.props[key];
                }
            }

            return React.createElement(
                meta,
                metaProps as MetaProps,
                React.createElement(defaultComponent as any, childProps as ChildProps));
        }
    }
    return Component;
}
