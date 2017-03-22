import * as React from "react";

import classNames from "classnames";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__background`;

export type Props<P> = WrapperProps<P> & {
    className?: string,
};

/**
 * Background component
 */
export default class Background<P> extends PropWrapper<P, Props<P>, {}>  {
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
}
