import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export const propertyClassNames = {
    LARGE: `${CLASS_NAME}--large`,
};

export type MetaProps = {
    large?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Primary section title component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        large: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.LARGE]: this.props.large,
        }];
    }
}

export type Props = React.HTMLProps<HTMLHeadingElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, MetaProps, Props>(
    "h1",
    Meta,
    ["large"]) as DefaultComponent<React.HTMLProps<HTMLHeadingElement>, MetaProps>;

export default component;
