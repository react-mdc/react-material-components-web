import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__subtitle`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Primary section subtitle component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, MetaProps>(
    "h2",
    ClassNameMeta.simple(new PropMaker(), "Subtitle"),
    [],
);
