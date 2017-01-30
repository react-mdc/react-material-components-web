/* @flow */
import React from 'react';

import {FormField} from 'react-mdcw/lib/form-field';
import {Title, Typography} from 'react-mdcw/lib/typography';

export default class FormFieldExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Form Field Examples
        </Title>
        <fieldset>
          <legend>Form Field</legend>
          <div style={{margin: 16}}>
            <FormField>
              <input type="checkbox" id="input" />
              <label htmlFor="input">Input Label</label>
            </FormField>
          </div>
        </fieldset>
        <fieldset>
          <legend>Form Field Align End</legend>
          <div style={{margin: 16}}>
            <FormField alignEnd>
              <input type="checkbox" id="input-end" />
              <label htmlFor="input-end">Input Label</label>
            </FormField>
          </div>
        </fieldset>
      </Typography>
    );
  }
}
