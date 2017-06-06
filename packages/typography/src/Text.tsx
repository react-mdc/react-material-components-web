import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";
import { TextStyle } from "./types";
import { classNameForTextStyle } from "./utils";

export const propertyClassNames = {
    ADJUST_MARGIN: `${BASE_CLASS_NAME}--adjust-margin`,
};

export type BaseMetaProps = {
    adjustMargin?: boolean,
};

export type MetaProps = BaseMetaProps & {
    textStyle: TextStyle,
};

export type ChildProps = {
    className?: string,
};

/**
 * Text meta component decorated by mdc-typography
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        adjustMargin: false,
    };

    protected renderBaseClassName() {
        return classNameForTextStyle(this.props.textStyle);
    }

    protected renderClassValues() {
        return [{
            [propertyClassNames.ADJUST_MARGIN]: this.props.adjustMargin,
        }];
    }
}

export default class Text extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps, {}> {
    public static Meta = Meta;

    public static defaultComponent(style: TextStyle): string {
        switch (style) {
            case "display4":
                return "h1";
            case "display3":
                return "h2";
            case "display2":
                return "h3";
            case "display1":
                return "h4";
            case "headline":
                return "h5";
            case "title":
                return "h6";
            case "subheading2":
            case "subheading1":
                return "div";
            case "body2":
            case "body1":
            case "caption":
                return "p";
            default:
                throw new TypeError(`Invalid text style: ${style}`);
        }
    }

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "textStyle",
            "adjustMargin",
        ];
    }

    protected getChildComponent() {
        return Text.defaultComponent(this.props.textStyle);
    }
}
