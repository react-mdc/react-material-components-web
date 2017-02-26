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
          This is title
        </Text>
        <Text textStyle="body2">
          And i am body.
        </Text>
        <Text textStyle="display4" adjustMargin>
          I hate too broad margin.
        </Text>
      </Typography>
    );
  }
}
