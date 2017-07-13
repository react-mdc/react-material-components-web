import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Icon from "../Icon";

describe("Icon", () => {
    it("Should have mdc-toolbar__icon classname", () => {
        const wrapper = enzyme.mount(<Icon />);
        expect(wrapper.hasClass("mdc-toolbar__icon")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Icon />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
