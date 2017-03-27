import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    ALIGN_END: `${CLASS_NAME}--align-end`,
};

export type MetaProps = {
    alignEnd?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Form field component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.ALIGN_END]: this.props.alignEnd,
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
        "alignEnd",
    ]) as DefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>;

export {
    component as FormField,
}

export default component;
