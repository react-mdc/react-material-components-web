import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Background from "../Background";
import Checkmark from "../Checkmark";
import Container from "../Container";
import Mixedmark from "../Mixedmark";
import NativeControl from "../NativeControl";
import Simple from "../Simple";

describe("Simple", () => {
    it("Should render common component composition", () => {
        const wrapper = enzyme.shallow(<Simple />);
        expect(wrapper.find(Background).exists()).toBeTruthy();
        expect(wrapper.find(Checkmark).exists()).toBeTruthy();
        expect(wrapper.find(Container).exists()).toBeTruthy();
        expect(wrapper.find(Mixedmark).exists()).toBeTruthy();
        expect(wrapper.find(NativeControl).exists()).toBeTruthy();
    });
});
