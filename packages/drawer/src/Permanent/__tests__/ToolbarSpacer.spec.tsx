import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import ToolbarSpacer from "../ToolbarSpacer";

describe("ToolbarSpacer", () => {
    it("Should have mdc-permanent-drawer__toolbar-spacer classname", () => {
        const wrapper = enzyme.mount(<ToolbarSpacer />);
        expect(wrapper.hasClass("mdc-permanent-drawer__toolbar-spacer")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<ToolbarSpacer />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
