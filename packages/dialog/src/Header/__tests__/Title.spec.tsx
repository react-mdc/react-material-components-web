import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Title from "../Title";

describe("Title", () => {
    it("Should have mdc-dialog__header__title classname", () => {
        const wrapper = enzyme.mount(<Title type="accept" />);
        expect(wrapper.hasClass("mdc-dialog__header__title")).toBeTruthy();
    });

    it("Should have h2 element as default component", () => {
        const wrapper = enzyme.mount(<Title type="cancel" />);
        expect(wrapper.find("h2").exists()).toBeTruthy();
    });
});
