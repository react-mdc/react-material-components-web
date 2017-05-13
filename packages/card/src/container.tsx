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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_, props: MetaProps) {
        return [{
            [propertyClassNames.DARK]: props.dark,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [
        "dark",
    ]);
