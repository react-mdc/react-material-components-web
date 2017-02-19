/* @flow */
import React from 'react';
import classNames from 'classnames';

import {
  Typography,
  Title
} from '@react-mdc/typography';
import {Grid, Cell} from '@react-mdc/layout-grid';

import styles from './styles.css';

const DemoGrid = (p: *) => (<Grid {...p} className={classNames(styles.grid, p.className)} />);
const DemoCell = (p: *) => (
  <Cell {...p} className={classNames(styles.cell, p.className)}>
    <Title>{p.children}</Title>
  </Cell>
);

export default class TypographyExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography className={styles.container}>
        <Title>
          Layout Grid Examples
        </Title>
        <Title>
          Grid of 1 column wide items
        </Title>
        <DemoGrid>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
          <DemoCell span={1}>
            1
          </DemoCell>
        </DemoGrid>
        <Title>
          Grid of 4 column wide items
        </Title>
        <DemoGrid>
          <DemoCell span={4}>
            4
          </DemoCell>
          <DemoCell span={4}>
            4
          </DemoCell>
          <DemoCell span={4}>
            4
          </DemoCell>
        </DemoGrid>
        <Title>
          Grid of differently sized items
        </Title>
        <DemoGrid>
          <DemoCell span={6}>
            6
          </DemoCell>
          <DemoCell span={4}>
            4
          </DemoCell>
          <DemoCell span={2}>
            2
          </DemoCell>
        </DemoGrid>
        <Title>
          Grid of items with tweaks at different screen sizes
        </Title>
        <DemoGrid>
          <DemoCell span={6} spanTablet={8}>
            6 (8 Tablet)
          </DemoCell>
          <DemoCell span={4} spanTablet={6}>
            4 (6 Tablet)
          </DemoCell>
          <DemoCell span={2} spanPhone={4}>
            2 (4 Phone)
          </DemoCell>
        </DemoGrid>
      </Typography>
    );
  }
}
