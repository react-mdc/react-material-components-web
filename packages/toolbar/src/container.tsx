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
    FIXED: `${CLASS_NAME}--fixed`,
};

export type MetaProps = {
    fixed?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Toolbar container meta
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        fixed: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.FIXED]: this.props.fixed,
        }];
    }
}

export type Props = React.HTMLProps<HTMLElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps, Props>(
    "header",
    Meta,
    [
        "fixed",
    ]) as DefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>;

export default component;
