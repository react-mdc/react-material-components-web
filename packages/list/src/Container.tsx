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
    DENSE: `${CLASS_NAME}--dense`,
    TWO_LINE: `${CLASS_NAME}--two-line`,
    AVARTAR_LIST: `${CLASS_NAME}--avartar-list`,
};

export type MetaProps = {
    dense?: boolean,
    twoLine?: boolean,
    avartarList?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * List container component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        return [{
            [propertyClassNames.DENSE]: this.props.dense,
            [propertyClassNames.TWO_LINE]: this.props.twoLine,
            [propertyClassNames.AVARTAR_LIST]: this.props.avartarList,
        }];
    }
}

export default class Container extends DefaultComponentBase<React.HTMLProps<HTMLUListElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "dense",
            "twoLine",
            "avartarList",
        ];
    }

    protected getChildComponent() {
        return "ul";
    }
}
