import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__icon`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Fab icon component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

export type Props = React.HTMLProps<HTMLSpanElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLSpanElement>, MetaProps, Props>(
    "span",
    Meta,
    []) as DefaultComponent<React.HTMLProps<HTMLSpanElement>, MetaProps>;

export default component;
