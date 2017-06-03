import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import HorizontalBlock from "../HorizontalBlock";

describe("HorizontalBlock", () => {
    it("Should have mdc-card__horizontal-block classname", () => {
        const wrapper = enzyme.mount(<HorizontalBlock />);
        expect(wrapper.hasClass("mdc-card__horizontal-block")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<HorizontalBlock />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
