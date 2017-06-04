import * as React from "react";

import Card from "@react-mdc/card";
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

import * as Image1x1 from "app/images/1-1.jpg";
import * as Image16x9 from "app/images/16-9.jpg";

function DemoCard(props) {
    let {
    style,
  } = props;

    style = {
        ...style,
        marginTop: 16,
        marginBottom: 16,
    };

    return (<Card {...props} style={style} />);
}

function BasicDemo() {
    return (
        <div>
            <DemoCard style={{ maxWidth: 350 }}>
                <Card.Media
                    style={{
                        backgroundImage: `url(${Image16x9})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: 167,
                    }} />
                <Card.SupportingText>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor.
                </Card.SupportingText>
            </DemoCard>
            <DemoCard style={{ maxWidth: 350 }}>
                <Card.Primary>
                    <Card.Title>
                        Title
                    </Card.Title>
                    <Card.Subtitle>
                        Subhead
                    </Card.Subtitle>
                </Card.Primary>
                <Card.Media style={{
                    backgroundImage: `url(${Image16x9})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "12.313rem",
                }} />
                <Card.SupportingText>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor.
                </Card.SupportingText>
                <Card.Actions>
                    <Card.Action>
                        ACTION 1
                    </Card.Action>
                    <Card.Action>
                        ACTION 2
                    </Card.Action>
                </Card.Actions>
            </DemoCard>
            <DemoCard style={{
                backgroundImage: `url(${Image1x1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 350,
                maxWidth: 350,
            }} dark>
                <Card.Primary style={{
                    background: "rgba(0, 0, 0, 0.4)",
                }}>
                    <Card.Title>
                        Title goes here
                    </Card.Title>
                    <Card.Subtitle>
                        Subtitle here
                    </Card.Subtitle>
                </Card.Primary>
            </DemoCard>
            <DemoCard style={{
                maxWidth: 350,
            }}>
                <Card.HorizontalBlock>
                    <Card.Primary>
                        <Card.Title>
                            Title goes here
                        </Card.Title>
                        <Card.Subtitle>
                            Subtitle here
                        </Card.Subtitle>
                    </Card.Primary>
                    <Card.MediaItem src={Image1x1} />
                </Card.HorizontalBlock>
                <Card.Actions>
                    <Card.Action>
                        ACTION 1
                    </Card.Action>
                    <Card.Action>
                        ACTION 2
                    </Card.Action>
                </Card.Actions>
            </DemoCard>
            <DemoCard style={{
                maxWidth: 350,
            }}>
                <Card.HorizontalBlock>
                    <Card.MediaItem src={Image1x1} size={3} />
                    <Card.Actions vertical>
                        <Card.Action>
                            A 1
                        </Card.Action>
                        <Card.Action>
                            A 2
                        </Card.Action>
                    </Card.Actions>
                </Card.HorizontalBlock>
            </DemoCard>
        </div>
    );
}

export default function CardPage() {
    return (
        <PageContainer>
            <PageTitle>
                Card Component
            </PageTitle>
            <Body2>
                {/* tslint:disable:max-line-length */}
                <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-card"
                    target="_blank>">
                    {/* tslint:enable:max-line-length */}
                    MDC Card
                </a> Component
            </Body2>

            <Display1>Container</Display1>
            <Name>Card</Name>
            <Body2>
                Top-level container of card component.
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
                        <td>Render card with dark theme.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Horizontal Block</Display1>
            <Name>Card.HorizontalBlock</Name>
            <Body2>
                Horizontal block section component.
            </Body2>

            <Display1>Media Item</Display1>
            <Name>Card.MediaItem</Name>
            <Body2>
                Media item component.
            </Body2>

            <Display1>Media</Display1>
            <Name>Card.Media</Name>
            <Body2>
                Media section component.
            </Body2>

            <Display1>Supporting Text</Display1>
            <Name>Card.SupportingText</Name>
            <Body2>
                Supporting text section component.
            </Body2>

            <Display1>Actions</Display1>
            <Name>Card.Actions</Name>
            <Body2>
                Actions section component.
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
                        <td><code>vertical</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render actions vertically.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Action</Display1>
            <Name>Card.Action</Name>
            <Body2>
                Card action component.
            </Body2>

            <Display1>Primary</Display1>
            <Name>Card.Primary</Name>
            <Body2>
                Card primary text / title content block.
            </Body2>

            <Display1>Title</Display1>
            <Name>Card.Title</Name>
            <Body2>
                Card title block
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
                        <td><code>large</code></td>
                        <td><code>boolean</code></td>
                        <td />
                        <td>Render large title.</td>
                    </tr>
                </tbody>
            </Table>

            <Display1>Subtitle</Display1>
            <Name>Card.Subtitle</Name>
            <Body2>
                Card subtitle block
            </Body2>

            <Title>Usage</Title>
            <Code value={stripIgnored(BasicDemoCode)} />
            <Demo>
                <BasicDemo />
            </Demo>
        </PageContainer>
    );
}
