import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Backdrop from "../Backdrop";

describe("Backdrop", () => {
    it("Should have mdc-dialog__backdrop classname", () => {
        const wrapper = enzyme.mount(<Backdrop />);
        expect(wrapper.hasClass("mdc-dialog__backdrop")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Backdrop />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
