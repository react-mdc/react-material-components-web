import * as React from "react";

import classNames from "classnames";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

// Input with type="checkbox" as default
function CheckboxInput(props) {
    return (
        <input type="checkbox" {...props} />
    );
}

export type Props<P> = WrapperProps<P> & {
    className?: string,
};

/**
 * Native control component
 */
export default class NativeControl<P> extends PropWrapper<P, Props<P>, {}> {
    public static defaultProps = {
        wrap: CheckboxInput,
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
