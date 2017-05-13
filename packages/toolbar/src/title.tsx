import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLSpanElement>, MetaProps>(
    "span",
    ClassNameMeta.simple(new PropMaker(), "Title"),
    [],
);
