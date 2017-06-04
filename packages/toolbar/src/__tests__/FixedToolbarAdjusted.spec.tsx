import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import FixedToolbarAdjusted from "../FixedToolbarAdjusted";

describe("FixedToolbarAdjusted", () => {
    it("Should have mdc-toolbar-fixed-adjust classname", () => {
        const wrapper = enzyme.mount(<FixedToolbarAdjusted />);
        expect(wrapper.hasClass("mdc-toolbar-fixed-adjust")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<FixedToolbarAdjusted />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
