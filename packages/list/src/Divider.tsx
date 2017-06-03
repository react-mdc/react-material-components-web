import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}-divider`;

export const propertyClassNames = {
    INSET: `${CLASS_NAME}--inset`,
};

export type MetaProps = {
    inset?: boolean,
};

export type ChildProps = {
    className?: string,
};
/**
 * List divider component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        return [{
            [propertyClassNames.INSET]: this.props.inset,
        }];
    }
}

// li with role="separator" as default
function SeparatorLi(props: React.HTMLProps<HTMLLIElement>) {
    return <li role="separator" {...props} />;
}

export default class Divider extends DefaultComponentBase<React.HTMLProps<HTMLLIElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "inset",
        ];
    }

    protected getChildComponent(): React.SFC<React.HTMLProps<HTMLLIElement>> {
        return SeparatorLi;
    }
}
