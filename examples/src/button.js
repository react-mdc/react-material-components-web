/* @flow */
import React from 'react';

import {Button} from 'react-mdcw/lib/button';
import {Title, Typography} from 'react-mdcw/lib/typography';

export default class ButtonExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Button Examples
        </Title>
        <fieldset>
          <legend>Buttons</legend>
          <div style={{margin: 16}}>
            <Button>DEFAULT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button raised>RAISED</Button>
          </div>
          <div style={{margin: 16}}>
            <Button dense>DENSE DEFAULT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button dense raised>DENSE RAISED</Button>
          </div>
          <div style={{margin: 16}}>
            <Button compact>COMPACT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button compact raised>COMPACT RAISED</Button>
          </div>
          <div style={{margin: 16}}>
            <Button primary>DEFAULT WITH PRIMARY</Button>
          </div>
          <div style={{margin: 16}}>
            <Button raised primary>RAISED WITH PRIMARY</Button>
          </div>
          <div style={{margin: 16}}>
            <Button accent>DEFAULT WITH ACCENT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button raised accent>RAISED WITH ACCENT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button wrap={<div />}>DIV</Button>
          </div>
        </fieldset>
        <fieldset>
          <legend>Disabled Buttons</legend>
          <div style={{margin: 16}}>
            <Button disabled>DEFAULT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled raised>RAISED</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled dense>DENSE DEFAULT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled dense raised>DENSE RAISED</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled compact>COMPACT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled compact raised>COMPACT RAISED</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled primary>DEFAULT WITH PRIMARY</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled raised primary>RAISED WITH PRIMARY</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled accent>DEFAULT WITH ACCENT</Button>
          </div>
          <div style={{margin: 16}}>
            <Button disabled raised accent>RAISED WITH ACCENT</Button>
          </div>
        </fieldset>
      </Typography>
    );
  }
}
