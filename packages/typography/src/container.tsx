import * as React from "react";

import classNames from "classnames";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export type Props<P> = WrapperProps<P> & {
    className?: string,
};

/**
 * Wrapper component of mdc-typography
 */
export default class Typography<P> extends PropWrapper<P, Props<P>, {}> {
    public static defaultProps = {
        wrap: <div />,
    };

    public props: Props<P>;

    protected renderProps() {
        let {
            wrap: _wrap,
            className,
            ...props,
        } = this.props;
        return {
            ...props,
            className: classNames(CLASS_NAME, className),
        };
    }
}
