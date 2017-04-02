import * as React from "react";

import { Button } from "@react-mdc/button";
import * as dialog from "@react-mdc/dialog";

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
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
