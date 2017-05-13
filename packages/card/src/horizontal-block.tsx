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

export const CLASS_NAME = `${BASE_CLASS_NAME}__horizontal-block`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Horizontal block section component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

export type Props = React.HTMLProps<HTMLDivElement> & MetaProps;

export default createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    PropMakerMetaComponent.simple(new PropMaker(), "HorizontalBlock"),
    [],
);
