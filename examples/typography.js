/* @flow */
import React from 'react';

import {Typography, Text} from '../src/typography';

export default class TypographyExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Text textStyle="title">
          Typography Examples
        </Text>
        <Text textStyle="display4">
          Hello, World!
        </Text>
        <Text textStyle="display3">
          Hello, World!
        </Text>
        <Text textStyle="display2">
          Hello, World!
        </Text>
        <Text textStyle="display1">
          Hello, World!
        </Text>
        <Text textStyle="headline">
          Headline
        </Text>
        <Text textStyle="headline" adjustMargin>
          Headline Adjust Margin
        </Text>
        <Text textStyle="subheading2">
          Subheading2
        </Text>
        <Text textStyle="subheading1">
          Subheading1
        </Text>
        <Text textStyle="body2">
          Body2
        </Text>
        <Text textStyle="body2" component="div">
          Body2 with div
        </Text>
        <ul>
          <Text textStyle="caption" component="li">
            Captions
          </Text>
          <Text textStyle="caption" component="li">
            Captions
          </Text>
          <Text textStyle="caption" component="li">
            Captions
          </Text>
        </ul>
      </Typography>
    );
  }
}
