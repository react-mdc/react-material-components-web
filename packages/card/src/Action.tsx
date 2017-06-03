import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";
import {
    MetaProps as ButtonMetaProps,
} from "@react-mdc/button/lib/Button";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__action`;

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

// Button with compact as default
function CompactButton(props: React.HTMLProps<HTMLButtonElement> & ButtonMetaProps) {
    return React.createElement(Button, {
        compact: true,
        ...props,
    });
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLButtonElement> & ButtonMetaProps, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }
    
    protected getMetaPropNames() {
        return [
            ???
        ];
    }

    protected getChildComponent() {
        return
    CompactButton,
    PropMakerMetaComponent.simple(new PropMaker(), "Action"),
    [],
);
