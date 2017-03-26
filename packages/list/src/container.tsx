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
    DENSE: `${CLASS_NAME}--dense`,
    TWO_LINE: `${CLASS_NAME}--two-line`,
    AVARTAR_LIST: `${CLASS_NAME}--avartar-list`,
};

export type MetaProps = {
    dense: boolean,
    twoLine: boolean,
    avartarList: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * List container component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        dense: false,
        twoLine: false,
        avartarList: false,
    };

    protected renderProps(childProps: ChildProps) {
        const {
            dense,
            twoLine,
            avartarList,
        } = this.props;
        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.DENSE]: dense,
                [propertyClassNames.TWO_LINE]: twoLine,
                [propertyClassNames.AVARTAR_LIST]: avartarList,
            },
            childProps.className,
        );

        return {
            ...childProps,
            className,
        };
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLUListElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLUListElement>, ChildProps, MetaProps>(
        "ul", Meta, [
            "dense",
            "twoLine",
            "avartarList"
        ],
    );

export default component;
