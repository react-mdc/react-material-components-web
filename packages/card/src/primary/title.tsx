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

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export const propertyClassNames = {
    LARGE: `${CLASS_NAME}--large`,
};

export type MetaProps = {
    large?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Primary section title component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        large: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_, props: MetaProps) {
        return [{
            [propertyClassNames.LARGE]: props.large,
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLHeadingElement>, MetaProps>(
    "h1",
    PropMakerMetaComponent.simple(new PropMaker(), "Title"),
    [
        "large",
    ],
);
