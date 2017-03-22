import * as React from "react";

import classNames from "classnames";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
    DISABLED: `${CLASS_NAME}--disabled`,
};

export type Props<P> = WrapperProps<P> & {
    disabled?: boolean,
    className?: string,
};

/**
 * Switch input container component
 */
export default class Container<P> extends PropWrapper<P, Props<P>, {}> {
    public static defaultProps = {
        wrap: <div />,
    };

    protected renderProps() {
        let {
            className,
            wrap: _wrap,
            disabled: _disabled,
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
