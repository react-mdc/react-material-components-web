import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { CELL_BASE_CLASS_NAME } from "./constants";
import { Alignment, GridNumber } from "./types";
import * as utils from "./utils";

export const CLASS_NAME = CELL_BASE_CLASS_NAME;

export type MetaProps = {
    span?: GridNumber,
    spanDesktop?: GridNumber,
    spanTablet?: GridNumber,
    spanPhone?: GridNumber,
    order?: GridNumber,
    align?: Alignment,
    className?: string,
};

export type ChildProps = {
    className?: string,
};

/**
 * Grid cell component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        const {
            span,
            spanDesktop,
            spanTablet,
            spanPhone,
            order,
            align,
        } = this.props;

        const classes: string[] = [];
        if (span != null) {
            classes.push(utils.classNameForCellSpan(span));
        }
        if (spanDesktop != null) {
            classes.push(utils.classNameForCellSpan(spanDesktop, "desktop"));
        }
        if (spanTablet != null) {
            classes.push(utils.classNameForCellSpan(spanTablet, "tablet"));
        }
        if (spanPhone != null) {
            classes.push(utils.classNameForCellSpan(spanPhone, "phone"));
        }
        if (align != null) {
            classes.push(utils.classNameForCellAlignment(align));
        }
        if (order != null) {
            classes.push(utils.classNameForCellOrder(order));
        }
        return classes;
    }
}

export default class Cell extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }
    protected getMetaPropNames() {
        return [
            "className",
            "span",
            "spanDesktop",
            "spanTablet",
            "spanPhone",
            "order",
            "align",
        ];
    }
    protected getChildComponent() {
        return "div";
    }
}
