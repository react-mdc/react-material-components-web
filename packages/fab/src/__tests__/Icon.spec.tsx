import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Icon from "../Icon";

describe("Icon", () => {
    it("Should have mdc-fab__icon classname", () => {
        const wrapper = enzyme.mount(<Icon />);
        expect(wrapper.hasClass("mdc-fab__icon")).toBeTruthy();
    });

    it("Should have span element as default component", () => {
        const wrapper = enzyme.mount(<Icon />);
        expect(wrapper.find("span").exists()).toBeTruthy();
    });
});
