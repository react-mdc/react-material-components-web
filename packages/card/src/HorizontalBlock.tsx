import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__horizontal-block`;

export type MetaProps = {
    className?: string,
};

export type ChildProps = {
    className?: string,
};

/**
 * Horizontal block section component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

export default class HorizontalBlock extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "className",
        ];
    }

    protected getChildComponent() {
        return "div";
    }
}
