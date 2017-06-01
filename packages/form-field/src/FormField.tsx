import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    ALIGN_END: `${CLASS_NAME}--align-end`,
};

export type MetaProps = {
    alignEnd?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Form field component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        return [{
            [propertyClassNames.ALIGN_END]: this.props.alignEnd,
        }];
    }
}

export default class FormField extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "alignEnd",
        ];
    }

    protected getChildComponent() {
        return "div";
    }
}
