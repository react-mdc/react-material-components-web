import * as React from "react";

import classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { SECTION_BASE_CLASS_NAME } from "./constants";
import * as helpers from "./helpers";
import { Alignment } from "./types";

export const CLASS_NAME = SECTION_BASE_CLASS_NAME;

export type MetaProps = {
    align?: Alignment,
};

export type ChildProps = {
    className?: string,
}

/**
 * Toolbar section meta
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        let {
            align,
        } = this.props;
        let classes: string[] = [];
        if (align != null) {
            classes.push(helpers.classNameForSectionAlignment(align));
        }
        const className = classNames(
            CLASS_NAME,
            classes,
        );
        return {
            className,
        };
    }
};


// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps>(
        "section", Meta, ["align"],
    );

export default component;
