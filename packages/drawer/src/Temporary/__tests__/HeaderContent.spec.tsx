import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import HeaderContent from "../HeaderContent";

describe("HeaderContent", () => {
    it("Should have mdc-temporary-drawer__header-content classname", () => {
        const wrapper = enzyme.mount(<HeaderContent />);
        expect(wrapper.hasClass("mdc-temporary-drawer__header-content")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<HeaderContent />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
