import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-fab classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-fab")).toBeTruthy();
    });

    it("Should have button element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("button").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container mini />);
        expect(wrapper.hasClass("mdc-fab")).toBeTruthy();
        expect(wrapper.hasClass("mdc-fab--mini")).toBeTruthy();

        wrapper = enzyme.mount(<Container plain />);
        expect(wrapper.hasClass("mdc-fab")).toBeTruthy();
        expect(wrapper.hasClass("mdc-fab--plain")).toBeTruthy();

        wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-fab")).toBeTruthy();
        expect(wrapper.hasClass("mdc-fab--mini")).toBeFalsy();
        expect(wrapper.hasClass("mdc-fab--plain")).toBeFalsy();
    });
});
