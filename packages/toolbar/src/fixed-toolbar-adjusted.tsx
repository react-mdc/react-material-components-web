import * as React from "react";

import classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}-fixed-adjust`;
// It will be replaced with above one
// https://github.com/material-components/material-components-web/issues/320#issuecomment-282535960
const DEPRECATED_CLASS_NAME = `${BASE_CLASS_NAME}__fixed-adjust`;

export type ChildProps = {
    className?: string,
};

export type MetaProps = {
};

/**
 * Fixed toolbar adjusted main component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        const className = classNames(
            CLASS_NAME,
            DEPRECATED_CLASS_NAME,
        );
        return {
            className,
        };
    }
};


// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLElement>, ChildProps, MetaProps>(
        "header", Meta, [],
    );

export default component;
