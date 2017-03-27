import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
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
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        const {
            span,
            spanDesktop,
            spanTablet,
            spanPhone,
            order,
            align,
        } = this.props;

        let classes: string[] = [];
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
        return classes
    }
}

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps, Props>(
    "div",
    Meta,
    [
        "span",
        "spanDesktop",
        "spanTablet",
        "spanPhone",
        "order",
        "align",
    ]) as DefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>;

export default component;
