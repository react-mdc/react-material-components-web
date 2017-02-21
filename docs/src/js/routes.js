/* @flow */
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import TypographyExample from './pages/typography';
import ElevationExample from './pages/elevation';
import ButtonExample from './pages/button';
import FabExample from './pages/fab';
import CardExample from './pages/card';
import FormFieldExample from './pages/form-field';
import RadioExample from './pages/radio';
import RippleExample from './pages/ripple';
import CheckboxExample from './pages/checkbox';
import SwitchExample from './pages/switch';
import TextfieldExample from './pages/textfield';
import LayoutGridExample from './pages/layout-grid';

import Welcome from './pages/welcome';
import NotFound from './pages/not-found';
import Container from './container';

function MainContainer (props: *): React.Element<*> {
  let {
    children,
    ...p
  } = props;
  children = children || <Welcome />;
  return <Container children={children} {...p} />;
}

export default function MainRouter (): * {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={MainContainer}>
        <Route path="typography" component={TypographyExample} />
        <Route path="elevation" component={ElevationExample} />
        <Route path="button" component={ButtonExample} />
        <Route path="fab" component={FabExample} />
        <Route path="card" component={CardExample} />
        <Route path="form-field" component={FormFieldExample} />
        <Route path="radio" component={RadioExample} />
        <Route path="ripple" component={RippleExample} />
        <Route path="checkbox" component={CheckboxExample} />
        <Route path="switch" component={SwitchExample} />
        <Route path="textfield" component={TextfieldExample} />
        <Route path="layout-grid" component={LayoutGridExample} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );
}
