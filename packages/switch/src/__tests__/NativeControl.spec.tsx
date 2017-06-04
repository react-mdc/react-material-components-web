import "jest";

import * as React from "react";

import * as enzyme from "enzyme";
import * as PropTypes from "prop-types";

import NativeControl from "../NativeControl";

describe("NativeControl", () => {
    it("Should have mdc-switch__native-control classname", () => {
        const wrapper = enzyme.mount(<NativeControl />);
        expect(wrapper.hasClass("mdc-switch__native-control")).toBeTruthy();
    });

    it("Should have input element as default component", () => {
        const wrapper = enzyme.mount(<NativeControl />);
        expect(wrapper.find("input").exists()).toBeTruthy();
    });
});
