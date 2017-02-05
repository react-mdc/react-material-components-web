/* @flow */
import React from 'react';

import {Fab, Icon} from 'react-mdcw/lib/fab';
import {Title, Typography} from 'react-mdcw/lib/typography';

import {Pen} from './icon';

export default class FabExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Button Examples
        </Title>
        <fieldset>
          <legend>Normal Fabs</legend>
          <div style={{margin: 16}}>
            <Fab><Icon><Pen /></Icon></Fab>
          </div>
          <div style={{margin: 16}}>
            <Fab mini><Icon><Pen /></Icon></Fab>
          </div>
          <div style={{margin: 16}}>
            <Fab plain><Icon><Pen /></Icon></Fab>
          </div>
          <div style={{margin: 16}}>
            <Fab plain mini><Icon><Pen /></Icon></Fab>
          </div>
        </fieldset>
      </Typography>
    );
  }
}
