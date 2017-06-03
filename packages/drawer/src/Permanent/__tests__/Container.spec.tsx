import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-permanent-drawer classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-permanent-drawer")).toBeTruthy();
    });

    it("Should have nav element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("nav").exists()).toBeTruthy();
    });
});
