import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import StartDetail from "../StartDetail";

describe("StartDetail", () => {
    it("Should have mdc-list-item__start-detail classname", () => {
        const wrapper = enzyme.mount(<StartDetail />);
        expect(wrapper.hasClass("mdc-list-item__start-detail")).toBeTruthy();
    });

    it("Should have span element as default component", () => {
        const wrapper = enzyme.mount(<StartDetail />);
        expect(wrapper.find("span").exists()).toBeTruthy();
    });
});
