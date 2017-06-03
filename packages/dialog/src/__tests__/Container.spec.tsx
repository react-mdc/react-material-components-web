import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-dialog classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-dialog")).toBeTruthy();
    });

    it("Should have aside element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("aside").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container dark />);
        expect(wrapper.hasClass("mdc-dialog")).toBeTruthy();
        expect(wrapper.hasClass("mdc-dialog--theme-dark")).toBeTruthy();

        wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-dialog")).toBeTruthy();
        expect(wrapper.hasClass("mdc-dialog--theme-dark")).toBeFalsy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
