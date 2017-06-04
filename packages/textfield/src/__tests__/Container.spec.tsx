import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-textfield classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-textfield")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container multiline />);
        expect(wrapper.hasClass("mdc-textfield")).toBeTruthy();
        expect(wrapper.hasClass("mdc-textfield--multiline")).toBeTruthy();

        wrapper = enzyme.mount(<Container fullwidth />);
        expect(wrapper.hasClass("mdc-textfield")).toBeTruthy();
        expect(wrapper.hasClass("mdc-textfield--fullwidth")).toBeTruthy();

        wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-textfield")).toBeTruthy();
        expect(wrapper.hasClass("mdc-textfield--multiline")).toBeFalsy();
        expect(wrapper.hasClass("mdc-textfield--fullwidth")).toBeFalsy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
