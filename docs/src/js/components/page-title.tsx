import * as React from "react";

import { Themed } from "@react-mdc/theme";
import { Display1, Typography } from "@react-mdc/typography";

import { Children } from "app/js/common/types";

export default function PageTitle(props: { children?: Children<any>, [key: string]: any }) {
    let {
        children,
        ...p,
    } = props;
    return (
        <Typography.Meta>
            <Themed color="primary" {...p }>
                <Display1>
                    {children}
                </Display1>
            </Themed>
        </Typography.Meta>
    );
}
