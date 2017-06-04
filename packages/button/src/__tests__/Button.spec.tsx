import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Button from "../Button";

describe("Button", () => {
    it("Should have mdc-button classname", () => {
        const wrapper = enzyme.mount(<Button />);
        expect(wrapper.hasClass("mdc-button")).toBeTruthy();
    });

    it("Should have button element as default component", () => {
        const wrapper = enzyme.mount(<Button />);
        expect(wrapper.find("button").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Button dense />);
        expect(wrapper.hasClass("mdc-button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--dense")).toBeTruthy();

        wrapper = enzyme.mount(<Button raised />);
        expect(wrapper.hasClass("mdc-button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--raised")).toBeTruthy();

        wrapper = enzyme.mount(<Button compact />);
        expect(wrapper.hasClass("mdc-button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--compact")).toBeTruthy();

        wrapper = enzyme.mount(<Button primary />);
        expect(wrapper.hasClass("mdc-button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--primary")).toBeTruthy();

        wrapper = enzyme.mount(<Button accent />);
        expect(wrapper.hasClass("mdc-button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--accent")).toBeTruthy();

        wrapper = enzyme.mount(<Button dense raised compact primary accent />);
        expect(wrapper.hasClass("mdc-button")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--dense")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--raised")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--compact")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--primary")).toBeTruthy();
        expect(wrapper.hasClass("mdc-button--accent")).toBeTruthy();
    });
});
