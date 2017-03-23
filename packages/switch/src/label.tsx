import * as React from "react";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}-label`;

export type MetaProps = {};
export type ChildProps = {
    className?: string,
};

/**
 * Label component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        const className = CLASS_NAME;
        return {
            className,
        };
    }
};

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLLabelElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLLabelElement>, ChildProps, MetaProps>(
        "label", Meta, [],
    );

export default component;
