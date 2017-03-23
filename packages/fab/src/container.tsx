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
    MINI: `${CLASS_NAME}--mini`,
    PLAIN: `${CLASS_NAME}--plain`,
};

export type MetaProps = {
    mini?: boolean,
    plain?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Fab container
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        mini: false,
        plain: false,
    };

    protected renderProps() {
        let {
            mini,
            plain,
        } = this.props;
        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.MINI]: mini,
                [propertyClassNames.PLAIN]: plain,
            },
        );
        return {
            className,
        };
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLButtonElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLButtonElement>, ChildProps, MetaProps>(
        "button", Meta, ["mini", "plain"],
    );

export default component;
