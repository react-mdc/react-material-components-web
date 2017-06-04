import "jest";

import * as React from "react";

import * as enzyme from "enzyme";
import * as PropTypes from "prop-types";

import { FoundationAdapter } from "../adapter";
import Surface from "../Surface";

describe("Surface", () => {
    it("Should have mdc-dialog__surface classname", () => {
        const wrapper = enzyme.mount(<Surface />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.hasClass("mdc-dialog__surface")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Surface />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
