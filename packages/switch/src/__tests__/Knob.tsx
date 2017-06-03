import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Knob from "../Knob";

describe("Knob", () => {
    it("Should have mdc-switch__knob classname", () => {
        const wrapper = enzyme.mount(<Knob />);
        expect(wrapper.hasClass("mdc-switch__knob")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Knob />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
