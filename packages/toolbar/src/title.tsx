import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import { BASE_CLASS_NAME } from "./constants";
import { Alignment } from "./types";

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export type MetaProps = {
    align?: Alignment,
};

export type ChildProps = {
    className?: string,
};

/**
 * Toolbar title component
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
    [
    ]) as DefaultComponent<React.HTMLProps<HTMLSpanElement>, MetaProps>;

export default component;
