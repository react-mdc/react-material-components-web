import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Checkbox from "@react-mdc/checkbox";
import FormField from "@react-mdc/form-field";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

export default function FormFieldPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Form Field
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <FormField>
                            <Checkbox.Default inputId="showcase-checkbox" />
                            <label htmlFor="showcase-checkbox">
                                FormField Demo
                            </label>
                        </FormField>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    FormField component is a React wrapper of mdc-form-field component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/form-field`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    FormField
                </Typography.Title>
                <Code value={`
<FormField>
    <input type="checkbox" id="form-field-usage-checkbox" />
    <label htmlFor="form-field-usage-checkbox">
        FormField Demo
    </label>
</FormField>
`} />
                <ShowCase>
                    <ShowCase.Item>
                        <FormField>
                            <input type="checkbox" id="form-field-usage-checkbox" />
                            <label htmlFor="form-field-usage-checkbox">
                                FormField Demo
                            </label>
                        </FormField>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>FormField</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>FormField</Name>
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
                            <td><code>alignEnd</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Align contents to end.</td>
                        </tr>
                    </tbody>
                </Table>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
