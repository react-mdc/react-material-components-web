import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Button from "@react-mdc/button";
import Dialog from "@react-mdc/dialog";
import FormField from "@react-mdc/form-field";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

class SimpleDialog extends React.Component<{}, {}> {
    public state = {
        open: false,
    };

    public render() {
        return (
            <div>
                <Button raised onClick={this.handleOpen}>
                    Open Dialog
                </Button>
                <Dialog open={this.state.open}
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
            </div>
        );
    }

    private handleOpen = () => this.setState({ open: true });
    private handleClose = () => this.setState({ open: false });
}

export default function DialogPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Dialog
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <SimpleDialog />
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Dialog component is a React wrapper of mdc-dialog component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/dialog`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Dialog
                </Typography.Title>
                <Code value={`
class SimpleDialog extends React.Component<{}, {}> {
    public state = {
        open: false,
    };

    public render() {
        return (
            <div>
                <Button raised onClick={this.handleOpen}>
                    Open Dialog
                </Button>
                <Dialog open={this.state.open}
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
            </div>
        );
    }

    private handleOpen = () => this.setState({ open: true });
    private handleClose = () => this.setState({ open: false });
}
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <SimpleDialog />
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Dialog</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of dialog components.
                </Typography.Body2>
                <Typography.Subheading2>Properties</Typography.Subheading2>
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
                            <td>Render dark dialog.</td>
                        </tr>
                        <tr>
                            <td><code>open</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render open dialog.</td>
                        </tr>
                        <tr>
                            <td><code>onAccept</code></td>
                            <td><code>(meta) => void</code></td>
                            <td />
                            <td>Handler for accept event.</td>
                        </tr>
                        <tr>
                            <td><code>onOpen</code></td>
                            <td><code>(meta) => void</code></td>
                            <td />
                            <td>Handler for open event.</td>
                        </tr>
                        <tr>
                            <td><code>onCancel</code></td>
                            <td><code>(meta) => void</code></td>
                            <td />
                            <td>Handler for cancel event.</td>
                        </tr>
                        <tr>
                            <td><code>onClose</code></td>
                            <td><code>(meta) => void</code></td>
                            <td />
                            <td>Handler for close event.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Backdrop</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog.Backdrop</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Dialog backdrop component.
                </Typography.Body2>

                <Typography.Title>Body</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog.Body</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Dialog body section.
                </Typography.Body2>
                <Typography.Subheading2>Properties</Typography.Subheading2>
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
                            <td>Render scrollable long dialog body.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Surface</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog.Surface</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Dialog surface component.
                </Typography.Body2>

                <Typography.Title>Footer</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog.Footer</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Dialog footer section.
                </Typography.Body2>

                <Typography.Title>Footer Button</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog.Footer.Button</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Dialog footer button component.
                </Typography.Body2>
                <Typography.Subheading2>Properties</Typography.Subheading2>
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

                <Typography.Title>Header</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog.Header</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Dialog header section.
                </Typography.Body2>

                <Typography.Title>Header Title</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Dialog.Header.Title</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Dialog header title component.
                </Typography.Body2>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
