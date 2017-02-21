/* @flow */
import React from 'react';

import {
  Typography,
  Display3,
  Title,
  Body2,
  Caption
} from '@react-mdc/typography';

import PageContainer from 'app/js/components/page-container';
import {Section, SectionTitle} from 'app/js/components/section';
import Code from 'app/js/components/code';

export default class Welcome extends React.Component {
  render (): React.Element<*> {
    return (
      <PageContainer>
        <Typography>
          <Section>
            <Display3>
              React Material Components Web
            </Display3>
            <Title adjustMargin>
              React Components for Material Components Web
            </Title>
            <Caption>
              Click left-top menu button to open the table of contents.
            </Caption>
          </Section>
          <Section>
            <SectionTitle>
              Getting Start
            </SectionTitle>
            <Body2>
              To get start with react-material-components-web
            </Body2>
            <Code
              mode="shell"
              value={`npm install --save react-material-components-web`}
              />
          </Section>
        </Typography>
      </PageContainer>
    );
  }
}
