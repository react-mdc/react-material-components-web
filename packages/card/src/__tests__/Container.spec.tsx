import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-card classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-card")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container dark />);
        expect(wrapper.hasClass("mdc-card")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card--theme-dark")).toBeTruthy();

        wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-card")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card--theme-dark")).toBeFalsy();
    });
});
