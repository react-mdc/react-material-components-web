import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";
import {
    Button,
    ChildProps as ButtonChildProps,
    MetaProps as ButtonMetaProps,
} from "@react-mdc/button";

import {
  BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__button`;

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

export type Props = ButtonChildProps & ButtonMetaProps & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<ButtonChildProps & ButtonMetaProps, MetaProps, Props>(
    Button,
    Meta,
    [
        "type",
    ]) as DefaultComponent<ButtonChildProps & ButtonMetaProps, MetaProps>;

export default component;
