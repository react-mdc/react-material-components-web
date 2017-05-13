import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";

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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        const {
            span,
            spanDesktop,
            spanTablet,
            spanPhone,
            order,
            align,
        } = props;

        const classes: string[] = [];
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
        return classes;
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    ClassNameMeta.simple(new PropMaker(), "Cell"),
    [
        "span",
        "spanDesktop",
        "spanTablet",
        "spanPhone",
        "order",
        "align",
        ],
);
