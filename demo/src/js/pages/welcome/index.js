/* @flow */
import React from 'react';

import {
  Typography,
  Display3,
  Title,
  Caption
} from '@react-mdc/typography';

import styles from './styles.css';

export default class Welcome extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography className={styles['welcome-box']}>
        <Display3>
          React Material Components Web
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
