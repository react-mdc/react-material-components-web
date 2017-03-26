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
    DENSE: `${CLASS_NAME}--dense`,
    RAISED: `${CLASS_NAME}--raised`,
    COMPACT: `${CLASS_NAME}--compact`,
    PRIMARY: `${CLASS_NAME}--primary`,
    ACCENT: `${CLASS_NAME}--accent`,
};

export type MetaProps = {
    dense?: boolean,
    raised?: boolean,
    compact?: boolean,
    primary?: boolean,
    accent?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Button meta component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        dense: false,
        raised: false,
        compact: false,
        primary: false,
        accent: false,
    };

    protected renderProps() {
        let {
            dense,
            raised,
            compact,
            primary,
            accent,
        } = this.props;
        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.DENSE]: dense,
                [propertyClassNames.RAISED]: raised,
                [propertyClassNames.COMPACT]: compact,
                [propertyClassNames.PRIMARY]: primary,
                [propertyClassNames.ACCENT]: accent,
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
        "button", Meta, [
            "dense",
            "raised",
            "compact",
            "primary",
            "accent",
        ],
    );

export default component;
