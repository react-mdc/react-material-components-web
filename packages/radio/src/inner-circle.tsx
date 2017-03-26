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

export const CLASS_NAME = `${BASE_CLASS_NAME}__inner-circle`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Radio inner circle component
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
const component: DefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps>(
        "div", Meta, [],
    );

export default component;
