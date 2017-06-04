import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Title from "../Title";

describe("Title", () => {
    it("Should have mdc-toolbar__title classname", () => {
        const wrapper = enzyme.mount(<Title />);
        expect(wrapper.hasClass("mdc-toolbar__title")).toBeTruthy();
    });

    it("Should have span element as default component", () => {
        const wrapper = enzyme.mount(<Title />);
        expect(wrapper.find("span").exists()).toBeTruthy();
    });
});
