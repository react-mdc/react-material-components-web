import * as React from "react";

import Typography from "@react-mdc/typography";
import {
    Body1,
    Body2,
    Caption,
    Display1,
    Display2,
    Display3,
    Display4,
    Headline,
    Subheading1,
    Subheading2,
    Title,
} from "@react-mdc/typography/lib/shortcuts";

export default class Example extends React.Component<{}, {}> {
    public render() {
        return (
            <Typography>
                <Display4>
                    Display 4
                </Display4>
                <Display3>
                    Display 3
                </Display3>
                <Display2>
                    Display 2
                </Display2>
                <Display1>
                    Display 1
                </Display1>
                <Headline>
                    Headline
                </Headline>
                <Title>
                    Title
                </Title>
                <Subheading2>
                    Subheading 2
                </Subheading2>
                <Subheading1>
                    Subheading 1
                </Subheading1>
                <Body2>
                    Body 2
                </Body2>
                <Body1>
                    Body 1
                </Body1>
                <Caption>
                    Caption
                </Caption>
            </Typography>
        );
    }
}
