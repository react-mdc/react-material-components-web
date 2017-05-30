import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    PREFIX: CLASS_NAME,
    DENSE: `${CLASS_NAME}--dense`,
    RAISED: `${CLASS_NAME}--raised`,
    COMPACT: `${CLASS_NAME}--compact`,
    PRIMARY: `${CLASS_NAME}--primary`,
    ACCENT: `${CLASS_NAME}--accent`,
};

export type MetaProps = {
    dense?: boolean,
    raised?: boolean,
    compact?: boolean,
    primary?: boolean,
    accent?: boolean,
};

export type ChildProps = {
    className?: string,
};

export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues(_childProps: ChildProps) {
        return [{
            [propertyClassNames.DENSE]: this.props.dense,
            [propertyClassNames.RAISED]: this.props.raised,
            [propertyClassNames.COMPACT]: this.props.compact,
            [propertyClassNames.PRIMARY]: this.props.primary,
            [propertyClassNames.ACCENT]: this.props.accent,
        }];
    }
}

export class Button extends DefaultComponentBase<React.HTMLProps<HTMLButtonElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "dense",
            "raised",
            "compact",
            "primary",
            "accent",
        ];
    }

    protected getChildComponent() {
        return "button";
    }
}

export default Button;
