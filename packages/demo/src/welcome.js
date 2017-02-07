/* @flow */
import React from 'react';

import {
  Typography,
  Display3,
  Title,
  Caption
} from '@react-mdc/typography';

export default class Welcome extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
        <Display3>
          React-MDCW
        </Display3>
        <Title adjustMargin>
          React Components for Material Components Web
        </Title>
        <Caption>
          Click left-top menu button to open the list of Demo.
        </Caption>
      </Typography>
    );
  }
}
