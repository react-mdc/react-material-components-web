import {
    ClassNameMetaBase,
    DefaultComponentBase,
} from "@react-mdc/base";

import MDCButton from "@react-mdc/button";
import { MetaProps as MDCButtonMetaProps } from "@react-mdc/button/lib/Button";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__button`;

export type MetaProps = {
    type: "accept" | "cancel",
};

export type ChildProps = {
    className?: string,
};

export const propertyClassNames = {
    TYPE_ACCEPT: `${CLASS_NAME}--accept`,
    TYPE_CANCEL: `${CLASS_NAME}--cancel`,
};

/**
 * Button component
 */
export class Meta extends ClassNameMetaBase<ChildProps, MetaProps, {}> {
    protected renderBaseClassName() {
        return CLASS_NAME;
    }

    protected renderClassValues() {
        return [{
            [propertyClassNames.TYPE_ACCEPT]: this.props.type === "accept",
            [propertyClassNames.TYPE_CANCEL]: this.props.type === "cancel",
        }];
    }
}

export default class Button
    extends DefaultComponentBase<React.HTMLProps<HTMLButtonElement> & MDCButtonMetaProps, MetaProps, {}> {
    public static Meta = Meta;

    protected getMetaComponent() {
        return Meta;
    }

    protected getMetaPropNames() {
        return [
            "type",
        ];
    }

    protected getChildComponent() {
        return MDCButton;
    }
}
