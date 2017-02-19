/* @flow */
import React from 'react';

import {
  Textfield,
  TextareaTextfield,
  Container as TextFieldContainer,
  Input,
  Label
} from '@react-mdc/textfield';
import {FormField} from '@react-mdc/form-field';
import {Title, Typography, Subheading2} from '@react-mdc/typography';

import styles from './styles.css';

export default class TextfieldExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography
        style={{
          flexGrow: 1
        }}>
        <Title>
          Textfield Examples
        </Title>
        <div>
          <Subheading2>Basic</Subheading2>
          <FormField className={styles.formField}>
            <TextFieldContainer>
              <Input id="textfield1" autoComplete="email" />
              <Label htmlFor="textfield1">
                Email Address
              </Label>
            </TextFieldContainer>
          </FormField>
        </div>
        <div>
          <Subheading2>Multiline</Subheading2>
          <FormField className={styles.formField}>
            <TextFieldContainer multiline>
              <Input
                wrap={<textarea />}
                id="textfield2"
                rows="8"
                cols="40" />
              <Label htmlFor="textfield2">
                Comment
              </Label>
            </TextFieldContainer>
          </FormField>
        </div>
        <div>
          <Subheading2>Full Width</Subheading2>
          <Textfield
            inputId="textfield3"
            placeholder="Title"
            fullwidth />
          <TextareaTextfield
            rows="8"
            cols="40"
            inputId="textfield4"
            multiline
            placeholder="Content"
            fullwidth />
        </div>
      </Typography>
    );
  }
}
