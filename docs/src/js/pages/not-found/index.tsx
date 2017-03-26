import * as React from "react";
import { Link } from "react-router";

import { Button } from "@react-mdc/button";
import {
    actions,
    Card,
    primary
} from "@react-mdc/card";

import { CenterFullSize } from "../../components/full-size";

export default class NotFound extends React.Component<{}, {}> {
    public render() {
        return (
            <CenterFullSize>
                <Card>
                    <primary.Primary
                        style={{
                            borderBottom: 1
                        }}>
                        <primary.Title large>
                            Sorry, but nothing in here
                        </primary.Title>
                        <primary.Subtitle>
                            Please check your URL and try again.
                        </primary.Subtitle>
                    </primary.Primary>
                    <actions.Actions>
                        <actions.Action.Meta>
                            <Button.Meta compact>
                                <Link to="/">
                                    Go to main
                                </Link>
                            </Button.Meta>
                        </actions.Action.Meta>
                    </actions.Actions>
                </Card>
            </CenterFullSize>
        );
    }
}
