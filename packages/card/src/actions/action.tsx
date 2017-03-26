import * as React from "react";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";
import * as button from "@react-mdc/button/lib";
import { default as Button } from "@react-mdc/button/lib";

import {
    BASE_CLASS_NAME,
} from "../constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__action`;

export type MetaProps = {
};

export type ChildProps = {
    className?: string,
};

/**
 * Actions section action component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
    protected renderProps() {
        const className = CLASS_NAME;

        return {
            className,
        };
    }
}

// Button with compact as default
function CompactButton(props: React.HTMLProps<HTMLButtonElement> & button.ChildProps & button.MetaProps) {
    return React.createElement(Button, {
        compact: true,
        ...props,
    });
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLButtonElement> & button.ChildProps & button.MetaProps,
    ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLButtonElement> & button.ChildProps & button.MetaProps,
        ChildProps, MetaProps>(
        CompactButton, Meta, [],
    );

export default component;
