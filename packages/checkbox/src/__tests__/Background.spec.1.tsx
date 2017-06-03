import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Background from "../Background";

describe("Background", () => {
    it("Should have mdc-checkbox__background classname", () => {
        const wrapper = enzyme.mount(<Background />);
        expect(wrapper.hasClass("mdc-checkbox__background")).toBeTruthy();
    });

    it("Should have section element as default component", () => {
        const wrapper = enzyme.mount(<Background />);
        expect(wrapper.find("section").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Background vertical />);
        expect(wrapper.hasClass("mdc-checkbox__background")).toBeTruthy();
        expect(wrapper.hasClass("mdc-checkbox__background--vertical")).toBeTruthy();

        wrapper = enzyme.mount(<Background />);
        expect(wrapper.hasClass("mdc-checkbox__background")).toBeTruthy();
        expect(wrapper.hasClass("mdc-checkbox__background--vertical")).toBeFalsy();
    });
});
