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
    MINI: `${CLASS_NAME}--mini`,
    PLAIN: `${CLASS_NAME}--plain`,
};

export type MetaProps = {
    mini?: boolean,
    plain?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Fab container
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        mini: false,
        plain: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.MINI]: this.props.mini,
            [propertyClassNames.PLAIN]: this.props.plain,
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
        "mini",
        "plain",
    ]) as DefaultComponent<React.HTMLProps<HTMLButtonElement>, MetaProps>;

export default component;
