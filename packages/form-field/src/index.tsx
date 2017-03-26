import * as React from "react";

import * as classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    ALIGN_END: `${CLASS_NAME}--align-end`,
};

export type MetaProps = {
    alignEnd?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Form field component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps(childProps: ChildProps) {
        const {
            alignEnd,
        } = this.props;

        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.ALIGN_END]: alignEnd,
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
const component: DefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps>(
        "div", Meta, [
            "alignEnd",
        ],
    );

// tslint:disable:variable-name
export const FormField = component;
// tslint:enable:variable-name

export default component;
