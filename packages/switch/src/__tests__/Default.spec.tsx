import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Background from "../Background";
import Container from "../Container";
import Default from "../Default";
import Knob from "../Knob";
import NativeControl from "../NativeControl";

describe("Default", () => {
    it("Should render common component composition", () => {
        const wrapper = enzyme.shallow(<Default />);
        expect(wrapper.find(Background).exists()).toBeTruthy();
        expect(wrapper.find(Container).exists()).toBeTruthy();
        expect(wrapper.find(Knob).exists()).toBeTruthy();
        expect(wrapper.find(NativeControl).exists()).toBeTruthy();
    });
});
