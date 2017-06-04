import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Ripple from "../Ripple";

describe("Ripple", () => {
    it("Should have mdc-ripple-surface classname", () => {
        const wrapper = enzyme.mount(<Ripple  />);
        expect(wrapper.hasClass("mdc-ripple-surface")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Ripple  />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
