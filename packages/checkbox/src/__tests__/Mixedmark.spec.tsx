import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Mixedmark from "../Mixedmark";

describe("Mixedmark", () => {
    it("Should have mdc-checkbox__mixedmark classname", () => {
        const wrapper = enzyme.mount(<Mixedmark />);
        expect(wrapper.hasClass("mdc-checkbox__mixedmark")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Mixedmark />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
