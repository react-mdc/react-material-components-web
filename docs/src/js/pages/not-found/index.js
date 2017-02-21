/* @flow */
import React from 'react';
import {Link} from 'react-router';

import {
  Card,
  actions,
  primary
} from '@react-mdc/card';
import {Button} from '@react-mdc/button';

import {CenterFullSize} from '../../components/full-size';

export default class NotFound extends React.Component {
  render (): React.Element<*> {
    return (
      <CenterFullSize>
        <Card>
          <primary.Primary
            style={{
              borderBottom: 1
            }}>
            <primary.Title large>
              Sorry, but nothing in here
            </primary.Title>
            <primary.Subtitle>
              Please check your URL and try again.
            </primary.Subtitle>
          </primary.Primary>
          <actions.Actions>
            <actions.Action wrap={<Button wrap={Link} />} compact to="/">
              Go to main
            </actions.Action>
          </actions.Actions>
        </Card>
      </CenterFullSize>
    );
  }
}
