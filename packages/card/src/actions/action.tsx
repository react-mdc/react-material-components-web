import * as React from "react";

import {
    createDefaultComponent,
    DefaultComponent,
    MetaAdapter,
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
export class Meta extends MetaAdapter<ChildProps, MetaProps, {}> {
    protected getBaseClassName() {
        return CLASS_NAME;
    }
}

// Button with compact as default
function CompactButton(props: button.Props) {
    return React.createElement(Button, {
        compact: true,
        ...props,
    });
}

export type Props = button.Props & MetaProps;

// TypeScript Bug
// https://github.com/Microsoft/TypeScript/issues/5938
const component = createDefaultComponent<button.Props, MetaProps, Props>(
    CompactButton,
    Meta, []) as DefaultComponent<React.HTMLProps<HTMLButtonElement> & button.ChildProps, MetaProps>;

export default component;
