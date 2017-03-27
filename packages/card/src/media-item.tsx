import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__media-item`;

export type Size = 1.5 | 2 | 3;

export function classNameForSize(size: Size): string {
    switch (size) {
        case 1.5:
            return `${CLASS_NAME}--1dot5x`;
        case 2:
            return `${CLASS_NAME}--2x`;
        case 3:
            return `${CLASS_NAME}--3x`;
        default:
            throw new TypeError("Invalid size type");
    }
}

export type MetaProps = {
    size?: Size,
};

export type ChildProps = {
    className?: string,
};

/**
 * Media item component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [
            this.props.size == null ? null : classNameForSize(this.props.size),
        ];
    }
}

export type Props = React.HTMLProps<HTMLImageElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLImageElement>, MetaProps, Props>(
    "img",
    Meta,
    [
        "size",
    ]) as DefaultComponent<React.HTMLProps<HTMLImageElement>, MetaProps>;

export default component;
