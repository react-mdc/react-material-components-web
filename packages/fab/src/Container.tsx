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
    MINI: `${CLASS_NAME}--mini`,
    PLAIN: `${CLASS_NAME}--plain`,
};

export type MetaProps = {
    mini?: boolean,
    plain?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Fab container
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        return [{
            [propertyClassNames.MINI]: this.props.mini,
            [propertyClassNames.PLAIN]: this.props.plain,
        }];
    }
}

export default class Container extends DefaultComponentBase<React.HTMLProps<HTMLButtonElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "mini",
            "plain",
        ];
    }

    protected getChildComponent() {
        return "button";
    }
}
