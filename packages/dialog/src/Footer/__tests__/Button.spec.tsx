import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Button from "../Button";

describe("Button", () => {
    it("Should have mdc-dialog__footer__button classname", () => {
        const wrapper = enzyme.mount(<Button type="accept" />);
        expect(wrapper.hasClass("mdc-dialog__footer__button")).toBeTruthy();
    });

    it("Should have button element as default component", () => {
        const wrapper = enzyme.mount(<Button type="cancel" />);
        expect(wrapper.find("button").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Button type="accept" />);
        expect(wrapper.hasClass("mdc-dialog__footer__button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-dialog__footer__button--accept")).toBeTruthy();
        expect(wrapper.hasClass("mdc-dialog__footer__button--cancel")).toBeFalsy();

        wrapper = enzyme.mount(<Button type="cancel" />);
        expect(wrapper.hasClass("mdc-dialog__footer__button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-dialog__footer__button--accept")).toBeFalsy();
        expect(wrapper.hasClass("mdc-dialog__footer__button--cancel")).toBeTruthy();
    });
});
