import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import InnerCircle from "../InnerCircle";

describe("InnerCircle", () => {
    it("Should have mdc-radio__inner-circle classname", () => {
        const wrapper = enzyme.mount(<InnerCircle />);
        expect(wrapper.hasClass("mdc-radio__inner-circle")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<InnerCircle />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
