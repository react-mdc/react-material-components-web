import {
    ClassNamePropMakerAdapter,
    createDefaultComponent,
    DefaultComponent,
    PropMakerMetaComponent,
} from "@react-mdc/base";

import {
    default as Button,
    MetaProps as ButtonMetaProps,
} from "@react-mdc/button";

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
export class PropMaker extends ClassNamePropMakerAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }

    protected getClassValues(_c, props: MetaProps) {
        return [{
            [propertyClassNames.TYPE_ACCEPT]: props.type === "accept",
            [propertyClassNames.TYPE_CANCEL]: props.type === "cancel",
        }];
    }
}

export default createDefaultComponent<React.HTMLProps<HTMLButtonElement> & ButtonMetaProps, MetaProps>(
    Button,
    PropMakerMetaComponent.simple(new PropMaker(), "Button"),
    [],
);
