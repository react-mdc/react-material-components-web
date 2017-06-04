import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Subheader from "../Subheader";

describe("Subheader", () => {
    it("Should have mdc-list-group__subheader classname", () => {
        const wrapper = enzyme.mount(<Subheader />);
        expect(wrapper.hasClass("mdc-list-group__subheader")).toBeTruthy();
    });

    it("Should have h3 element as default component", () => {
        const wrapper = enzyme.mount(<Subheader />);
        expect(wrapper.find("h3").exists()).toBeTruthy();
    });
});
