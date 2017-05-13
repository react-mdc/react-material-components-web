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

export const CLASS_NAME = `${BASE_CLASS_NAME}__supporting-text`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Supporting text section component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>(
    "section",
    PropMakerMetaComponent.simple(new PropMaker(), "SupportingText"),
    [],
);
