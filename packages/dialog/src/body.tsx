import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
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
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.SCROLLABLE]: props.scrollable,
        }];
    }
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLElement>, MetaProps>(
    "section",
    PropMakerMetaComponent.simple(new PropMaker(), "Body"),
    [
        "scrollable",
    ],
);
