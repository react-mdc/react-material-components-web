/* @flow */
import React from 'react';
import {Router, Route, IndexRedirect, Link, hashHistory} from 'react-router';

import {
  TemporaryDrawer,
  Drawer,
  Content,
  Header,
  HeaderContent
} from 'react-mdcw/lib/drawer/temporary';
import {Typography} from 'react-mdcw/lib/typography';
import {Themed} from 'react-mdcw/lib/theme';
import {Elevation} from 'react-mdcw/lib/elevation';

import TypographyExample from './typography';
import ElevationExample from './elevation';
import ButtonExample from './button';
import FabExample from './fab';
import CardExample from './card';

class Container extends React.Component {
  props: {
    children: Array<Class<React.Component<*, *, *>>>
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

  // FIXME: click event will not be fired because of bug in mdc-web
  // See: https://github.com/material-components/material-components-web/issues/225
  handleClickLink = () => {
    this.setState({
      drawerOpen: false
    });
  }

  render (): React.Element<*> {
    return (
      <Typography
        style={{
          flex: 1,
          flexDirection: 'column'
        }}>
        <TemporaryDrawer
          style={{
            zIndex: 1
          }}
          open={this.state.drawerOpen}
          onOpenDrawer={this.handleOpenDrawer}
          onCloseDrawer={this.handleCloseDrawer}>
          <Drawer>
            <Header>
              <HeaderContent
                wrap={Themed}
                textColor="primary"
                onColor="primary"
                backgroundColor="primary">
                Menu
              </HeaderContent>
            </Header>
            <Content>
              <ul>
                <li>
                  <Link to="/typography" onClick={this.handleClickLink}>
                    Typography
                  </Link>
                </li>
                <li>
                  <Link to="/elevation" onClick={this.handleClickLink}>
                    Elevation
                  </Link>
                </li>
                <li>
                  <Link to="/button" onClick={this.handleClickLink}>
                    Button
                  </Link>
                </li>
                <li>
                  <Link to="/fab" onClick={this.handleClickLink}>
                    Fab
                  </Link>
                </li>
                <li>
                  <Link to="/card" onClick={this.handleClickLink}>
                    Card
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/Hardtack/react-mdcw" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </Content>
          </Drawer>
        </TemporaryDrawer>
        <Elevation
          wrap={Themed}
          zSpace={4}
          style={{
            display: 'flex',
            paddingLeft: 16,
            paddingRight: 16,
            height: 64,
            flexDirection: 'row',
            alignItems: 'center'
          }}
          backgroundColor="primary"
          textColor="primary"
          onColor="primary">
          <a
            style={{
              display: 'flex',
              width: 64,
              height: 44,
              cursor: 'pointer',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onClick={this.handleMenuButtonPress}>
            MENU
          </a>
        </Elevation>
        <div
          style={{
            padding: 15
          }}>
          {this.props.children}
        </div>
      </Typography>
    );
  }
}

export default class Main extends React.Component {
  render (): React.Element<*> {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Container}>
          <IndexRedirect to="/typography" />
          <Route path="typography" component={TypographyExample} />
          <Route path="elevation" component={ElevationExample} />
          <Route path="button" component={ButtonExample} />
          <Route path="fab" component={FabExample} />
          <Route path="card" component={CardExample} />
        </Route>
      </Router>
    );
  }
}
