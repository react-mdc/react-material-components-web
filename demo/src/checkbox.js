/* @flow */
import React from 'react';

import {Button} from '@react-mdc/button';
import {Checkbox} from '@react-mdc/checkbox';
import {FormField} from '@react-mdc/form-field';
import {Title, Typography} from '@react-mdc/typography';

type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';

type State = {
  checkbox3State: CheckboxState
};

export default class CheckboxExample extends React.Component {
  state: State = {
    checkbox3State: 'unchecked'
  }

  handleCheckbox3Change = () => {
    this.setState((state: State): State => {
      let checkbox3State = 'checked';
      switch (state.checkbox3State) {
        case 'checked':
          checkbox3State = 'unchecked';
      }
      return {checkbox3State};
    });
  }

  handleIndeterminateClick = () => {
    this.setState({
      checkbox3State: 'indeterminate'
    });
  }

  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Checkbox Examples
        </Title>
        <fieldset>
          <legend>Checkbox</legend>
          <FormField style={{margin: 16}}>
            <Checkbox inputId="checkbox-1" name="checkbox-1" defaultChecked />
            <label htmlFor="checkbox-1">
              Checkbox 1
            </label>
          </FormField>
        </fieldset>
        <fieldset>
          <legend>Disabled Checkbox</legend>
          <FormField style={{margin: 16}}>
            <Checkbox inputId="checkbox-1" name="checkbox-2" disabled />
            <label htmlFor="checkbox-2">
              Checkbox 2
            </label>
          </FormField>
        </fieldset>
        <fieldset>
          <legend>Checkbox Controlled by React State</legend>
          <FormField style={{margin: 16}}>
            <Checkbox
              inputId="checkbox-3"
              onChange={this.handleCheckbox3Change}
              indeterminate={this.state.checkbox3State === 'indeterminate'}
              checked={this.state.checkbox3State === 'checked'} />
            <label htmlFor="checkbox-3">
              Checkbox 3
            </label>
          </FormField>
          <Button onClick={this.handleIndeterminateClick} raised>
            Make Indetermiated
          </Button>
        </fieldset>
      </Typography>
    );
  }
}
