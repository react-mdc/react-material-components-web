import * as React from "react";

import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    ALIGN_END: `${CLASS_NAME}--align-end`,
};

export type MetaProps = {
    alignEnd?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Form field component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.ALIGN_END]: props.alignEnd,
        }];
    }
}

const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    PropMakerMetaComponent.simple(new PropMaker(), "FormField"),
    [
        "alignEnd",
    ],
);

export {
    component as FormField,
    component as default,
};
