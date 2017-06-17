import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import { MaterialIcon } from "app/js/components/Icon";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function CheckboxPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Typography
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <Typography>
                            <Typography.Display4>
                                Aa 가
                            </Typography.Display4>
                        </Typography>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Typography component is a React wrapper of mdc-typography component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/typography`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Title
                </Typography.Title>
                <Code value={`
<Typography>
    <Typography.Title>
        This is a Title
    </Typography.Title>
</Typography>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Typography>
                            <Typography.Title>
                                This is a Title
                            </Typography.Title>
                        </Typography>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Meta
                </Typography.Title>
                <Code value={`
<Typography>
    <Typography.Text.Meta textStyle="caption">
        <p>
            This is a caption paragraph.
        </p>
    </Typography.Text.Meta>
</Typography>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <Typography>
                            <Typography.Text.Meta textStyle="caption">
                                <p>
                                  This is a caption paragraph.
                                </p>
                            </Typography.Text.Meta>
                        </Typography>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Typography</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Typography</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of typography components.
                    Every typography texts should be included in this component.
                </Typography.Body2>

                <Typography.Title>Text</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Typography.Text</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Text component of typography.
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
                            <td><code>textStyle</code></td>
                            <td>String value of list at below</td>
                            <td>&#10004;</td>
                            <td>Style of text component.</td>
                        </tr>
                        <tr>
                            <td><code>adjustMargin</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>
                                Enable adjustment of component's margin.
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Typography.Subheading2>Text Styles</Typography.Subheading2>
                <Typography.Text.Meta textStyle="body2">
                    <ul>
                        <li><code>display4</code></li>
                        <li><code>display3</code></li>
                        <li><code>display2</code></li>
                        <li><code>display1</code></li>
                        <li><code>headline</code></li>
                        <li><code>title</code></li>
                        <li><code>subheading2</code></li>
                        <li><code>subheading1</code></li>
                        <li><code>body2</code></li>
                        <li><code>body1</code></li>
                        <li><code>caption</code></li>
                    </ul>
                </Typography.Text.Meta>

            <Typography.Title>Shortcuts</Typography.Title>
            <Typography.Subheading2>Name</Typography.Subheading2>
            <Name>Typography.Display4</Name>
            <Name>Typography.Display3</Name>
            <Name>Typography.Display2</Name>
            <Name>Typography.Display1</Name>
            <Name>Typography.Headline</Name>
            <Name>Typography.Title</Name>
            <Name>Typography.Subheading2</Name>
            <Name>Typography.Subheading1</Name>
            <Name>Typography.Body2</Name>
            <Name>Typography.Body1</Name>
            <Name>Typography.Caption</Name>
            <Typography.Subheading2>Description</Typography.Subheading2>
            <Typography.Body2>
                There are coresponding shortcut components for each text styles.
                Shorcuts don't have meta components. Use <code>Text.Meta</code>
                instead if you want a meta component.
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
                        <td><code>adjustMargin</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>
                            Enable adjustment of component's margin.
                        </td>
                    </tr>
                </tbody>
            </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
