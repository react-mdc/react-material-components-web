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
  DARK: `${CLASS_NAME}--theme-dark`,
};

export type MetaProps = {
    dark?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Card component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues(_, props: MetaProps) {
        return [{
            [propertyClassNames.DARK]: props.dark,
        }];
    }
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [
        "dark",
    ]);
