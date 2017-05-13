import * as React from "react";

import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.MINI]: props.mini,
            [propertyClassNames.PLAIN]: props.plain,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLButtonElement>, MetaProps>(
    "button",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [
        "mini",
        "plain",
    ],
);
