import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

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
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getNativeDOMProps() {
        let cssVariables = {};
        if (this.props.margin != null) {
            cssVariables[MARGIN_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.margin);
        }
        if (this.props.gutter != null) {
            cssVariables[GUTTER_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.gutter);
        }
        return {cssVariables};
    }

    private normalizeMarginAndGutter(value: Margin | Gutter): string {
        if (typeof value === "number") {
            return `${value}px`;
        } else {
            return value;
        }
    }
}

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps, Props>(
    "div",
    Meta,
    [
        "margin",
        "gutter"
    ]) as DefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>;

export default component;
