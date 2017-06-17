import * as React from "react";

import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import * as classNames from "classnames";

import * as styles from "./styles.scss";

type ChildProps = {
    className?: string,
};

type MetaProps = {
};

class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderClassName(childProps: ChildProps) {
        return classNames(styles["responsive"], super.renderClassName(childProps));
    }
}

export default class Responsive extends DefaultComponentBase<React.HTMLProps<HTMLDivElement>, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaPropNames() {
        return [];
    }

    protected getMetaComponent() {
        return Meta;
    }

    protected getChildComponent() {
        return "div";
    }
}
