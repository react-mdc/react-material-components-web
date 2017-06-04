import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Body from "../Body";

describe("Body", () => {
    it("Should have mdc-dialog__body classname", () => {
        const wrapper = enzyme.mount(<Body />);
        expect(wrapper.hasClass("mdc-dialog__body")).toBeTruthy();
    });

    it("Should have section element as default component", () => {
        const wrapper = enzyme.mount(<Body />);
        expect(wrapper.find("section").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Body scrollable />);
        expect(wrapper.hasClass("mdc-dialog__body")).toBeTruthy();
        expect(wrapper.hasClass("mdc-dialog__body--scrollable")).toBeTruthy();

        wrapper = enzyme.mount(<Body />);
        expect(wrapper.hasClass("mdc-dialog__body")).toBeTruthy();
        expect(wrapper.hasClass("mdc-dialog__body--scrollable")).toBeFalsy();
    });
});
