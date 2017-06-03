import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { BackgroundColor, Color, OnColor, TextColor } from "./types";
import * as utils from "./utils";

export type ChildProps = {
    className?: string,
};

export type MetaProps = {
    color?: Color,
    backgroundColor?: BackgroundColor,
    textColor?: TextColor,
    onColor?: OnColor,
};

export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return null;
    }

    protected renderClassValues() {
        const {
            color,
            backgroundColor,
            textColor,
            onColor,
        } = this.props;

        const classes: string[] = [];
        if (color != null) {
            classes.push(utils.classNameForColor(color));
        }
        if (backgroundColor != null) {
            classes.push(utils.classNameForBackground(backgroundColor));
        }
        if (textColor != null && onColor != null) {
            classes.push(utils.classNameForTextColor(textColor, onColor));
        }

        return classes;
    }
}

export default class Theme extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "color",
            "backgroundColor",
            "textColor",
            "onColor",
        ];
    }

    protected getChildComponent() {
        return "div";
    }
}
