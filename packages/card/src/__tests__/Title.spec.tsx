import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Title from "../Title";

describe("Title", () => {
    it("Should have mdc-card__title classname", () => {
        const wrapper = enzyme.mount(<Title />);
        expect(wrapper.hasClass("mdc-card__title")).toBeTruthy();
    });

    it("Should have h1 element as default component", () => {
        const wrapper = enzyme.mount(<Title />);
        expect(wrapper.find("h1").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Title large />);
        expect(wrapper.hasClass("mdc-card__title")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__title--large")).toBeTruthy();

        wrapper = enzyme.mount(<Title />);
        expect(wrapper.hasClass("mdc-card__title")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__title--large")).toBeFalsy();
    });
});
