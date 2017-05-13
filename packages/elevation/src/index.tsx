import * as React from "react";

import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";
import { classNameForZSpace } from "./helpers";
import { ZSpace } from "./types";

export const propertyClassNames = {
    TRANSITION: `${BASE_CLASS_NAME}-transition`,
};

export type MetaProps = {
    zSpace: ZSpace,
    transition?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Elevation component
 */

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName(_c, props: MetaProps) {
        return classNameForZSpace(props.zSpace);
    }

    protected getClassValues(_c: ChildProps, props: MetaProps) {
        return [{
            [propertyClassNames.TRANSITION]: props.transition,
        }];
    }
}

const component = createDefaultComponent<React.HTMLProps<HTMLDivElement>, MetaProps>(
    "div",
    PropMakerMetaComponent.simple(new PropMaker(), "Elevation"),
    [
        "zSpace",
        "transition",
    ],
);

export {
    component as Elevation,
    component as default,
};
