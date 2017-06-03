import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__toolbar-spacer`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

export default class ToolbarSpacer extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [];
    }

    protected getChildComponent() {
        return "div";
    }
}
