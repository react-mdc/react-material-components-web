/* @flow */
import React from 'react';

import {FormField} from '@react-mdc/form-field';

import PageTitle from 'app/js/components/page-title';
import {Section, SectionTitle} from 'app/js/components/section';

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
