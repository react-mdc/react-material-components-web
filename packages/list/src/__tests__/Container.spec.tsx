import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-list classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-list")).toBeTruthy();
    });

    it("Should have ul element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("ul").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Container dense />);
        expect(wrapper.hasClass("mdc-list")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list--dense")).toBeTruthy();

        wrapper = enzyme.mount(<Container twoLine />);
        expect(wrapper.hasClass("mdc-list")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list--two-line")).toBeTruthy();

        wrapper = enzyme.mount(<Container avatarList />);
        expect(wrapper.hasClass("mdc-list")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list--avatar-list")).toBeTruthy();

        wrapper = enzyme.mount(<Container dense twoLine avatarList />);
        expect(wrapper.hasClass("mdc-list")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list--dense")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list--two-line")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list--avatar-list")).toBeTruthy();

        wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-list")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list--dense")).toBeFalsy();
        expect(wrapper.hasClass("mdc-list--two-line")).toBeFalsy();
        expect(wrapper.hasClass("mdc-list--avatar-list")).toBeFalsy();
    });
});
