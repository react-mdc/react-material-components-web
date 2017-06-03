import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import { BASE_CLASS_NAME } from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLSpanElement>, MetaProps>(
    "span",
    PropMakerMetaComponent.simple(new PropMaker(), "Title"),
    [],
);
