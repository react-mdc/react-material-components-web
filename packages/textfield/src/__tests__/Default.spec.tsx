import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";
import Default from "../Default";
import Input from "../Input";

describe("Default", () => {
    it("Should render common component composition", () => {
        const wrapper = enzyme.shallow(<Default />).shallow();
        expect(wrapper.find(Container).exists()).toBeTruthy();
        expect(wrapper.find(Input).exists()).toBeTruthy();
    });
});
