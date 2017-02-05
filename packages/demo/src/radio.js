/* @flow */
import React from 'react';

import {Radio} from '@react-mdc/radio';
import {FormField} from '@react-mdc/form-field';
import {Title, Typography} from '@react-mdc/typography';

export default class RadioExample extends React.Component {
  state: {
    group3Selected: string
  }

  state = {
    group3Selected: 'radio-1'
  }

  handleGroup3ItemChange = (evt: SyntheticInputEvent) => {
    this.setState({
      group3Selected: evt.target.value
    });
  }

  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Radio Examples
        </Title>
        <fieldset>
          <legend>Radio</legend>
          <FormField style={{margin: 16}}>
            <Radio inputId="group-1-radio-1" name="group-1" defaultChecked />
            <label htmlFor="group-1-radio-1">
              Radio 1
            </label>
          </FormField>
          <FormField style={{margin: 16}}>
            <Radio inputId="group-1-radio-2" name="group-1" />
            <label htmlFor="group-1-radio-2">
              Radio 2
            </label>
          </FormField>
        </fieldset>
        <fieldset>
          <legend>Disabled Radio</legend>
          <FormField style={{margin: 16}}>
            <Radio inputId="group-2-radio-1" name="group-2" disabled />
            <label htmlFor="group-2-radio-1">
              Radio 1
            </label>
          </FormField>
          <FormField style={{margin: 16}}>
            <Radio inputId="group-2-radio-2" name="group-2" checked disabled />
            <label htmlFor="group-2-radio-2">
              Radio 2
            </label>
          </FormField>
        </fieldset>
        <fieldset>
          <legend>Radio Controlled by React State</legend>
          <FormField style={{margin: 16}}>
            <Radio
              inputId="group-3-radio-1"
              name="group-3"
              value="radio-1"
              onChange={this.handleGroup3ItemChange}
              checked={this.state.group3Selected === 'radio-1'} />
            <label htmlFor="group-3-radio-1">
              Radio 1
            </label>
          </FormField>
          <FormField style={{margin: 16}}>
            <Radio
              inputId="group-3-radio-2"
              name="group-3"
              value="radio-2"
              onChange={this.handleGroup3ItemChange}
              checked={this.state.group3Selected === 'radio-2'} />
            <label htmlFor="group-3-radio-2">
              Radio 2
            </label>
          </FormField>
        </fieldset>
      </Typography>
    );
  }
}
