/* @flow */
import React from 'react';

import {Typography} from '@react-mdc/typography';

import Drawer from './drawer';
import Toolbar from './toolbar';

export default class Container extends React.Component {
  props: {
    children?: React.Element<*>
  }
  state = {
    drawerOpen: false
  }
  handleMenuButtonPress = () => {
    this.setState({
      drawerOpen: true
    });
  }

  handleOpenDrawer = () => {
    this.setState({
      drawerOpen: true
    });
  }

  handleCloseDrawer = () => {
    this.setState({
      drawerOpen: false
    });
  }

  handleMenuButtonClick = () => {
    this.setState({
      drawerOpen: true
    });
  }

  render (): React.Element<*> {
    return (
      <Typography
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        }}>
        <Drawer
          onOpenDrawer={this.handleOpenDrawer}
          onCloseDrawer={this.handleCloseDrawer}
          open={this.state.drawerOpen} />
        <Toolbar onMenuButtonClick={this.handleMenuButtonClick} />
        <div
          style={{
            padding: 16,
            overflow: 'auto',
            display: 'flex',
            flex: 1,
            flexGrow: 1
          }}>
          {this.props.children}
        </div>
      </Typography>
    );
  }
}
