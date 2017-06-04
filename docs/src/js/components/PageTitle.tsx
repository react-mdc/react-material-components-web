import * as React from "react";

import Theme from "@react-mdc/theme";
import Typography from "@react-mdc/typography";

export default function PageTitle(props: { children?: React.ReactChild, [key: string]: any }) {
    const {
        children,
        ...p,
    } = props;
    return (
        <Typography.Meta>
            <Theme color="primary" {...p}>
                <Typography.Display2>
                    {children}
                </Typography.Display2>
            </Theme>
        </Typography.Meta>
    );
}
