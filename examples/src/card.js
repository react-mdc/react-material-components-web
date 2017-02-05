/* @flow */
import React from 'react';

import {
  Card,
  Media,
  MediaItem,
  HorizontalBlock,
  SupportingText,
  actions,
  primary
} from 'react-mdcw/lib/card';
import {Title, Typography} from 'react-mdcw/lib/typography';

import Image16x9 from '../images/16-9.jpg';
import Image1x1 from '../images/1-1.jpg';

function DemoCard (props: *): React.Element<*> {
  let {
    style
  } = props;

  style = {
    ...style,
    marginTop: 16,
    marginBottom: 16
  };

  return (<Card {...props} style={style} />);
}

export default class ElevationExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Card Examples
        </Title>
        <DemoCard style={{maxWidth: 350}}>
          <Media
            style={{
              backgroundImage: `url(${Image16x9})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: 167
            }} />
          <SupportingText>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor.
          </SupportingText>
        </DemoCard>
        <DemoCard style={{maxWidth: 350}}>
          <primary.Primary>
            <primary.Title>
              Title
            </primary.Title>
            <primary.Subtitle>
              Subhead
            </primary.Subtitle>
          </primary.Primary>
          <Media
            style={{
              backgroundImage: `url(${Image16x9})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '12.313rem'
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
        <DemoCard
          style={{
            backgroundImage: `url(${Image1x1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: 350,
            maxWidth: 350
          }}
          dark>
          <primary.Primary
            style={{
              background: 'rgba(0, 0, 0, 0.4)'
            }}>
            <primary.Title>
              Title goes here
            </primary.Title>
            <primary.Subtitle>
              Subtitle here
            </primary.Subtitle>
          </primary.Primary>
        </DemoCard>
        <DemoCard
          style={{
            maxWidth: 350
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
        <DemoCard
          style={{
            maxWidth: 350
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
      </Typography>
    );
  }
}
