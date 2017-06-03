import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Header from "../Header";

describe("Header", () => {
    it("Should have mdc-temporary-drawer__header classname", () => {
        const wrapper = enzyme.mount(<Header />);
        expect(wrapper.hasClass("mdc-temporary-drawer__header")).toBeTruthy();
    });

    it("Should have header element as default component", () => {
        const wrapper = enzyme.mount(<Header />);
        expect(wrapper.find("header").exists()).toBeTruthy();
    });
});
