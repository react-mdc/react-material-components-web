import * as React from "react";

import {
    actions,
    Card,
    HorizontalBlock,
    Media,
    MediaItem,
    primary,
    SupportingText,
} from "@react-mdc/card";

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
                <Media
                    style={{
                        backgroundImage: `url(${Image16x9})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: 167,
                    }} />
                <SupportingText>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor.
                </SupportingText>
            </DemoCard>
            <DemoCard style={{ maxWidth: 350 }}>
                <primary.Primary>
                    <primary.Title>
                        Title
                    </primary.Title>
                    <primary.Subtitle>
                        Subhead
                    </primary.Subtitle>
                </primary.Primary>
                <Media style={{
                    backgroundImage: `url(${Image16x9})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "12.313rem",
                }} />
                <SupportingText>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor.
                </SupportingText>
                <actions.Actions>
                    <actions.Action>
                        ACTION 1
                    </actions.Action>
                    <actions.Action>
                        ACTION 2
                    </actions.Action>
                </actions.Actions>
            </DemoCard>
            <DemoCard style={{
                backgroundImage: `url(${Image1x1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 350,
                maxWidth: 350,
            }} dark>
                <primary.Primary style={{
                    background: "rgba(0, 0, 0, 0.4)",
                }}>
                    <primary.Title>
                        Title goes here
                    </primary.Title>
                    <primary.Subtitle>
                        Subtitle here
                    </primary.Subtitle>
                </primary.Primary>
            </DemoCard>
            <DemoCard style={{
                maxWidth: 350,
            }}>
                <HorizontalBlock>
                    <primary.Primary>
                        <primary.Title>
                            Title goes here
                        </primary.Title>
                        <primary.Subtitle>
                            Subtitle here
                        </primary.Subtitle>
                    </primary.Primary>
                    <MediaItem src={Image1x1} />
                </HorizontalBlock>
                <actions.Actions>
                    <actions.Action>
                        ACTION 1
                    </actions.Action>
                    <actions.Action>
                        ACTION 2
                    </actions.Action>
                </actions.Actions>
            </DemoCard>
            <DemoCard style={{
                maxWidth: 350,
            }}>
                <HorizontalBlock>
                    <MediaItem src={Image1x1} size={3} />
                    <actions.Actions vertical>
                        <actions.Action>
                            A 1
                        </actions.Action>
                        <actions.Action>
                            A 2
                        </actions.Action>
                    </actions.Actions>
                </HorizontalBlock>
            </DemoCard>
        </div>
    );
}
