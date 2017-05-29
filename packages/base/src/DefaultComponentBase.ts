/**
 * Default component for meta component.
 */
import * as React from "react";

export default abstract class DefaultComponentBase<ChildProps, MetaProps, State>
    extends React.Component<ChildProps & MetaProps, State> {

    public render() {
        const metaProps: Partial<MetaProps> = {};
        const childProps: Partial<ChildProps> = {};

        const metaKeys = this.getMetaPropNames();
        const meta = this.getMetaComponent();
        const defaultComponent = this.getChildComponent();

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

    protected abstract getMetaPropNames(): string[];
    protected abstract getMetaComponent(): React.ComponentClass<MetaProps>;
    protected abstract getChildComponent(): string | React.ComponentClass<ChildProps> | React.SFC<ChildProps>;
}
