/* @flow */
import React from 'react';

import {Textfield, Input, Label} from '@react-mdc/textfield';
import {FormField} from '@react-mdc/form-field';
import {Title, Typography, Subheading2} from '@react-mdc/typography';

export default class TextfieldExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Textfield Examples
        </Title>
        <div>
          <Subheading2>Basic</Subheading2>
          <FormField style={{margin: 16}}>
            <Textfield>
              <Input id="textfield1" autoComplete="email" />
              <Label htmlFor="textfield1">
                Email Address
              </Label>
            </Textfield>
          </FormField>
        </div>
        <div>
          <Subheading2>Multiline</Subheading2>
          <FormField style={{margin: 16}}>
            <Textfield multiline>
              <Input
                wrap={<textarea />}
                id="textfield2"
                rows="8"
                cols="40" />
              <Label htmlFor="textfield2">
                Comment
              </Label>
            </Textfield>
          </FormField>
        </div>
        <div style={{minWidth: 300}}>
          <Subheading2>Full Width</Subheading2>
          <Textfield fullwidth>
            <Input id="textfield3" placeholder="Title" />
          </Textfield>
          <Textfield multiline fullwidth>
            <Input
              wrap={<textarea />}
              id="textfield4"
              rows="8"
              cols="40"
              placeholder="Content" />
          </Textfield>
        </div>
      </Typography>
    );
  }
}
