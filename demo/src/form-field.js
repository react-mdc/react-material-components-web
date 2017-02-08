/* @flow */
import React from 'react';

import {FormField} from '@react-mdc/form-field';
import {Title, Typography} from '@react-mdc/typography';

function FieldSet (props: *): * {
  let {style} = props;
  style = {
    ...style,
    margin: 16
  };
  return (
    <fieldset
      {...props}
      style={style} />
  );
}

export default class FormFieldExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Form Field Examples
        </Title>
        <FieldSet>
          <legend>Form Field</legend>
          <div style={{margin: 16}}>
            <FormField>
              <input type="checkbox" id="input" />
              <label htmlFor="input">Input Label</label>
            </FormField>
          </div>
        </FieldSet>
        <FieldSet>
          <legend>Form Field Align End</legend>
          <div style={{margin: 16}}>
            <FormField alignEnd>
              <input type="checkbox" id="input-end" />
              <label htmlFor="input-end">Input Label</label>
            </FormField>
          </div>
        </FieldSet>
      </Typography>
    );
  }
}
