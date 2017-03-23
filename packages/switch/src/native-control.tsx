import * as React from "react";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
    BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__native-control`;

export type MetaProps = {};
export type ChildProps = {
    className?: string,
};

/**
 * Native control component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        const className = CLASS_NAME;
        return {
            className,
        };
    }
};

// Input with type="checkbox" as default
function CheckboxInput(props: React.HTMLProps<HTMLInputElement>) {
    return (
        <input type="checkbox" {...props} />
    );
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLInputElement>, ChildProps, MetaProps>(
        CheckboxInput, Meta, [],
    );

export default component;
