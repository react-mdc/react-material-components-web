import * as React from "react";

import { hashHistory, Route, Router } from "react-router";

import Basics from "./pages/basics";
import ButtonExample from "./pages/button";
import CardExample from "./pages/card";
import CheckboxExample from "./pages/checkbox";
import ElevationExample from "./pages/elevation";
import FabExample from "./pages/fab";
import FormFieldExample from "./pages/form-field";
import LayoutGridExample from "./pages/layout-grid";
import RadioExample from "./pages/radio";
import RippleExample from "./pages/ripple";
import SwitchExample from "./pages/switch";
import TextfieldExample from "./pages/textfield";
import TypographyExample from "./pages/typography";

import Container from "./container";
import NotFound from "./pages/not-found";
import Welcome from "./pages/welcome";

function MainContainer(props) {
    let {
    children,
        ...p
  } = props;
    children = children || <Welcome />;
    return <Container children={children} {...p} />;
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

export default function MainRouter() {
    return (
        <Router onUpdate={scrollToTop} history={hashHistory}>
            <Route path="/" component={MainContainer}>
                <Route path="basics" component={Basics} />
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
