/* @flow */
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import {Drawer, Content, ToolbarSpacer} from '../src/drawer/permanent';
import {Typography, Text} from '../src/typography';

import TypographyExample from './typography';
import ElevationExample from './elevation';

class Container extends React.Component {
  props: {
    children: Array<Class<React.Component<*, *, *>>>
  }
  render (): React.Element<*> {
    return (
      <Typography
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
          width: '100%',
          height: '100%'
        }}>
        <Drawer
          style={{
            minWidth: 240
          }}>
          <ToolbarSpacer />
          <Content>
            <ul>
              <li>
                <Link to="/typography">
                  Typography
                </Link>
              </li>
              <li>
                <Link to="/elevation">
                  Elevation
                </Link>
              </li>
            </ul>
          </Content>
        </Drawer>
        <div
          style={{
            flexGrow: 1,
            flexDirection: 'column',
            height: '100%',
            boxSizing: 'border-box'
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
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <Route path="typography" component={TypographyExample} />
          <Route path="elevation" component={ElevationExample} />
        </Route>
      </Router>
    );
  }
}
