import * as React from "react";

import Typography from "@react-mdc/typography";

export default function Lib(props: React.HTMLProps<HTMLElement>) {
    return <Typography.Text.Meta textStyle="caption"><code {...props} /></Typography.Text.Meta>;
}
