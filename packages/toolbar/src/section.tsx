import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";

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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        const {
            align,
        } = props;
        const classes: string[] = [];
        if (align != null) {
            classes.push(helpers.classNameForSectionAlignment(align));
        }
        return classes;
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>(
    "section",
    ClassNameMeta.simple(new PropMaker(), "Section"),
    [
        "align",
    ],
);
