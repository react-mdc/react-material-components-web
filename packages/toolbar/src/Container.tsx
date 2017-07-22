import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    FIXED: `${CLASS_NAME}--fixed`,
};

export type MetaProps = {
    fixed?: boolean,
    className?: string,
};

export type ChildProps = {
    className?: string,
};

/**
 * Toolbar container meta
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        return [{
            [propertyClassNames.FIXED]: this.props.fixed,
        }];
    }
}

export default class Container extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "className",
            "fixed",
        ];
    }

    protected getChildComponent() {
        return "header";
    }
}
