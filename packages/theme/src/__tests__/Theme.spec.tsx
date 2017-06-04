import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Theme from "../Theme";
import { MetaProps } from "../Theme";

describe("Theme", () => {
    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Theme />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper: enzyme.ReactWrapper<React.HTMLProps<HTMLDivElement> & MetaProps, {}>;

        wrapper = enzyme.mount(<Theme color="primary" />);
        expect(wrapper.hasClass("mdc-theme--primary")).toBeTruthy();

        wrapper = enzyme.mount(<Theme backgroundColor="primary" />);
        expect(wrapper.hasClass("mdc-theme--primary-bg")).toBeTruthy();

        wrapper = enzyme.mount(<Theme textColor="primary" onColor="background" />);
        expect(wrapper.hasClass("mdc-theme--text-primary-on-background")).toBeTruthy();

        wrapper = enzyme.mount(<Theme />);
        expect(wrapper.hasClass("mdc-theme--primary")).toBeFalsy();
        expect(wrapper.hasClass("mdc-theme--primary-bg")).toBeFalsy();
        expect(wrapper.hasClass("mdc-theme--text-primary-on-background")).toBeFalsy();
    });
});
