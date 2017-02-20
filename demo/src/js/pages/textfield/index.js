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

import PageTitle from 'app/js/components/page-title';
import {Section, SectionTitle} from 'app/js/components/section';

import styles from './styles.css';

export default class TextfieldExample extends React.Component {
  render (): React.Element<*> {
    return (
      <div className={styles.layout}>
        <PageTitle>
          Textfield Examples
        </PageTitle>
        <Section>
          <SectionTitle>Basic</SectionTitle>
          <FormField className={styles['form-field']}>
            <TextFieldContainer>
              <Input id="textfield1" autoComplete="email" />
              <Label htmlFor="textfield1">
                Email Address
              </Label>
            </TextFieldContainer>
          </FormField>
        </Section>
        <Section>
          <SectionTitle>Multiline</SectionTitle>
          <FormField className={styles['form-field']}>
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
        </Section>
        <Section>
          <SectionTitle>Full Width</SectionTitle>
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
        </Section>
      </div>
    );
  }
}
