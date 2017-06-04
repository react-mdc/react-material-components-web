import * as React from "react";

import FormField from "@react-mdc/form-field";
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

function FieldSet(props) {
    let { style } = props;
    style = {
        ...style,
        margin: 16,
    };
    return (
        <fieldset {...props} style={style} />
    );
}

function BasicDemo() {
    return (
        <div>
            <FieldSet>
                <legend>Form Field</legend>
                <FormField>
                    <input type="checkbox" id="input" />
                    <label htmlFor="input">Input Label</label>
                </FormField>
            </FieldSet>
            <FieldSet>
                <legend>Form Field Align End</legend>
                <FormField alignEnd>
                    <input type="checkbox" id="input-end" />
                    <label htmlFor="input-end">Input Label</label>
                </FormField>
            </FieldSet>
        </div>
    );
}

export default function FormFieldPage() {
    return (
        <PageContainer>
            <PageTitle>
                Form Field Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-form-field"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Form Field
                </a> Component
            </Body2>

            <Display1>Form Field</Display1>
            <Name>FormField</Name>
            <Body2>
                Material form field component.
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
                        <td><code>alignEnd</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Align children to end.</td>
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
