import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import {
    NativeDOMAdapter,
} from "@react-mdc/base";

import { GUTTER_CSS_VARIABLE, MARGIN_CSS_VARIABLE } from "../constants";
import Container from "../Container";
import { MetaProps } from "../Container";

describe("Container", () => {
    it("Should have mdc-layout-grid classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-layout-grid")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property CSS properties", () => {
        let wrapper: enzyme.ShallowWrapper<React.HTMLProps<HTMLDivElement> & MetaProps, any>;

        wrapper = enzyme.shallow(<Container margin={8} />).shallow();
        expect(wrapper.find(NativeDOMAdapter).prop("cssVariables")).toEqual({
            [MARGIN_CSS_VARIABLE]: "8px",
        });

        wrapper = enzyme.shallow(<Container gutter={8} />).shallow();
        expect(wrapper.find(NativeDOMAdapter).prop("cssVariables")).toEqual({
            [GUTTER_CSS_VARIABLE]: "8px",
        });

        wrapper = enzyme.shallow(<Container margin={8} gutter={16} />).shallow();
        expect(wrapper.find(NativeDOMAdapter).prop("cssVariables")).toEqual({
            [MARGIN_CSS_VARIABLE]: "8px",
            [GUTTER_CSS_VARIABLE]: "16px",
        });

        wrapper = enzyme.shallow(<Container margin="foo" />).shallow();
        expect(wrapper.find(NativeDOMAdapter).prop("cssVariables")).toEqual({
            [MARGIN_CSS_VARIABLE]: "foo",
        });

        wrapper = enzyme.shallow(<Container gutter="3em" />).shallow();
        expect(wrapper.find(NativeDOMAdapter).prop("cssVariables")).toEqual({
            [GUTTER_CSS_VARIABLE]: "3em",
        });
    });
});
