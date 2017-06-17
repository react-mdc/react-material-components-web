import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import FAB from "@react-mdc/fab";
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
                    Checkbox
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <FAB>
                            <FAB.Icon>
                                <MaterialIcon>edit</MaterialIcon>
                            </FAB.Icon>
                        </FAB>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    FAB component is a React wrapper of mdc-fab (Float Action Button) component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/fab`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple FAB
                </Typography.Title>
                <Code value={`
<FAB>
    <FAB.Icon>
        <MaterialIcon>add</MaterialIcon>
    </FAB.Icon>
</FAB>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <FAB>
                            <FAB.Icon>
                                <MaterialIcon>add</MaterialIcon>
                            </FAB.Icon>
                        </FAB>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>FAB</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>FAB</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of FAB components.
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
                            <td><code>mini</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render mini FAB.</td>
                        </tr>
                        <tr>
                            <td><code>plain</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render plain FAB.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Icon</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>FAB.Icon</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    FAB icon component.
                </Typography.Body2>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
