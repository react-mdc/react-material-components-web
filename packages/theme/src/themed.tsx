import * as React from "react";

import classNames from "classnames";

import { default as PropWrapper, Props as WrapperProps } from "@react-mdc/base/lib/prop-wrapper";

import * as helpers from "./helpers";
import { BackgroundColor, Color, OnColor, TextColor } from "./types";

export type Props<P> = WrapperProps<P> & {
    className?: string,
    color?: Color,
    backgroundColor?: BackgroundColor,
    textColor?: TextColor,
    onColor?: OnColor,
};

export default class Themed<P> extends PropWrapper<P, Props<P>, {}> {
    public static defaultProps = {
        wrap: <div />,
    };

    protected renderProps() {
        let {
      wrap: _wrap,
            className,
            color,
            backgroundColor,
            textColor,
            onColor,
            ...props,
    } = this.props;

        let classes: string[] = [];
        if (color != null) {
            classes.push(helpers.classNameForColor(color));
        }
        if (backgroundColor != null) {
            classes.push(helpers.classNameForBackground(backgroundColor));
        }
        if (textColor != null && onColor != null) {
            classes.push(helpers.classNameForTextColor(textColor, onColor));
        }
        className = classNames(classes, className);

        props = {
            className,
            ...props,
        };
        return props;
    }
};
