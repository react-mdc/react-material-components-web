import * as React from "react";

import {
    Text,
    Typography,
} from "@react-mdc/typography";

export default class Example extends React.Component<{}, {}> {
    public render() {
        return (
            <Typography>
                <Text textStyle="title">
                    Title
                </Text>
                <Text textStyle="body2">
                    Body Two
                </Text>
                <Text textStyle="display4" adjustMargin>
                    Adjust margin
                </Text>
            </Typography>
        );
    }
}
