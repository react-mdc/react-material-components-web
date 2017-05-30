import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";
import { classNameForZSpace } from "./helpers";
import { ZSpace } from "./types";

export const propertyClassNames = {
    TRANSITION: `${BASE_CLASS_NAME}-transition`,
};

export type MetaProps = {
    zSpace: ZSpace,
    transition?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Elevation component
 */

export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName(_c) {
        return classNameForZSpace(this.props.zSpace);
    }

    protected renderClassValues(_c: ChildProps) {
        return [{
            [propertyClassNames.TRANSITION]: this.props.transition,
        }];
    }
}

export default class Elevation extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "zSpace",
            "transition",
        ];
    }

    protected getChildComponent() {
        return "div";
    }
}
