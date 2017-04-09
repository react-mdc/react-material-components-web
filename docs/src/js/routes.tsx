import * as React from "react";

import { hashHistory, Route, Router } from "react-router";

import Basics from "./pages/basics";
import ButtonPage from "./pages/button";
import CardPage from "./pages/card";
import CheckboxPage from "./pages/checkbox";
import DialogPage from "./pages/dialog";
import ElevationPage from "./pages/elevation";
import FabPage from "./pages/fab";
import FormFieldPage from "./pages/form-field";
import LayoutGridPage from "./pages/layout-grid";
import RadioPage from "./pages/radio";
import RipplePage from "./pages/ripple";
import SwitchPage from "./pages/switch";
import TextfieldPage from "./pages/textfield";
import TypographyPage from "./pages/typography";

import Container from "./container";
import NotFound from "./pages/not-found";
import Welcome from "./pages/welcome";

function MainContainer(props) {
    let {
        children,
        ...p,
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
                <Route path="typography" component={TypographyPage} />
                <Route path="elevation" component={ElevationPage} />
                <Route path="button" component={ButtonPage} />
                <Route path="fab" component={FabPage} />
                <Route path="card" component={CardPage} />
                <Route path="form-field" component={FormFieldPage} />
                <Route path="radio" component={RadioPage} />
                <Route path="ripple" component={RipplePage} />
                <Route path="checkbox" component={CheckboxPage} />
                <Route path="switch" component={SwitchPage} />
                <Route path="textfield" component={TextfieldPage} />
                <Route path="layout-grid" component={LayoutGridPage} />
                <Route path="dialog" component={DialogPage} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>
    );
}
