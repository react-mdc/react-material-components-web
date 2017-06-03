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

    protected renderClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.FIXED]: props.fixed,
        }];
    }
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps>(
    "header",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [
        "fixed",
    ],
);
