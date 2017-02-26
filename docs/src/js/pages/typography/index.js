/* @flow */
import React from 'react';

import PageContainer from 'app/js/components/page-container';
import PageTitle from 'app/js/components/page-title';
import Code from 'app/js/components/code';
import {
  Section,
  SectionTitle,
  Explanation,
  ExampleCode,
  Demo
} from 'app/js/components/section';
import {stripIgnored} from 'app/js/utils/code';

import TextExampleCode from 'raw-loader!./text.example.js';
import TextExample from 'babel-loader!./text.example.js';

import ShortcutsExampleCode from 'raw-loader!./shortcuts.example.js';
import ShortcutsExample from 'babel-loader!./shortcuts.example.js';

export default class TypographyExample extends React.Component {
  render (): React.Element<*> {
    return (
      <PageContainer>
        <PageTitle>
          Typography Component
        </PageTitle>
        <Section>
          <SectionTitle>
            Basic usage
          </SectionTitle>
          <Explanation>
            You can use <code>Text</code> components within <code>Typography</code> component.
          </Explanation>
          <ExampleCode>
            <Code value={stripIgnored(TextExampleCode)} />
          </ExampleCode>
          <Demo>
            <TextExample />
          </Demo>
        </Section>
        <Section>
          <SectionTitle>
            Shortcuts
          </SectionTitle>
          <Explanation>
            There are coresponding shortcut components for each text styles.
          </Explanation>
          <ExampleCode>
            <Code value={stripIgnored(ShortcutsExampleCode)} />
          </ExampleCode>
          <Demo>
            <ShortcutsExample />
          </Demo>
        </Section>
      </PageContainer>
    );
  }
}
