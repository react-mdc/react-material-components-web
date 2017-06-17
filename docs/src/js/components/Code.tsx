import * as React from "react";

import * as classNames from "classnames";
import { default as CodeMirror, Props as CodeMirrorProps } from "./CodeMirror";

import * as styles from "./styles.scss";

type Props = CodeMirrorProps & {
    className?: string,
    options?: any,
    mode?: string,
    lineNumbers?: boolean,
    readOnly?: boolean,
};

function ifNull<T>(nullable: T | null | undefined, then: T): T {
    if (nullable == null) {
        return then;
    } else {
        return nullable;
    }
}

export default function Code(p: Props) {
    let {
        className,
        options,
        mode,
        lineNumbers,
        readOnly,
        ...props,
    } = p;

    className = classNames(styles.code, className);
    const mergedOptions: {
        [key: string]: any,
    } = {};
    mergedOptions.mode = ifNull<string>(mode, "jsx");
    mergedOptions.lineNumbers = ifNull<boolean>(lineNumbers, false);
    mergedOptions.readOnly = ifNull<boolean>(readOnly, true);
    options = {
        ...mergedOptions,
        ...options,
    };
    return (
        <div className={className}>
            <CodeMirror options={options} {...props} />
        </div>
    );
}
