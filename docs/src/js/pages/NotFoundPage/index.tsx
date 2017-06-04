import * as React from "react";
import { Link } from "react-router";

import Button from "@react-mdc/button";
import Card from "@react-mdc/card";

import { CenterFullSize } from "app/js/components/FullSize";

export default class NotFound extends React.Component<{}, {}> {
    public render() {
        return (
            <CenterFullSize>
                <Card>
                    <Card.Primary
                        style={{
                            borderBottom: 1,
                        }}>
                        <Card.Title large>
                            Sorry, but nothing in here
                        </Card.Title>
                        <Card.Subtitle>
                            Please check your URL and try again.
                        </Card.Subtitle>
                    </Card.Primary>
                    <Card.Actions>
                        <Card.Action.Meta>
                            <Button.Meta compact>
                                <Link to="/">
                                    Go to main
                                </Link>
                            </Button.Meta>
                        </Card.Action.Meta>
                    </Card.Actions>
                </Card>
            </CenterFullSize>
        );
    }
}
