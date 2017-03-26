import * as React from "react";

import * as classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { BASE_CLASS_NAME } from "./constants";
import { classNameForZSpace } from "./helpers";
import { ZSpace } from "./types";

export const propertyClassNames = {
    TRANSITION: `${BASE_CLASS_NAME}-transition`,
};

export type MetaProps = {
    zSpace: ZSpace,
    transition?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Elevation component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        transition: false,
    };

    protected renderProps(childProps: ChildProps) {
        const {
            zSpace,
            transition,
        } = this.props;
        const className = classNames(
            classNameForZSpace(zSpace),
            {
                [propertyClassNames.TRANSITION]: transition,
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
const component: DefaultComponent<React.HTMLProps<HTMLParagraphElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLParagraphElement>, ChildProps, MetaProps>(
        "p", Meta, ["zSpace", "transition"],
    );

// tslint:disable:variable-name
export const Elevation = component;
// tslint:enable:variable-name

export default component;
