import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__title`;

export const propertyClassNames = {
    LARGE: `${CLASS_NAME}--large`,
};

export type MetaProps = {
    large?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Primary section title component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        large: false,
    };

    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues(_, props: MetaProps) {
        return [{
            [propertyClassNames.LARGE]: this.props.large,
        }];
    }
}

export default class Actions extends DefaultComponentBase<React.HTMLProps<HTMLHeadingElement>, MetaProps, {}> {
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
    "h1",
    PropMakerMetaComponent.simple(new PropMaker(), "Title"),
    [
        "large",
    ],
);
