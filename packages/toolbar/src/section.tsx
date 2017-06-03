import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
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
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        const {
            align,
        } = this.props;
        const classes: string[] = [];
        if (align != null) {
            classes.push(helpers.classNameForSectionAlignment(align));
        }
        return classes;
    }
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }
    
    protected getMetaPropNames() {
        return [
            ???
        ];
    }

    protected getChildComponent() {
        return
    "section",
    PropMakerMetaComponent.simple(new PropMaker(), "Section"),
    [
        "align",
    ],
);
