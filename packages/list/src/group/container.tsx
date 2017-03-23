import * as React from "react";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
  BASE_CLASS_NAME
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * List group component
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
const component: DefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps>(
        "h3", Meta, [],
    );

export default component;
