import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Action from "../Action";

describe("Action", () => {
    it("Should have mdc-card__action classname", () => {
        const wrapper = enzyme.mount(<Action />);
        expect(wrapper.hasClass("mdc-card__action")).toBeTruthy();
    });

    it("Should have button element as default component", () => {
        const wrapper = enzyme.mount(<Action />);
        expect(wrapper.find("button").exists()).toBeTruthy();
    });
});
