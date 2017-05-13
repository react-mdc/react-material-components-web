import * as React from "react";

import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
} from "@react-mdc/base";
import {
    default as Button,
    MetaProps as ButtonMetaProps,
} from "@react-mdc/button";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__action`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

// Button with compact as default
function CompactButton(props: React.HTMLProps<HTMLButtonElement> & ButtonMetaProps) {
    return React.createElement(Button, {
        compact: true,
        ...props,
    });
}

export default createDefaultComponent<React.HTMLProps<HTMLButtonElement> & ButtonMetaProps, MetaProps>(
    CompactButton,
    PropMakerMetaComponent.simple(new PropMaker(), "Action"),
    [],
);
