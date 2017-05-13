import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
    GUTTER_CSS_VARIABLE,
    MARGIN_CSS_VARIABLE,
} from "./constants";
import { Gutter, Margin } from "./types";

export const CLASS_NAME = BASE_CLASS_NAME;

export type MetaProps = {
    margin?: Margin,
    gutter?: Gutter,
};

export type ChildProps = {
    className?: string,
};

/**
 * Wrapper component of mdc-layout-grid
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    public makeNativeDOMProps(_c, props: MetaProps) {
        const cssVariables = {};
        if (props.margin != null) {
            cssVariables[MARGIN_CSS_VARIABLE] = this.normalizeMarginAndGutter(props.margin);
        }
        if (props.gutter != null) {
            cssVariables[GUTTER_CSS_VARIABLE] = this.normalizeMarginAndGutter(props.gutter);
        }
        return {cssVariables};
    }

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    private normalizeMarginAndGutter(value: Margin | Gutter): string {
        if (typeof value === "number") {
            return `${value}px`;
        } else {
            return value;
        }
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    ClassNameMeta.simple(new PropMaker(), "Container"),
    [
        "margin",
        "gutter",
    ],
);
