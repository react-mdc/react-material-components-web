/* @flow */
import React from 'react';

import {Fab, Icon} from '@react-mdc/fab';
import {Title, Typography} from '@react-mdc/typography';

import {Pen, MaterialIcon} from 'app/js/components/icon';

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
            <Fab plain><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
          </div>
          <div style={{margin: 16}}>
            <Fab plain mini><Icon><MaterialIcon>face</MaterialIcon></Icon></Fab>
          </div>
        </fieldset>
      </Typography>
    );
  }
}
