import * as React from "react";

import Card from "@react-mdc/card";

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
