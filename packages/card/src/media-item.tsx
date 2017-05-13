import * as React from "react";

import {
    ClassNameMeta,
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
} from "@react-mdc/base";

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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_, props: MetaProps) {
        return [
            props.size == null ? null : classNameForSize(props.size),
        ];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLImageElement>, MetaProps>(
    "img",
    ClassNameMeta.simple(new PropMaker(), "MediaItem"),
    [
        "size",
    ],
);
