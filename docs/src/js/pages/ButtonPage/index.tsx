import * as React from "react";

import Button from "@react-mdc/button";
import Ripple from "@react-mdc/ripple";
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

function ButtonDemo(props) {
    let { style } = props;
    style = {
        ...style,
        display: "inline-block",
        padding: 16,
    };
    return (
        <div {...props} style={style} />
    );
}

function RippleButton(props) {
    return (
        <Ripple.Meta>
            <Button {...props} />
        </Ripple.Meta>
    );
}

function BasicDemo() {
    return (
        <div>
            <FieldSet>
                <legend>Buttons</legend>
                <ButtonDemo>
                    <Button>DEFAULT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button raised>RAISED</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button dense>DENSE DEFAULT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button dense raised>DENSE RAISED</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button compact>COMPACT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button compact raised>COMPACT RAISED</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button primary>DEFAULT WITH PRIMARY</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button raised primary>RAISED WITH PRIMARY</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button accent>DEFAULT WITH ACCENT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button raised accent>RAISED WITH ACCENT</Button>
                </ButtonDemo>
            </FieldSet>
            <FieldSet>
                <legend>Disabled Buttons</legend>
                <ButtonDemo>
                    <Button disabled>DEFAULT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled raised>RAISED</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled dense>DENSE DEFAULT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled dense raised>DENSE RAISED</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled compact>COMPACT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled compact raised>COMPACT RAISED</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled primary>DEFAULT WITH PRIMARY</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled raised primary>RAISED WITH PRIMARY</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled accent>DEFAULT WITH ACCENT</Button>
                </ButtonDemo>
                <ButtonDemo>
                    <Button disabled raised accent>RAISED WITH ACCENT</Button>
                </ButtonDemo>
            </FieldSet>
            <FieldSet>
                <legend>Ripple Buttons</legend>
                <ButtonDemo>
                    <RippleButton>DEFAULT</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton raised>RAISED</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton dense>DENSE DEFAULT</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton dense raised>DENSE RAISED</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton compact>COMPACT</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton compact raised>COMPACT RAISED</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton primary>DEFAULT WITH PRIMARY</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton raised primary>RAISED WITH PRIMARY</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton accent>DEFAULT WITH ACCENT</RippleButton>
                </ButtonDemo>
                <ButtonDemo>
                    <RippleButton raised accent>RAISED WITH ACCENT</RippleButton>
                </ButtonDemo>
            </FieldSet>
        </div>
    );
}

export default function ButtonPage() {
    return (
        <PageContainer>
            <PageTitle>
                Button Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Button
                </a> Component
            </Body2>

            <Display1>Button</Display1>
            <Name>Button</Name>
            <Body2>
                Material button component.
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
                        <td><code>dense</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render dense button.</td>
                    </tr>
                    <tr>
                        <td><code>raise</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render raised button.</td>
                    </tr>
                    <tr>
                        <td><code>compact</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render compact button.</td>
                    </tr>
                    <tr>
                        <td><code>primary</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render button with primary color.</td>
                    </tr>
                    <tr>
                        <td><code>accent</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render button with accent color.</td>
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
