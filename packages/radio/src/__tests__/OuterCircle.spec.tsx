import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import OuterCircle from "../OuterCircle";

describe("OuterCircle", () => {
    it("Should have mdc-radio__outer-circle classname", () => {
        const wrapper = enzyme.mount(<OuterCircle />);
        expect(wrapper.hasClass("mdc-radio__outer-circle")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<OuterCircle />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
