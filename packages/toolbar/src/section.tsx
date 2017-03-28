import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
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
};

/**
 * Toolbar section component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        const {
            align,
        } = this.props;
        let classes: string[] = [];
        if (align != null) {
            classes.push(helpers.classNameForSectionAlignment(align));
        }
        return classes;
    }
};

export type Props = React.HTMLProps<HTMLElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps, Props>(
    "section",
    Meta,
    [
        "align",
    ]) as DefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>;

export default component;
