import * as React from "react";

import { hashHistory, Route, Router } from "react-router";

import ComponentPage from "app/js/components/ComponentPage";

import BasicsPage from "./pages/BasicsPage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import CheckboxPage from "./pages/CheckboxPage";
import DialogPage from "./pages/DialogPage";
import ElevationPage from "./pages/ElevationPage";
import FabPage from "./pages/FABPage";
import FormFieldPage from "./pages/FormFieldPage";
import LayoutGridPage from "./pages/LayoutGridPage";
import RadioPage from "./pages/RadioPage";
import RipplePage from "./pages/RipplePage";
import SwitchPage from "./pages/SwitchPage";
import TextfieldPage from "./pages/TextfieldPage";
import TypographyPage from "./pages/TypographyPage";

import Container from "./Container";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";

import NewContainer from "./NewContainer";
import NewButtonPage from "./newPages/ButtonPage";
import ComponentsPage from "./newPages/ComponentsPage";
import NewWelcomePage from "./newPages/WelcomePage";

function MainContainer(props) {
    let {
        children,
        ...p,
    } = props;
    children = children || <WelcomePage />;
    return <Container children={children} {...p} />;
}

function NewMainConteinr(props) {
    let {
        children,
        ...p,
    } = props;
    children = children || <NewWelcomePage />;
    return <NewContainer children={children} {...p} />;
}

function scrollToTop() {
    window.scrollTo(0, 0);
}

export default function MainRouter() {
    return (
        <Router onUpdate={scrollToTop} history={hashHistory}>
            <Route path="/new/" component={NewMainConteinr}>
                <Route path="components" component={ComponentsPage} />
                <Route path="button" component={NewButtonPage} />
            </Route>
            <Route path="/" component={MainContainer}>
                <Route path="basics" component={BasicsPage} />
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
            <Route path="*" component={NotFoundPage} />
        </Router>
    );
}
