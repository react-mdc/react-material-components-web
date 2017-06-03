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
    PREFIX: CLASS_NAME,
    DISABLED: `${CLASS_NAME}--disabled`,
};

export type MetaProps = {
    disabled?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Switch input container component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.DISABLED]: props.disabled,
        }];
    }
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [
        "disabled",
    ],
);
