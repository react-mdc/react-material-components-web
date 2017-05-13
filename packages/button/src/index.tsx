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
    PREFIX: CLASS_NAME,
    DENSE: `${CLASS_NAME}--dense`,
    RAISED: `${CLASS_NAME}--raised`,
    COMPACT: `${CLASS_NAME}--compact`,
    PRIMARY: `${CLASS_NAME}--primary`,
    ACCENT: `${CLASS_NAME}--accent`,
};

export type MetaProps = {
    dense?: boolean,
    raised?: boolean,
    compact?: boolean,
    primary?: boolean,
    accent?: boolean,
};

export type ChildProps = {
    className?: string,
};

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_childProps: ChildProps, props: MetaProps) {
        return [{
            [propertyClassNames.DENSE]: props.dense,
            [propertyClassNames.RAISED]: props.raised,
            [propertyClassNames.COMPACT]: props.compact,
            [propertyClassNames.PRIMARY]: props.primary,
            [propertyClassNames.ACCENT]: props.accent,
        }];
    }
}

const component = createDefaultComponent<React.HTMLProps<HTMLButtonElement>, MetaProps>(
    "button",
    PropMakerMetaComponent.simple(new PropMaker(), "Button"),
    [
        "dense",
        "raised",
        "compact",
        "primary",
        "accent",
    ]);

export {
    component as Button,
    component as default,
};
