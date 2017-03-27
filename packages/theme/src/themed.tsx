import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import * as helpers from "./helpers";
import { BackgroundColor, Color, OnColor, TextColor } from "./types";

export type ChildProps = {
    className?: string,
};

export type MetaProps = {
    color?: Color,
    backgroundColor?: BackgroundColor,
    textColor?: TextColor,
    onColor?: OnColor,
};

export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return null;
    }

    protected getClassValues() {
        const {
            color,
            backgroundColor,
            textColor,
            onColor,
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

        return classes;
    }
};

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps, Props>(
    "div",
    Meta,
    [
        "color",
        "backgroundColor",
        "textColor",
        "onColor",
    ]) as DefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>;

export default component;
