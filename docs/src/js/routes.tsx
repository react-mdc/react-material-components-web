import * as React from "react";

import { hashHistory, Route, Router } from "react-router";

import ComponentPage from "app/js/components/ComponentPage";

import Container from "./Container";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import CheckboxPage from "./pages/CheckboxPage";
import DialogPage from "./pages/DialogPage";
import ElevationPage from "./pages/ElevationPage";
import FABPage from "./pages/FABPage";
import FormFieldPage from "./pages/FormFieldPage";
import LayoutGridPage from "./pages/LayoutGridPage";
import RadioPage from "./pages/RadioPage";
import RipplePage from "./pages/RipplePage";
import SwitchPage from "./pages/SwitchPage";
import TextfieldPage from "./pages/TextfieldPage";
import TypographyPage from "./pages/TypographyPage";

import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";

function MainContainer(props) {
    let {
        children,
        ...p,
    } = props;
    children = children || <WelcomePage />;
    return <Container children={children} {...p} />;
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

export default function MainRouter() {
    return (
        <Router onUpdate={scrollToTop} history={hashHistory}>
            <Route path="/" component={MainContainer}>
                <Route path="button" component={ButtonPage} />
                <Route path="card" component={CardPage} />
                <Route path="checkbox" component={CheckboxPage} />
                <Route path="dialog" component={DialogPage} />
                <Route path="elevation" component={ElevationPage} />
                <Route path="fab" component={FABPage} />
                <Route path="form-field" component={FormFieldPage} />
                <Route path="layout-grid" component={LayoutGridPage} />
                <Route path="radio" component={RadioPage} />
                <Route path="ripple" component={RipplePage} />
                <Route path="switch" component={SwitchPage} />
                <Route path="textfield" component={TextfieldPage} />
                <Route path="typography" component={TypographyPage} />
            </Route>
            <Route path="*" component={NotFoundPage} />
        </Router>
    );
}
