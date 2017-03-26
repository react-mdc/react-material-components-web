import * as React from "react";

import * as classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__end-detail`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * List item end detail component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps(childProps: ChildProps) {
        const className = classNames(CLASS_NAME, childProps.className);

        return {
            ...childProps,
            className,
        };
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLSpanElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLSpanElement>, ChildProps, MetaProps>(
        "span", Meta, [],
    );

export default component;
