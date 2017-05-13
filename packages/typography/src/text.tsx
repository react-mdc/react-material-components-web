import * as React from "react";

import {
    ClassNamePropMakerAdapter,
    DefaultComponent,
    PropMakerMetaComponent,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";
import { classNameForTextStyle } from "./helpers";
import { TextStyle } from "./types";

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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        adjustMargin: false,
    };

    protected getBaseClassName(_c, props: MetaProps) {
        return classNameForTextStyle(props.textStyle);
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.ADJUST_MARGIN]: props.adjustMargin,
        }];
    }
}

export class Meta extends PropMakerMetaComponent<ChildProps, MetaProps, {}> {
    public static displayName = "Text";

    protected propMaker = new PropMaker();
}

export default class DefaultText
    extends React.Component<React.HTMLProps<HTMLElement> & MetaProps, {}> {
    public static Meta = Meta;

    public render() {
        const {
            textStyle,
            adjustMargin,
            ...props,
        } = this.props;
        return (
            <Meta
                textStyle={textStyle}
                adjustMargin={adjustMargin}>
                {React.createElement(defaultComponent(textStyle), props)}
            </Meta>
        );
    }
}

export function defaultComponent(style: TextStyle): string {
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
