import * as React from "react";

import * as classNames from "classnames";

import {
    createDefaultComponent,
    default as BaseMeta,
    DefaultComponent,
} from "@react-mdc/base/lib/meta";

import {
  BASE_CLASS_NAME,
} from "./constants";

export const CLASS_NAME = `${BASE_CLASS_NAME}__media-item`;

export type Size = 1.5 | 2 | 3;

export function classNameForSize (size: Size): string {
  switch (size) {
    case 1.5:
      return `${CLASS_NAME}--1dot5x`;
    case 2:
      return `${CLASS_NAME}--2x`;
    case 3:
      return `${CLASS_NAME}--3x`;
    default:
      throw new TypeError("Invalid size type");
  }
}

export type MetaProps = {
    size?: Size,
};

export type ChildProps = {
    className?: string,
};

/**
 * Media item component
 */
export class Meta extends BaseMeta<ChildProps, MetaProps, {}> {
  protected renderProps () {
    let {
      size,
    } = this.props;

    let classes: string[] = [];
    if (size != null) {
      classes.push(classNameForSize(size));
    }

    const className = classNames(
      CLASS_NAME,
      classes,
    );

    return {
      className,
    };
  }
}

// Maybe related to this
// https://github.com/Microsoft/TypeScript/issues/5938
const component: DefaultComponent<React.HTMLProps<HTMLImageElement>, ChildProps, MetaProps> =
    createDefaultComponent<React.HTMLProps<HTMLImageElement>, ChildProps, MetaProps>(
        "img", Meta, [],
    );

export default component;
