import * as React from "react";

import classNames from "classnames";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__knob`;

export type Props<P> = WrapperProps<P> & {
    className?: string,
};

/**
 * Knob component
 */
export default class Knob<P> extends PropWrapper<P, Props<P>, {}> {
    public static defaultProps = {
        wrap: <div />,
    };

    public props: Props<P>;

    protected renderProps() {
        let {
            className,
            wrap: _wrap,
            ...props,
        } = this.props;

        className = classNames(
            CLASS_NAME,
            className,
        );
        return {
            ...props,
            className,
        };
    }
};
