/* @flow */
import React from 'react';

import {
  Typography,
  Display3,
  Title,
  Body2
} from 'react-mdcw/lib/typography';

export default class Welcome extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Display3>
          React-MDCW
        </Display3>
        <Title adjustMargin>
          React Components for Material Components Web
        </Title>
        <Body2>
          Click left-top menu button to open the list of Demo.
        </Body2>
      </Typography>
    );
  }
}
