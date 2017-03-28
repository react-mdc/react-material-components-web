import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import { BASE_CLASS_NAME } from "./constants";
import { classNameForZSpace } from "./helpers";
import { ZSpace } from "./types";

export const propertyClassNames = {
    TRANSITION: `${BASE_CLASS_NAME}-transition`,
};

export type MetaProps = {
    zSpace: ZSpace,
    transition?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Elevation component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        transition: false,
    };

    protected getBaseClassName() {
        return classNameForZSpace(this.props.zSpace);
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.TRANSITION]: this.props.transition,
        }];
    }
}

export type Props = React.HTMLProps<HTMLParagraphElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLParagraphElement>, MetaProps, Props>(
    "p",
    Meta,
    [
        "zSpace",
        "transition",
    ]) as DefaultComponent<React.HTMLProps<HTMLParagraphElement>, MetaProps>;

export {
    component as Elevation,
}

export default component;
