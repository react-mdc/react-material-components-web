import * as React from "react";

import * as classNames from "classnames";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}-fixed-adjust`;
// It will be replaced with above one
// https://github.com/material-components/material-components-web/issues/320#issuecomment-282535960
const DEPRECATED_CLASS_NAME = `${BASE_CLASS_NAME}__fixed-adjust`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Fixed toolbar adjusted main component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return classNames(CLASS_NAME, DEPRECATED_CLASS_NAME);
    }
}

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps, Props>(
    "div",
    Meta,
    []) as DefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>;

export default component;
