import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-list-item classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-list-item")).toBeTruthy();
    });

    it("Should have li element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("li").exists()).toBeTruthy();
    });
});
