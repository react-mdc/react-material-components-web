import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Background from "../Background";

describe("Background", () => {
    it("Should have mdc-checkbox__background classname", () => {
        const wrapper = enzyme.mount(<Background />);
        expect(wrapper.hasClass("mdc-checkbox__background")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Background />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
