import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";
import Input from "../Input";
import Simple from "../Simple";

describe("Simple", () => {
    it("Should render common component composition", () => {
        const wrapper = enzyme.shallow(<Simple />).shallow();
        expect(wrapper.find(Container).exists()).toBeTruthy();
        expect(wrapper.find(Input).exists()).toBeTruthy();
    });
});
