import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
    DENSE: `${CLASS_NAME}--dense`,
    RAISED: `${CLASS_NAME}--raised`,
    COMPACT: `${CLASS_NAME}--compact`,
    PRIMARY: `${CLASS_NAME}--primary`,
    ACCENT: `${CLASS_NAME}--accent`,
};

export type MetaProps = {
    dense?: boolean,
    raised?: boolean,
    compact?: boolean,
    primary?: boolean,
    accent?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Button meta component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        dense: false,
        raised: false,
        compact: false,
        primary: false,
        accent: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.DENSE]: this.props.dense,
            [propertyClassNames.RAISED]: this.props.raised,
            [propertyClassNames.COMPACT]: this.props.compact,
            [propertyClassNames.PRIMARY]: this.props.primary,
            [propertyClassNames.ACCENT]: this.props.accent,
        }];
    }
}

export type Props = React.HTMLProps<HTMLButtonElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLButtonElement>, MetaProps, Props>(
    "button",
    Meta,
    [
        "dense",
        "raised",
        "compact",
        "primary",
        "accent",
    ]) as DefaultComponent<React.HTMLProps<HTMLButtonElement>, MetaProps>;

export {
    component as Button,
};

export default component;
