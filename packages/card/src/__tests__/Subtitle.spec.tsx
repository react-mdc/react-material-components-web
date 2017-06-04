import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Subtitle from "../Subtitle";

describe("Subtitle", () => {
    it("Should have mdc-card__subtitle classname", () => {
        const wrapper = enzyme.mount(<Subtitle />);
        expect(wrapper.hasClass("mdc-card__subtitle")).toBeTruthy();
    });

    it("Should have h2 element as default component", () => {
        const wrapper = enzyme.mount(<Subtitle />);
        expect(wrapper.find("h2").exists()).toBeTruthy();
    });
});
