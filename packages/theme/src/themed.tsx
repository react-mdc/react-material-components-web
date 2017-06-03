import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

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
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }
    
    protected getMetaPropNames() {
        return [
            ???
        ];
    }

    protected getChildComponent() {
        return
    "div",
    PropMakerMetaComponent.simple(new PropMaker(), "Themed"),
    [
        "color",
        "backgroundColor",
        "textColor",
        "onColor",
    ],
);
