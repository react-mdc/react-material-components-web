import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import SupportingText from "../SupportingText";

describe("SupportingText", () => {
    it("Should have mdc-card__supporting-text classname", () => {
        const wrapper = enzyme.mount(<SupportingText />);
        expect(wrapper.hasClass("mdc-card__supporting-text")).toBeTruthy();
    });

    it("Should have section element as default component", () => {
        const wrapper = enzyme.mount(<SupportingText />);
        expect(wrapper.find("section").exists()).toBeTruthy();
    });
});
