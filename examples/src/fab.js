/* @flow */
import React from 'react';

import {Fab, Icon} from 'react-mdcw/lib/fab';
import {Title, Typography} from 'react-mdcw/lib/typography';

function PenIcon (_props: any): React.Element<*> {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  );
}

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
            <Fab><Icon><PenIcon /></Icon></Fab>
          </div>
          <div style={{margin: 16}}>
            <Fab mini><Icon><PenIcon /></Icon></Fab>
          </div>
          <div style={{margin: 16}}>
            <Fab plain><Icon><PenIcon /></Icon></Fab>
          </div>
          <div style={{margin: 16}}>
            <Fab plain mini><Icon><PenIcon /></Icon></Fab>
          </div>
        </fieldset>
      </Typography>
    );
  }
}
