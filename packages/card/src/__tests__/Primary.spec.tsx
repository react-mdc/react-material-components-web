import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Primary from "../Primary";

describe("Primary", () => {
    it("Should have mdc-card__primary classname", () => {
        const wrapper = enzyme.mount(<Primary />);
        expect(wrapper.hasClass("mdc-card__primary")).toBeTruthy();
    });

    it("Should have section element as default component", () => {
        const wrapper = enzyme.mount(<Primary />);
        expect(wrapper.find("section").exists()).toBeTruthy();
    });
});
