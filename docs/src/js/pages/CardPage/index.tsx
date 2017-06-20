import * as React from "react";
import { Link } from "react-router";

import * as classNames from "classnames";

import Card from "@react-mdc/card";
import Typography from "@react-mdc/typography";

import Code from "app/js/components/Code";
import ComponentPage from "app/js/components/ComponentPage";
import Name from "app/js/components/Name";
import ShowCase from "app/js/components/ShowCase";
import Table from "app/js/components/Table";

import * as Image1x1 from "app/images/1-1.jpg";
import * as Image16x9 from "app/images/16-9.jpg";

export default function CardPage() {
    return (
        <ComponentPage>
            <ComponentPage.Content>
                <Typography.Display1 adjustMargin>
                    Card
                </Typography.Display1>
                <ShowCase large>
                    <ShowCase.Item>
                        <Card>
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
                        </Card>
                    </ShowCase.Item>
                </ShowCase>
                <Typography.Body2>
                    Button component is a React wrapper of mdc-card component.
                </Typography.Body2>

                <Typography.Headline>
                    Installation
                </Typography.Headline>
                <Code value={`$ npm install --save @react-mdc/card`} mode="shell" />

                <Typography.Headline>
                    Usage
                </Typography.Headline>

                <Typography.Title>
                    Simple Card
                </Typography.Title>
                <Code value={`
<Card>
    <Card.Media
        style={{
            backgroundImage: \`url($\{Image16x9\})\`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: 167,
        }} />
    <Card.SupportingText>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor.
    </Card.SupportingText>
</Card>
`} />
                <ShowCase>
                    <ShowCase.Item style={{ maxWidth: 350 }}>
                        <Card>
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
                        </Card>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Title>
                    Media Card
                </Typography.Title>
                <Code value={`
<Card>
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
</Card>
`} />
                <ShowCase>
                    <ShowCase.Item style={{ maxWidth: 350 }}>
                        <Card>
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
                        </Card>
                    </ShowCase.Item>
                </ShowCase>

                <Typography.Headline>Components</Typography.Headline>

                <Typography.Title>Card</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Top-level container of card components.
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
                            <td>Render dark card.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Actions</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.Actions</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    A container of action components.
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
                            <td><code>vertical</code></td>
                            <td><code>boolean</code></td>
                            <td />
                            <td>Render vertical actions section.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Action</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.Action</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Card action button
                </Typography.Body2>

                <Typography.Title>Horizontal Block</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.HorizontalBlock</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Horizontal block component.
                </Typography.Body2>

                <Typography.Title>Media</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.Media</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Media section component.
                </Typography.Body2>

                <Typography.Title>Media Item</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.MediaItem</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Media item component.
                </Typography.Body2>
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
                            <td><code>size</code></td>
                            <td><code>1.5 | 2 | 3</code></td>
                            <td />
                            <td>Size of media item.</td>
                        </tr>
                    </tbody>
                </Table>

                <Typography.Title>Primary</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.Primary</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Primary section component.
                </Typography.Body2>

                <Typography.Title>Subtitle</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.Subtitle</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Subtitle of card.
                </Typography.Body2>

                <Typography.Title>Supporting Text</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.SupportingText</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Supporting text section.
                </Typography.Body2>

                <Typography.Title>Title</Typography.Title>
                <Typography.Subheading2>Name</Typography.Subheading2>
                <Name>Card.Title</Name>
                <Typography.Subheading2>Description</Typography.Subheading2>
                <Typography.Body2>
                    Title of card.
                </Typography.Body2>
            </ComponentPage.Content>
        </ComponentPage>
    );
}
