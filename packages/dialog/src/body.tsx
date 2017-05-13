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

export const CLASS_NAME = `${BASE_CLASS_NAME}__body`;

export type MetaProps = {
    scrollable?: boolean,
};

export type ChildProps = {
    className?: string,
};

export const propertyClassNames = {
    SCROLLABLE: `${CLASS_NAME}--scrollable`,
};

/**
 * Header title component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.SCROLLABLE]: props.scrollable,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>(
    "section",
    PropMakerMetaComponent.simple(new PropMaker(), "Body"),
    [
        "scrollable",
    ],
);
