import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-toolbar classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-toolbar")).toBeTruthy();
    });

    it("Should have header element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("header").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container fixed />);
        expect(wrapper.hasClass("mdc-toolbar")).toBeTruthy();
        expect(wrapper.hasClass("mdc-toolbar--fixed")).toBeTruthy();

        wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-toolbar")).toBeTruthy();
        expect(wrapper.hasClass("mdc-toolbar--fixed")).toBeFalsy();
    });
});
