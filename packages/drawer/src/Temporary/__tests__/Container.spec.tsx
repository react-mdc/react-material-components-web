import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Container from "../Container";
import Drawer from "../Drawer";

describe("Container", () => {
    it("Should have mdc-temporary-drawer classname", () => {
        const wrapper = enzyme.mount(
            <Container>
                <Drawer />{/* Drawer is required component of Container */}
            </Container>,
        );
        expect(wrapper.hasClass("mdc-temporary-drawer")).toBeTruthy();
    });

    it("Should have aside element as default component", () => {
        const wrapper = enzyme.mount(
            <Container>
                <Drawer />{/* Drawer is required component of Container */}
            </Container>,
        );
        expect(wrapper.find("aside").exists()).toBeTruthy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
