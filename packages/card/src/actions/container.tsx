import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__actions`;

export const propertyClassNames = {
    VERTICAL: `${CLASS_NAME}--vertical`,
};

export type MetaProps = {
    vertical?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * Actions section component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        vertical: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.VERTICAL]: this.props.vertical,
        }];
    }
}

export type Props = React.HTMLProps<HTMLElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLElement>, MetaProps, Props>(
    "section",
    Meta,
    [
        "vertical",
    ]) as DefaultComponent<React.HTMLProps<HTMLElement>, MetaProps>;

export default component;
