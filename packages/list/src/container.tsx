import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = BASE_CLASS_NAME;

export const propertyClassNames = {
    DENSE: `${CLASS_NAME}--dense`,
    TWO_LINE: `${CLASS_NAME}--two-line`,
    AVARTAR_LIST: `${CLASS_NAME}--avartar-list`,
};

export type MetaProps = {
    dense?: boolean,
    twoLine?: boolean,
    avartarList?: boolean,
};

export type ChildProps = {
    className?: string,
};

/**
 * List container component
 */
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    public static defaultProps = {
        dense: false,
        twoLine: false,
        avartarList: false,
    };

    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues() {
        return [{
            [propertyClassNames.DENSE]: this.props.dense,
            [propertyClassNames.TWO_LINE]: this.props.twoLine,
            [propertyClassNames.AVARTAR_LIST]: this.props.avartarList,
        }];
    }
}

export type Props = React.HTMLProps<HTMLUListElement> & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<React.HTMLProps<HTMLUListElement>, MetaProps, Props>(
    "ul",
    Meta,
    [
        "dense",
        "twoLine",
        "avartarList",
    ]) as DefaultComponent<React.HTMLProps<HTMLUListElement>, MetaProps>;

export default component;
