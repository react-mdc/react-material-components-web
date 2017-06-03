import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Row from "../Row";

describe("Row", () => {
    it("Should have mdc-toolbar__row classname", () => {
        const wrapper = enzyme.mount(<Row />);
        expect(wrapper.hasClass("mdc-toolbar__row")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Row />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });
});
