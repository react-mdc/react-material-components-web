import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Background from "../Background";
import Container from "../Container";
import InnerCircle from "../InnerCircle";
import NativeControl from "../NativeControl";
import OuterCircle from "../OuterCircle";
import Simple from "../Simple";

describe("Simple", () => {
    it("Should render common component composition", () => {
        const wrapper = enzyme.shallow(<Simple />);
        expect(wrapper.find(Background).exists()).toBeTruthy();
        expect(wrapper.find(Container).exists()).toBeTruthy();
        expect(wrapper.find(InnerCircle).exists()).toBeTruthy();
        expect(wrapper.find(NativeControl).exists()).toBeTruthy();
        expect(wrapper.find(OuterCircle).exists()).toBeTruthy();
    });
});
