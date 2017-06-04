import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__icon`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Fab icon component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

export default class Icon extends DefaultComponentBase<React.HTMLProps<HTMLSpanElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [];
    }

    protected getChildComponent() {
        return "span";
    }
}
