import * as React from "react";

import { Text } from "@react-mdc/typography";

export default function Lib(props: React.HTMLProps<HTMLElement>) {
    return <Text.Meta textStyle="caption"><code {...props} /></Text.Meta>;
}
