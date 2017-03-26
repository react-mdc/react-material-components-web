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

export const CLASS_NAME = `${BASE_CLASS_NAME}__actions`;

export const propertyClassNames = {
    VERTICAL: `${CLASS_NAME}--vertical`,
};

export type MetaProps = {
    vertical: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Actions section component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        const {
      vertical,
    } = this.props;

        const className = classNames(
            CLASS_NAME,
            {
                [propertyClassNames.VERTICAL]: vertical,
            },
        );

        return {
            className,
        };
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLElement>, ChildProps, MetaProps>(
        "section", Meta, ["vertical"],
    );

export default component;
