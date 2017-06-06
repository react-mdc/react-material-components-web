import * as React from "react";

import Code from "./Code";

export default function Name(props: React.HTMLProps<HTMLElement>) {
    const {
        children,
        ...p,
    } = props;
    const value = React.Children.toArray(children).map((x) => x.toString()).join("");
    return (
        <Code value={`<${value} />`} />
    );
}
