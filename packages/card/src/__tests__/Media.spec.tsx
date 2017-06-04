import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Media from "../Media";

describe("Media", () => {
    it("Should have mdc-card__media classname", () => {
        const wrapper = enzyme.mount(<Media />);
        expect(wrapper.hasClass("mdc-card__media")).toBeTruthy();
    });

    it("Should have section element as default component", () => {
        const wrapper = enzyme.mount(<Media />);
        expect(wrapper.find("section").exists()).toBeTruthy();
    });
});
