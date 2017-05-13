import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.FIXED]: props.fixed,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>(
    "header",
    ClassNameMeta.simple(new PropMaker(), "Container"),
    [
        "fixed",
    ],
);
