/* @flow */
import React from 'react';

import {Switch, Label} from '@react-mdc/switch';
import {FormField} from '@react-mdc/form-field';
import {Title, Typography} from '@react-mdc/typography';

type SwitchState = 'checked' | 'unchecked';

type State = {
  switch3State: SwitchState
};

export default class SwitchExample extends React.Component {
  state: State = {
    switch3State: 'unchecked'
  }

  handleSwitch3Change = () => {
    this.setState((state: State): State => {
      let switch3State = 'checked';
      switch (state.switch3State) {
        case 'checked':
          switch3State = 'unchecked';
      }
      return {switch3State};
    });
  }

  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Switch Examples
        </Title>
        <fieldset>
          <legend>Switch</legend>
          <FormField style={{margin: 16}}>
            <Switch inputId="switch-1" name="switch-1" defaultChecked />
            <Label htmlFor="switch-1">
              Switch 1
            </Label>
          </FormField>
        </fieldset>
        <fieldset>
          <legend>Disabled Switch</legend>
          <FormField style={{margin: 16}}>
            <Switch inputId="switch-1" name="switch-2" disabled />
            <Label htmlFor="switch-2">
              Switch 2
            </Label>
          </FormField>
        </fieldset>
        <fieldset>
          <legend>Switch Controlled by React State</legend>
          <FormField style={{margin: 16}}>
            <Switch
              inputId="switch-3"
              onChange={this.handleSwitch3Change}
              checked={this.state.switch3State === 'checked'} />
            <Label htmlFor="switch-3">
              Switch 3 State: {this.state.switch3State}
            </Label>
          </FormField>
        </fieldset>
      </Typography>
    );
  }
}
