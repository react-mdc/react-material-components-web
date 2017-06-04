import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Divider from "../Divider";

describe("Divider", () => {
    it("Should have mdc-list-divider classname", () => {
        const wrapper = enzyme.mount(<Divider />);
        expect(wrapper.hasClass("mdc-list-divider")).toBeTruthy();
    });

    it("Should have li element as default component", () => {
        const wrapper = enzyme.mount(<Divider />);
        expect(wrapper.find("li").exists()).toBeTruthy();
        expect(wrapper.find("li").prop("role")).toBe("separator");
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Divider inset />);
        expect(wrapper.hasClass("mdc-list-divider")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list-divider--inset")).toBeTruthy();

        wrapper = enzyme.mount(<Divider />);
        expect(wrapper.hasClass("mdc-list-divider")).toBeTruthy();
        expect(wrapper.hasClass("mdc-list-divider--inset")).toBeFalsy();
    });
});
