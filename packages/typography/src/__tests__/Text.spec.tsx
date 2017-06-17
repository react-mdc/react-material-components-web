import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Text from "../Text";
import { MetaProps } from "../Text";

describe("Text", () => {
    it("Should have mdc-typography classname", () => {
        const wrapper = enzyme.mount(<Text textStyle="display4" />);
        expect(wrapper.hasClass("mdc-typography--display4")).toBeTruthy();
    });

    it("Should have various element as default component", () => {
        let wrapper: enzyme.ReactWrapper<React.HTMLProps<HTMLElement> & MetaProps, {}>;

        wrapper = enzyme.mount(<Text textStyle="display4" />);
        expect(wrapper.find(Text.defaultComponent("display4")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="display3" />);
        expect(wrapper.find(Text.defaultComponent("display3")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="display2" />);
        expect(wrapper.find(Text.defaultComponent("display2")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="display1" />);
        expect(wrapper.find(Text.defaultComponent("display1")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="headline" />);
        expect(wrapper.find(Text.defaultComponent("headline")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="title" />);
        expect(wrapper.find(Text.defaultComponent("title")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="subheading2" />);
        expect(wrapper.find(Text.defaultComponent("subheading2")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="subheading1" />);
        expect(wrapper.find(Text.defaultComponent("subheading1")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="body2" />);
        expect(wrapper.find(Text.defaultComponent("body2")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="body1" />);
        expect(wrapper.find(Text.defaultComponent("body1")).exists()).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="caption" />);
        expect(wrapper.find(Text.defaultComponent("caption")).exists()).toBeTruthy();

    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Text textStyle="body1" adjustMargin />);
        expect(wrapper.hasClass("mdc-typography--body1")).toBeTruthy();
        expect(wrapper.hasClass("mdc-typography--adjust-margin")).toBeTruthy();

        wrapper = enzyme.mount(<Text textStyle="body1" />);
        expect(wrapper.hasClass("mdc-typography--body1")).toBeTruthy();
        expect(wrapper.hasClass("mdc-typography--adjust-margin")).toBeFalsy();
    });
});
