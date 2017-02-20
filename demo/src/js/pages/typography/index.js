/* @flow */
import React from 'react';

import {
  Typography,
  Text,
  Display4,
  Display3,
  Display2,
  Display1,
  Headline,
  Title,
  Subheading2,
  Subheading1,
  Body2,
  Body1,
  Caption
} from '@react-mdc/typography';

import PageTitle from '../../components/page-title';

export default class TypographyExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography
        style={{
          flex: 1,
          textAlign: 'center'
        }}>
        <PageTitle>
          Typography Examples
        </PageTitle>
        <Display4>
          Display 4
        </Display4>
        <Display3>
          Display 3
        </Display3>
        <Display2>
          Display 2
        </Display2>
        <Display1>
          Display 1
        </Display1>
        <Headline>
          Headline
        </Headline>
        <Headline adjustMargin>
          Headline with Adjust Margin
        </Headline>
        <Title>
          Title
        </Title>
        <Subheading2>
          Subheading 2
        </Subheading2>
        <Subheading1>
          Subheading 1
        </Subheading1>
        <Body2>
          Body 2
        </Body2>
        <Text textStyle="body2" wrap={<div />}>
          Body 2 with div
        </Text>
        <Body1>
          Body 1
        </Body1>
        <Caption>
          Caption
        </Caption>
        <Caption wrap={<i />}>
          Italic Caption
        </Caption>
      </Typography>
    );
  }
}
