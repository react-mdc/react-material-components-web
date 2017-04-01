import * as React from "react";

import { Button } from "@react-mdc/button";
import * as dialog from "@react-mdc/dialog";
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
    Text,
    Title,
    Typography,
} from "@react-mdc/typography";

import API from "app/js/api";
import Code from "app/js/components/code";
import PageContainer from "app/js/components/page-container";
import PageTitle from "app/js/components/page-title";
import {
    Demo,
} from "app/js/components/section";
import { stripIgnored } from "app/js/utils/code";

class BasicDemo extends React.Component<{}, {}> {
    public state: {
        open: boolean,
    } = { open: false };

    public render() {
        return (
            <div>
                <Button raised primary onClick={this.handleButtonClick}>
                    Open Dialog
                </Button>
                {this.renderDialog()}
            </div>
        );
    }

    private handleButtonClick = () => {
        this.setOpen(true);
    }

    private handleAccept = () => {
        // tslint:disable:no-console
        console.log("Accept");
        // tslint:enable:no-console
    }

    private handleCancel = () => {
        // tslint:disable:no-console
        console.log("Decline");
        // tslint:enable:no-console
    }

    private handleOpen = () => {
        this.setOpen(true);
    }

    private handleClose = () => {
        this.setOpen(false);
    }

    private setOpen(open: boolean) {
        this.setState({ open });
    }

    private renderDialog() {
        return (
            <dialog.Container open={this.state.open}
                onAccept={this.handleAccept}
                onCancel={this.handleCancel}
                onOpen={this.handleOpen}
                onClose={this.handleClose}>
                <dialog.Surface>
                    <dialog.header.Container>
                        <dialog.header.Title>
                            Title
                        </dialog.header.Title>
                    </dialog.header.Container>
                    <dialog.Body>
                        Body
                    </dialog.Body>
                    <dialog.footer.Container>
                        <dialog.footer.Button type="cancel">
                            Decline
                        </dialog.footer.Button>
                        <dialog.footer.Button type="accept">
                            Accept
                        </dialog.footer.Button>
                    </dialog.footer.Container>
                </dialog.Surface>
                <dialog.Backdrop />
            </dialog.Container>
        );
    }
}

export default function () {
    return (
        <PageContainer>
            <PageTitle>
                Dialog Component
            </PageTitle>

            <Display1>Basic Usage</Display1>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Dialog
                </a> Component
            </Body2>
            <Demo>
                <BasicDemo />
            </Demo>
        </PageContainer>
    );
}
