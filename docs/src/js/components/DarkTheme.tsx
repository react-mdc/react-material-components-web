import * as React from "react";

import * as classNames from "classnames";

import Theme from "@react-mdc/theme";
import {
    ChildProps as ThemeChildProps,
    MetaProps,
} from "@react-mdc/theme/lib/Theme";

import * as styles from "./styles.scss";

class Meta extends Theme.Meta {
    public static defaultProps = {
        textColor: "primary",
        onColor: "dark",
        color: "dark",
    };

    protected renderClassName(childProps: ThemeChildProps) {
        return classNames(styles["app--theme-dark"], super.renderClassName(childProps));
    }
}

export default class DarkTheme extends Theme {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }
}
