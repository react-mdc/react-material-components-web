/* @flow */
import React from 'react';

import {Elevation} from 'react-mdcw/lib/elevation';
import type {Wrappable} from 'react-mdcw/lib/core/types';

function Card<P: *> (props: {wrap?: Wrappable<P>, style?: any} & any): React.Element<*> {
  let {
    style,
    wrap,
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

  return <Elevation style={style} wrap={wrap} {...p} />;
}

class TransitionCard extends React.Component {
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
      <Card
        {...this.props}
        onMouseEnter={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
        zSpace={zSpace}
        transition
        />
    );
  }
}

export default class ElevationExample extends React.Component {
  render (): React.Element<*> {
    return (
      <div>
        <Card zSpace={0}>
          Elevation with 0 z-space
        </Card>
        <Card zSpace={1}>
          Elevation with 1 z-space
        </Card>
        <Card zSpace={2}>
          Elevation with 2 z-space
        </Card>
        <Card zSpace={3}>
          Elevation with 3 z-space
        </Card>
        <Card zSpace={4}>
          Elevation with 4 z-space
        </Card>
        <Card zSpace={5}>
          Elevation with 5 z-space
        </Card>
        <Card zSpace={6}>
          Elevation with 6 z-space
        </Card>
        <Card zSpace={7}>
          Elevation with 7 z-space
        </Card>
        <Card zSpace={8}>
          Elevation with 8 z-space
        </Card>
        <Card zSpace={9}>
          Elevation with 9 z-space
        </Card>
        <Card zSpace={10}>
          Elevation with 10 z-space
        </Card>
        <Card zSpace={11}>
          Elevation with 11 z-space
        </Card>
        <Card zSpace={12}>
          Elevation with 12 z-space
        </Card>
        <Card zSpace={13}>
          Elevation with 13 z-space
        </Card>
        <Card zSpace={14}>
          Elevation with 14 z-space
        </Card>
        <Card zSpace={15}>
          Elevation with 15 z-space
        </Card>
        <Card zSpace={16}>
          Elevation with 16 z-space
        </Card>
        <Card zSpace={17}>
          Elevation with 17 z-space
        </Card>
        <Card zSpace={18}>
          Elevation with 18 z-space
        </Card>
        <Card zSpace={19}>
          Elevation with 19 z-space
        </Card>
        <Card zSpace={20}>
          Elevation with 20 z-space
        </Card>
        <Card zSpace={21}>
          Elevation with 21 z-space
        </Card>
        <Card zSpace={22}>
          Elevation with 22 z-space
        </Card>
        <Card zSpace={23}>
          Elevation with 23 z-space
        </Card>
        <Card zSpace={24}>
          Elevation with 24 z-space
        </Card>
        <TransitionCard>
          Move mouse cursor on me
        </TransitionCard>
        <Card zSpace={10} wrap={<div />}>
          Elevation with 10 z-space and div component
        </Card>
      </div>
    );
  }
}
