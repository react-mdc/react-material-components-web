import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Section from "../Section";

describe("Section", () => {
    it("Should have mdc-toolbar__section classname", () => {
        const wrapper = enzyme.mount(<Section />);
        expect(wrapper.hasClass("mdc-toolbar__section")).toBeTruthy();
    });

    it("Should have section element as default component", () => {
        const wrapper = enzyme.mount(<Section />);
        expect(wrapper.find("section").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Section align="start" />);
        expect(wrapper.hasClass("mdc-toolbar__section")).toBeTruthy();
        expect(wrapper.hasClass("mdc-toolbar__section--align-start")).toBeTruthy();

        wrapper = enzyme.mount(<Section align="end" />);
        expect(wrapper.hasClass("mdc-toolbar__section")).toBeTruthy();
        expect(wrapper.hasClass("mdc-toolbar__section--align-end")).toBeTruthy();

        wrapper = enzyme.mount(<Section />);
        expect(wrapper.hasClass("mdc-toolbar__section")).toBeTruthy();
        expect(wrapper.hasClass("mdc-toolbar__section--align-start")).toBeFalsy();
        expect(wrapper.hasClass("mdc-toolbar__section--align-end")).toBeFalsy();
    });
});
