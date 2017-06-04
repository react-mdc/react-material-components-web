import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Label from "../Label";

describe("Label", () => {
    it("Should have mdc-switch-label classname", () => {
        const wrapper = enzyme.mount(<Label />);
        expect(wrapper.hasClass("mdc-switch-label")).toBeTruthy();
    });

    it("Should have label element as default component", () => {
        const wrapper = enzyme.mount(<Label />);
        expect(wrapper.find("label").exists()).toBeTruthy();
    });
});
