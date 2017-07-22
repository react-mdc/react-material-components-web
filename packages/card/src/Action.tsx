import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";
import Button from "@react-mdc/button";
import {
    MetaProps as ButtonMetaProps,
} from "@react-mdc/button/lib/Button";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__action`;

export type MetaProps = {
    className?: string,
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

export default class Action
    extends DefaultComponentBase<React.HTMLProps<HTMLButtonElement> & ButtonMetaProps, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "className",
        ];
    }

    protected getChildComponent(): React.SFC<React.HTMLProps<HTMLButtonElement> & ButtonMetaProps> {
        return CompactButton;
    }
}
