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
    DISABLED: `${CLASS_NAME}--disabled`,
};

export type MetaProps = {
    disabled?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Switch input container component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        disabled: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.DISABLED]: this.props.disabled,
        }];
    }
}

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps, Props>(
    "div",
    Meta,
    [
        "disabled",
    ]) as DefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>;

export default component;
