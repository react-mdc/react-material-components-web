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

export const CLASS_NAME = `${BASE_CLASS_NAME}-divider`;

export const propertyClassNames = {
    INSET: `${CLASS_NAME}--inset`,
};

export type MetaProps = {
    inset?: boolean,
};

export type ChildProps = {
    className?: string,
};
/**
 * List divider component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.INSET]: props.inset,
        }];
    }
}

// li with role="separator" as default
function SeparatorLi(props: React.HTMLProps<HTMLLIElement>) {
    return <li role="separator" {...props} />;
}

export default createDefaultComponent<React.HTMLProps<HTMLLIElement>, MetaProps>(
    SeparatorLi,
    PropMakerMetaComponent.simple(new PropMaker(), "Divider"),
    [
        "inset",
    ],
);
