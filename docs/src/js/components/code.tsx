import * as React from "react";

import * as classNames from "classnames";
import { default as CodeMirror, Props as CodeMirrorProps } from "./code-mirror";

import * as styles from "./styles.css";

type Props = CodeMirrorProps & {
    className?: string,
    options?: any,
    mode?: string,
    lineNumbers?: boolean,
    readOnly?: boolean,
    theme?: string,
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
        theme,
        ...props,
    } = p;

    className = classNames(styles.code, className);
    const mergedOptions: {
        [key: string]: any,
    } = {};
    mergedOptions.mode = ifNull<string>(mode, "jsx");
    mergedOptions.lineNumbers = ifNull<boolean>(lineNumbers, true);
    mergedOptions.readOnly = ifNull<boolean>(readOnly, true);
    mergedOptions.theme = ifNull<string>(theme, "dracula");
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
