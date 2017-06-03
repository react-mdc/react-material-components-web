import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";

describe("Container", () => {
    it("Should have mdc-dialog__footer classname", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.hasClass("mdc-dialog__footer")).toBeTruthy();
    });

    it("Should have footer element as default component", () => {
        const wrapper = enzyme.mount(<Container />);
        expect(wrapper.find("footer").exists()).toBeTruthy();
    });
});
