import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Checkmark from "../Checkmark";

describe("Checkmark", () => {
    it("Should render checkmark SVG", () => {
        const wrapper = enzyme.shallow(<Checkmark />);
        expect(wrapper.find("svg").exists()).toBeTruthy();
    });
});
