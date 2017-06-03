import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import EndDetail from "../EndDetail";

describe("EndDetail", () => {
    it("Should have mdc-list-item__end-detail classname", () => {
        const wrapper = enzyme.mount(<EndDetail />);
        expect(wrapper.hasClass("mdc-list-item__end-detail")).toBeTruthy();
    });

    it("Should have span element as default component", () => {
        const wrapper = enzyme.mount(<EndDetail />);
        expect(wrapper.find("span").exists()).toBeTruthy();
    });
});
