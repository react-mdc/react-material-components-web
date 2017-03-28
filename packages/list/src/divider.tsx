import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}-divider`;

export const propertyClassNames = {
    INSET: `${CLASS_NAME}--inset`,
};

export type MetaProps = {
    inset: boolean,
};

export type ChildProps = {
    className?: string,
};
/**
 * List divider component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        inset: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.INSET]: this.props.inset,
        }];
    }
}

// li with role="separator" as default
function SeparatorLi(props: React.HTMLProps<HTMLLIElement>) {
    return <li role="separator" {...props} />;
}

export type Props = React.HTMLProps<HTMLLIElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLLIElement>, MetaProps, Props>(
    SeparatorLi,
    Meta,
    [
        "inset",
    ]) as DefaultComponent<React.HTMLProps<HTMLLIElement>, MetaProps>;

export default component;
