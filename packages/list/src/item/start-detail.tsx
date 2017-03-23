import * as React from "react";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__start-detail`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * List item start detail component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        const className = CLASS_NAME;

        return {
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
