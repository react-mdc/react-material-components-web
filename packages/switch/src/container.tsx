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
    PREFIX: CLASS_NAME,
    DISABLED: `${CLASS_NAME}--disabled`,
};

export type MetaProps = {
    disabled?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Switch input container component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        disabled: false,
    };

    protected renderProps(childProps: ChildProps) {
        const {
            disabled,
        } = this.props;
        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.DISABLED]: disabled,
            },
            childProps.className,
        );
        return {
            ...childProps,
            className,
        };
    }
};

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps>(
        "div", Meta, ["disabled"],
    );

export default component;
