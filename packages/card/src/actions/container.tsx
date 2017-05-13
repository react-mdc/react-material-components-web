import * as React from "react";

import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__actions`;

export const propertyClassNames = {
    VERTICAL: `${CLASS_NAME}--vertical`,
};

export type MetaProps = {
    vertical?: boolean,
};

export type ChildProps = {
    className?: string,
};

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.VERTICAL]: props.vertical,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>(
    "section",
    PropMakerMetaComponent.simple(new PropMaker(), "Container"),
    [
        "vertical",
    ]);
