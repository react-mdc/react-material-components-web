import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-checkbox classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-checkbox")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
