/* @flow */
import React from 'react';

import {FormField} from '@react-mdc/form-field';
import {Title, Typography} from '@react-mdc/typography';

import PageTitle from 'app/js/components/page-title';
import {Section, SectionTitle} from 'app/js/components/section';

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
      <div>
        <PageTitle>
          Form Field Examples
        </PageTitle>
        <Section>
          <SectionTitle>Form Field</SectionTitle>
          <FormField>
            <input type="checkbox" id="input" />
            <label htmlFor="input">Input Label</label>
          </FormField>
        </Section>
        <Section>
          <SectionTitle>Form Field Align End</SectionTitle>
          <FormField alignEnd>
            <input type="checkbox" id="input-end" />
            <label htmlFor="input-end">Input Label</label>
          </FormField>
        </Section>
      </div>
    );
  }
}
