/* @flow */
import React from 'react';

import {
  Typography,
  Text
} from '@react-mdc/typography';

export default class Example extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Text textStyle="title">
          Title
        </Text>
        <Text textStyle="body2">
          Body Two
        </Text>
        <Text textStyle="display4" adjustMargin>
          Adjust margin
        </Text>
      </Typography>
    );
  }
}
