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

export const CLASS_NAME = `${BASE_CLASS_NAME}-divider`;

export const propertyClassNames = {
    INSET: `${CLASS_NAME}--inset`,
};

export type MetaProps = {
    inset: boolean,
};

export type ChildProps = {
    className?: string,
};
/**
 * List divider component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        inset: false,
    };

    protected renderProps(childProps: ChildProps) {
        const {
      inset,
    } = this.props;

        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.INSET]: inset,
            },
            childProps.className,
        );

        return {
            ...childProps,
            className,
        };
    }
}

// li with role="separator" as default
function SeparatorLi(props: React.HTMLProps<HTMLLIElement>) {
    return <li role="separator" {...props} />;
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLLIElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLLIElement>, ChildProps, MetaProps>(
        SeparatorLi, Meta, ["inset"],
    );

export default component;
