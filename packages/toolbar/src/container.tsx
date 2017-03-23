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
    FIXED: `${CLASS_NAME}--fixed`,
};

export type MetaProps = {
    fixed: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Toolbar container meta
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        fixed: false,
    };

    protected renderProps() {
        let {
            fixed,
        } = this.props;
        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.FIXED]: fixed,
            },
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
        "header", Meta, ["fixed"],
    );

export default component;
