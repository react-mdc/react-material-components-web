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

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
  DARK: `${CLASS_NAME}--theme-dark`,
};

export type MetaProps = {
    dark?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Card component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        dark: false,
    };

    protected renderProps() {
        const {
            dark,
        } = this.props;
        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.DARK]: dark,
            },
        );

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
