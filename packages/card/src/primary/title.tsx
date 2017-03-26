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

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export const propertyClassNames = {
  LARGE: `${CLASS_NAME}--large`,
};

export type MetaProps = {
    large?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Primary section title component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        large: false,
    };

    protected renderProps() {
        const {
            large,
        } = this.props;
        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.LARGE]: large,
            },
        );

        return {
            className,
        };
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps>(
        "h1", Meta, [],
    );

export default component;
