import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__body`;

export type MetaProps = {
    scrollable?: boolean,
};

export type ChildProps = {
    className?: string,
};

export const propertyClassNames = {
    SCROLLABLE: `${CLASS_NAME}--scrollable`,
};

/**
 * Header title component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        scrollable: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.SCROLLABLE]: this.props.scrollable,
        }];
    }
}

export type Props = React.HTMLProps<HTMLElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps, Props>(
    "section",
    Meta,
    [
        "scrollable",
    ]) as DefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>;

export default component;
