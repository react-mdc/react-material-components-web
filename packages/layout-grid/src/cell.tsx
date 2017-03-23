import * as React from "react";

import * as classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import { CELL_BASE_CLASS_NAME } from "./constants";
import * as helpers from "./helpers";
import { Alignment, GridNumber } from "./types";

export const CLASS_NAME = CELL_BASE_CLASS_NAME;

export type MetaProps = {
    span?: GridNumber,
    spanDesktop?: GridNumber,
    spanTablet?: GridNumber,
    spanPhone?: GridNumber,
    order?: GridNumber,
    align?: Alignment,
};

export type ChildProps = {
    className?: string,
};

/**
 * Grid cell component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        const className = this.getClassName();

        return {
            className,
        };
    }

    private getClassName(): string {
        const {
            span,
            spanDesktop,
            spanTablet,
            spanPhone,
            order,
            align,
        } = this.props;

        let classes = [CLASS_NAME];
        if (span != null) {
            classes.push(helpers.classNameForCellSpan(span));
        }
        if (spanDesktop != null) {
            classes.push(helpers.classNameForCellSpan(spanDesktop, "desktop"));
        }
        if (spanTablet != null) {
            classes.push(helpers.classNameForCellSpan(spanTablet, "tablet"));
        }
        if (spanPhone != null) {
            classes.push(helpers.classNameForCellSpan(spanPhone, "phone"));
        }
        if (align != null) {
            classes.push(helpers.classNameForCellAlignment(align));
        }
        if (order != null) {
            classes.push(helpers.classNameForCellOrder(order));
        }
        return classNames(classes);
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLDivElement>, ChildProps, MetaProps>(
        "div", Meta, [
            "span",
            "spanDesktop",
            "spanTablet",
            "spanPhone",
            "order",
            "align",
        ],
    );

export default component;
