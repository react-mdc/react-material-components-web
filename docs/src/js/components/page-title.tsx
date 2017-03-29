import * as React from "react";

import { Themed } from "@react-mdc/theme";
import { Display2, Typography } from "@react-mdc/typography";

import { Children } from "app/js/common/types";

export default function PageTitle(props: { children?: Children<any>, [key: string]: any }) {
    let {
        children,
        ...p,
    } = props;
    return (
        <Typography.Meta>
            <Themed color="primary" {...p}>
                <Display2>
                    {children}
                </Display2>
            </Themed>
        </Typography.Meta>
    );
}
