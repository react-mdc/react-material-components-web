import * as React from "react";

import { BaseMetaProps, ChildProps, Props as TextProps } from "./text";
import Text from "./text";
import { TextStyle } from "./types";

export type Props = React.HTMLProps<HTMLElement> & ChildProps & BaseMetaProps;

function withTextStyle(props: Props, textStyle: TextStyle): TextProps {
    return {
        textStyle,
        ...props,
    };
}

function createShorcutComponent(textStyle: TextStyle): React.StatelessComponent<Props> {
    return (props: Props) => React.createElement(Text, withTextStyle(props, textStyle));
}

/* tslint:disable:variable-name */
export const Display4 = createShorcutComponent("display4");
export const Display3 = createShorcutComponent("display3");
export const Display2 = createShorcutComponent("display2");
export const Display1 = createShorcutComponent("display1");
export const Headline = createShorcutComponent("headline");
export const Title = createShorcutComponent("title");
export const Subheading2 = createShorcutComponent("subheading2");
export const Subheading1 = createShorcutComponent("subheading1");
export const Body2 = createShorcutComponent("body2");
export const Body1 = createShorcutComponent("body1");
export const Caption = createShorcutComponent("caption");
/* tslint:enable:variable-name */
