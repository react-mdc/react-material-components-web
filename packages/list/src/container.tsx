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
    DENSE: `${CLASS_NAME}--dense`,
    TWO_LINE: `${CLASS_NAME}--two-line`,
    AVARTAR_LIST: `${CLASS_NAME}--avartar-list`,
};

export type MetaProps = {
    dense?: boolean,
    twoLine?: boolean,
    avartarList?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * List container component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.DENSE]: props.dense,
            [propertyClassNames.TWO_LINE]: props.twoLine,
            [propertyClassNames.AVARTAR_LIST]: props.avartarList,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLUListElement>, MetaProps>(
    "ul",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [
        "dense",
        "twoLine",
        "avartarList",
    ],
);
