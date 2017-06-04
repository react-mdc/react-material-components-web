import * as React from "react";

import Typography from "@react-mdc/typography";

export default function Name(props: React.HTMLProps<HTMLElement>) {
    const {
        children,
        ...p,
    } = props;
    return (
        <Typography.Text.Meta textStyle="caption">
            <code {...p}>
                Export: {children}
            </code>
        </Typography.Text.Meta>
    );
}
