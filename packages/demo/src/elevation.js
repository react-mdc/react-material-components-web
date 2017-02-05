/* @flow */
import React from 'react';

import type {Props as ElevationProps} from '@react-mdc/elevation';
import {Elevation} from '@react-mdc/elevation';
import {Title, Typography} from '@react-mdc/typography';

type BoxProps<P: {}> =
  $Diff<typeof Elevation.defaultProps, ElevationProps<P>> & {
    style?: any
  };

function Box<P: any> (props: BoxProps<P>): React.Element<*> {
  let {
    style,
    ...p
  } = props;

  style = style || {};
  style = {
    ...style,
    margin: 20,
    padding: 20,
    minWidth: 200,
    maxWidth: 250,
    textAlign: 'center',
    display: 'inline-block'
  };

  return React.createElement(Elevation, {
    style,
    ...p
  });
}

class TransitionBox extends React.Component {
  props: {
    [string]: any
  }

  state: {
    mouseIn: boolean
  }

  state = {
    mouseIn: false
  }

  handleMouseEnter = () => {
    this.setState({
      mouseIn: true
    });
  }

  handleMouseOut = () => {
    this.setState({
      mouseIn: false
    });
  }

  render (): React.Element<*> {
    const zSpace = this.state.mouseIn ? 20 : 3;

    return (
      <Box
        {...this.props}
        onMouseEnter={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
        zSpace={zSpace}
        transition />
    );
  }
}

export default class ElevationExample extends React.Component {
  render (): React.Element<*> {
    return (
      <Typography>
        <Title>
          Elevation Examples
        </Title>
        <Box zSpace={0}>
          Elevation with 0 z-space
        </Box>
        <Box zSpace={1}>
          Elevation with 1 z-space
        </Box>
        <Box zSpace={2}>
          Elevation with 2 z-space
        </Box>
        <Box zSpace={3}>
          Elevation with 3 z-space
        </Box>
        <Box zSpace={4}>
          Elevation with 4 z-space
        </Box>
        <Box zSpace={5}>
          Elevation with 5 z-space
        </Box>
        <Box zSpace={6}>
          Elevation with 6 z-space
        </Box>
        <Box zSpace={7}>
          Elevation with 7 z-space
        </Box>
        <Box zSpace={8}>
          Elevation with 8 z-space
        </Box>
        <Box zSpace={9}>
          Elevation with 9 z-space
        </Box>
        <Box zSpace={10}>
          Elevation with 10 z-space
        </Box>
        <Box zSpace={11}>
          Elevation with 11 z-space
        </Box>
        <Box zSpace={12}>
          Elevation with 12 z-space
        </Box>
        <Box zSpace={13}>
          Elevation with 13 z-space
        </Box>
        <Box zSpace={14}>
          Elevation with 14 z-space
        </Box>
        <Box zSpace={15}>
          Elevation with 15 z-space
        </Box>
        <Box zSpace={16}>
          Elevation with 16 z-space
        </Box>
        <Box zSpace={17}>
          Elevation with 17 z-space
        </Box>
        <Box zSpace={18}>
          Elevation with 18 z-space
        </Box>
        <Box zSpace={19}>
          Elevation with 19 z-space
        </Box>
        <Box zSpace={20}>
          Elevation with 20 z-space
        </Box>
        <Box zSpace={21}>
          Elevation with 21 z-space
        </Box>
        <Box zSpace={22}>
          Elevation with 22 z-space
        </Box>
        <Box zSpace={23}>
          Elevation with 23 z-space
        </Box>
        <Box zSpace={24}>
          Elevation with 24 z-space
        </Box>
        <TransitionBox>
          Move mouse cursor on me
        </TransitionBox>
        <Box zSpace={10} wrap={<div />}>
          Elevation with 10 z-space and div component
        </Box>
      </Typography>
    );
  }
}
