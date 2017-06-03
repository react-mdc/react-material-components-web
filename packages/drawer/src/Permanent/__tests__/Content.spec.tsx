import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Content from "../Content";

describe("Content", () => {
    it("Should have mdc-permanent-drawer__content classname", () => {
        const wrapper = enzyme.mount(<Content />);
        expect(wrapper.hasClass("mdc-permanent-drawer__content")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Content />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
