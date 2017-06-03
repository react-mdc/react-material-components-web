import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-switch classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-switch")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container disabled />);
        expect(wrapper.hasClass("mdc-switch")).toBeTruthy();
        expect(wrapper.hasClass("mdc-switch--disabled")).toBeTruthy();

        wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-switch")).toBeTruthy();
        expect(wrapper.hasClass("mdc-switch--disabled")).toBeFalsy();
    });
});
