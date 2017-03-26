import * as React from "react";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
  BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__horizontal-block`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Horizontal block section component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        dark: false,
    };

    protected renderProps() {
        const className = CLASS_NAME;

        return {
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
