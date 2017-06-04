import * as React from "react";

import Typography from "@react-mdc/typography";

export default class Example extends React.Component<{}, {}> {
    public render() {
        return (
            <Typography>
                <Typography.Text textStyle="title">
                    Title
                </Typography.Text>
                <Typography.Text textStyle="body2">
                    Body Two
                </Typography.Text>
                <Typography.Text textStyle="display4" adjustMargin>
                    Adjust margin
                </Typography.Text>
            </Typography>
        );
    }
}
