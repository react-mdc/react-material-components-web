import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Content from "../Content";

describe("Content", () => {
    it("Should have mdc-temporary-drawer__content classname", () => {
        const wrapper = enzyme.mount(<Content />);
        expect(wrapper.hasClass("mdc-temporary-drawer__content")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Content />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
