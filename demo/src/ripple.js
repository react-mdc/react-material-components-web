/* @flow */
import React from 'react';

import {Ripple} from '@react-mdc/ripple';
import {Elevation} from '@react-mdc/elevation';
import {
  Typography,
  Title,
  Subheading2
} from '@react-mdc/typography';

import {Pen} from './icon';

function Box (props: *): React.Element<*> {
  let {
    style
  } = props;

  style = {
    width: 350,
    height: 200,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  };

  return (
    <Elevation
      zSpace={2}
      {...props}
      style={style} />
  );
}

function Section (props: *): * {
  let {
    style
  } = props;

  style = {
    margin: 48
  };

  return (
    <section {...props} style={style} />
  );
}

export default class RippleExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Ripple Examples
        </Title>

        <Section>
          <Subheading2>
            Bounded
          </Subheading2>
          <Ripple wrap={Box}>
            Interact with me
          </Ripple>
        </Section>
        <Section>
          <Subheading2>
            Unbounded
          </Subheading2>
          <Ripple
            style={{
              width: 100,
              height: 100,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            unbounded>
            <Pen />
          </Ripple>
        </Section>
      </Typography>
    );
  }
}
