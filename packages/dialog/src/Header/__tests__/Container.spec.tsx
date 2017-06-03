import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-dialog__header classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-dialog__header")).toBeTruthy();
    });

    it("Should have header element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("header").exists()).toBeTruthy();
    });
});
