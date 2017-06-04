import * as React from "react";

import Button from "@react-mdc/button";
import Dialog from "@react-mdc/dialog";
import {
    Body2,
    Display1,
    Title,
} from "@react-mdc/typography/lib/shortcuts";

import Code from "app/js/components/Code";
import Name from "app/js/components/Name";
import PageContainer from "app/js/components/PageContainer";
import PageTitle from "app/js/components/PageTitle";
import {
    Demo,
} from "app/js/components/sections";
import Table from "app/js/components/Table";
import { stripIgnored } from "app/js/utils/code";

import * as BasicDemoCode from "raw-loader!./basic.example.tsx";

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
            <Dialog open={this.state.open}
                onAccept={this.handleAccept}
                onCancel={this.handleCancel}
                onOpen={this.handleOpen}
                onClose={this.handleClose}>
                <Dialog.Surface>
                    <Dialog.Header>
                        <Dialog.Header.Title>
                            Dialog Title
                        </Dialog.Header.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </Dialog.Body>
                    <Dialog.Footer>
                        <Dialog.Footer.Button type="cancel">
                            Decline
                        </Dialog.Footer.Button>
                        <Dialog.Footer.Button type="accept">
                            Accept
                        </Dialog.Footer.Button>
                    </Dialog.Footer>
                </Dialog.Surface>
                <Dialog.Backdrop />
            </Dialog>
        );
    }
}

export default function DialogPage() {
    return (
        <PageContainer>
            <PageTitle>
                Dialog Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Dialog
                </a> Component
            </Body2>

            <Display1>Container</Display1>
            <Name>Dialog</Name>
            <Body2>
                Container is top-level component of dialog.
                It contains top-level API such as event handler, open/close property.
            </Body2>

            <Title>Properties</Title>
            <Table>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>dark</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Enable dark mode.</td>
                    </tr>
                    <tr>
                        <td><code>open</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Open/Close dialog.</td>
                    </tr>
                    <tr>
                        <td><code>onAccept</code></td>
                        <td><code>(Container.Meta) => void</code></td>
                        <td />
                        <td>Acception event handler.</td>
                    </tr>
                    <tr>
                        <td><code>onOpen</code></td>
                        <td><code>(Container.Meta) => void</code></td>
                        <td />
                        <td>Opening event handler.</td>
                    </tr>
                    <tr>
                        <td><code>onCancel</code></td>
                        <td><code>(Container.Meta) => void</code></td>
                        <td />
                        <td>Cancellation event handler.</td>
                    </tr>
                    <tr>
                        <td><code>onClose</code></td>
                        <td><code>(Container.Meta) => void</code></td>
                        <td />
                        <td>Closing event handler.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>
                Backdrop
            </Display1>
            <Name>Dialog.Backdrop</Name>
            <Body2>Dialog backdrop component.</Body2>

            <Display1>
                Body
            </Display1>
            <Name>Dialog.Body</Name>
            <Body2>Dialog body container.</Body2>

            <Title>Properties</Title>
            <Table>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>scrollable</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Enable scroll.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>
                Header
            </Display1>
            <Name>Dialog.Header</Name>
            <Body2>Dialog header container.</Body2>

            <Display1>
                Header Title
            </Display1>
            <Name>Dialog.Header.Title</Name>
            <Body2>Dialog header title component.</Body2>

            <Display1>
                Footer
            </Display1>
            <Name>Dialog.Footer</Name>
            <Body2>Dialog footer container.</Body2>

            <Display1>
                Footer Button
            </Display1>
            <Name>Dialog.Button</Name>
            <Body2>Dialog footer button container.</Body2>

            <Title>Properties</Title>
            <Table>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>type</code></td>
                        <td><code>"accept" | "cancel"</code></td>
                        <td>&#10004;</td>
                        <td>Type of footer button.</td>
                    </tr>
                </tbody>
            </Table>

            <Title>Usage</Title>
            <Code value={stripIgnored(BasicDemoCode)} />
            <Demo>
                <BasicDemo />
            </Demo>
        </PageContainer>
    );
}
