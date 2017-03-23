import * as React from "react";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";
import NativeDOMAdapter from "@react-mdc/base/lib/native-dom-adapter";

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
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    public render() {
        let cssVariables = {};
        if (this.props.margin != null) {
            cssVariables[MARGIN_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.margin);
        }
        if (this.props.gutter != null) {
            cssVariables[GUTTER_CSS_VARIABLE] = this.normalizeMarginAndGutter(this.props.gutter);
        }
        return (
            <NativeDOMAdapter cssVariables={cssVariables}>
                {super.render()}
            </NativeDOMAdapter>
        );
    }
    protected renderProps() {
        const className = CLASS_NAME;

        return {
            className,
        };
    }

    private normalizeMarginAndGutter(value: Margin | Gutter): string {
        if (typeof value === "number") {
            return `${value}px`;
        } else {
            return value;
        }
    }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, ChildProps, MetaProps>(
        "h3", Meta, ["margin", "gutter"],
    );

export default component;
