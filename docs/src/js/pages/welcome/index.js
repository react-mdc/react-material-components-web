/* @flow */
import React from 'react';

import {
  Typography,
  Display3,
  Body2,
  Caption
} from '@react-mdc/typography';
import {Cell} from '@react-mdc/layout-grid';

import PageContainer from 'app/js/components/page-container';
import {Section, SectionTitle} from 'app/js/components/section';
import Code from 'app/js/components/code';

export default class Welcome extends React.Component {
  render (): React.Element<*> {
    return (
      <PageContainer>
        <Typography>
          <Display3>
            React Material Components Web
          </Display3>
          <Section>
            <SectionTitle>
              React Components for Material Components Web
            </SectionTitle>
            <Cell wrap={Caption} span={12}>
              Click left-top menu button to open the table of contents.
            </Cell>
          </Section>
          <Section>
            <SectionTitle>
              Getting Start
            </SectionTitle>
            <Cell wrap={Body2} span={12}>
              To get start with react-material-components-web
            </Cell>
            <Cell span={12}>
              <Code
                mode="shell"
                value={`npm install --save react-material-components-web`}
                />
            </Cell>
          </Section>
        </Typography>
      </PageContainer>
    );
  }
}
