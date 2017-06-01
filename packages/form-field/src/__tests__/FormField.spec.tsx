import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import FormField from "../FormField";

describe("FormField", () => {
    it("Should have mdc-form-field classname", () => {
        const wrapper = enzyme.mount(<FormField />);
        expect(wrapper.hasClass("mdc-form-field")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<FormField />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<FormField alignEnd />);
        expect(wrapper.hasClass("mdc-form-field")).toBeTruthy();
        expect(wrapper.hasClass("mdc-form-field--align-end")).toBeTruthy();

        wrapper = enzyme.mount(<FormField />);
        expect(wrapper.hasClass("mdc-form-field")).toBeTruthy();
        expect(wrapper.hasClass("mdc-form-field--align-end")).toBeFalsy();
    });
});
