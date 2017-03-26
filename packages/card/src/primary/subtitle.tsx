import * as React from "react";

import * as classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__subtitle`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Primary section subtitle component
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
const component: DefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps>(
        "h2", Meta, [],
    );

export default component;
