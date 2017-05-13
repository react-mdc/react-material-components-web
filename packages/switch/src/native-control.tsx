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

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Native control component
 */
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

// Input with type="checkbox" as default
function CheckboxInput(props: React.HTMLProps<HTMLInputElement>) {
    return (
        <input type="checkbox" {...props} />
    );
}

export type Props = React.HTMLProps<HTMLInputElement> & MetaProps;

export default createDefaultComponent<React.HTMLProps<HTMLInputElement>, MetaProps>(
    CheckboxInput,
    PropMakerMetaComponent.simple(new PropMaker(), "NativeControl"),
    [],
);
