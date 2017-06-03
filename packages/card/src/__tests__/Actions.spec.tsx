import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Actions from "../Actions";

describe("Actions", () => {
    it("Should have mdc-card__actions classname", () => {
        const wrapper = enzyme.mount(<Actions />);
        expect(wrapper.hasClass("mdc-card__actions")).toBeTruthy();
    });

    it("Should have section element as default component", () => {
        const wrapper = enzyme.mount(<Actions />);
        expect(wrapper.find("section").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Actions vertical />);
        expect(wrapper.hasClass("mdc-card__actions")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__actions--vertical")).toBeTruthy();

        wrapper = enzyme.mount(<Actions />);
        expect(wrapper.hasClass("mdc-card__actions")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__actions--vertical")).toBeFalsy();
    });
});
