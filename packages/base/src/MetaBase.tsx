/**
 * Base class of meta component.
 */
import * as React from "react";

import {
    Attributes,
    CSSVariables,
    default as NativeDOMAdapter,
    EventListeners,
} from "./NativeDOMAdapter";

export type Props<ChildProps> = {
    children: React.ReactElement<ChildProps>,
};

export type NativeDOMProps = {
    cssVariables?: CSSVariables,
    eventListeners?: EventListeners,
    attributes?: Attributes,
};

export default abstract class BaseMeta<ChildProps, MetaProps, State>
    extends React.Component<MetaProps & Props<ChildProps>, State> {
    public render() {
        const {
            children,
        } = this.props;

        const props = this.renderProps(children.props);
        const nativeDOMProps = this.renderNativeDOMProps(children.props);

        return (
            <NativeDOMAdapter {...nativeDOMProps}>
                {React.cloneElement(children, props)}
            </NativeDOMAdapter>
        );
    }

    protected abstract renderProps(childProps: ChildProps): ChildProps;

    protected abstract renderNativeDOMProps(childProps: ChildProps): NativeDOMProps;
}
