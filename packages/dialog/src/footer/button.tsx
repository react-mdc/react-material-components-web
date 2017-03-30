import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";
import {
    Button,
    Props as ButtonProps,
} from "@react-mdc/button";

import {
  BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export type MetaProps = {
    type: "accept" | "cancel",
};

export type ChildProps = {
    className?: string,
};

export const propertyClassNames = {
    TYPE_ACCEPT: `${CLASS_NAME}--accept`,
    TYPE_CANCEL: `${CLASS_NAME}--cancel`,
};

/**
 * Button component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.TYPE_ACCEPT]: this.props.type === "accept",
            [propertyClassNames.TYPE_CANCEL]: this.props.type === "cancel",
        }];
    }
}

export type Props = ButtonProps & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<ButtonProps, MetaProps, Props>(
    Button,
    Meta,
    [
        "type",
    ]) as DefaultComponent<ButtonProps, MetaProps>;

export default component;
