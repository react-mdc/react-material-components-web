import "jest";

import * as React from "react";

import * as enzyme from "enzyme";
import * as PropTypes from "prop-types";

import { FoundationAdapter } from "../adapter";
import Input from "../Input";

describe("Input", () => {
    it("Should have mdc-textfield__input classname", () => {
        const wrapper = enzyme.mount(<Input />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.hasClass("mdc-textfield__input")).toBeTruthy();
    });

    it("Should have input element as default component", () => {
        const wrapper = enzyme.mount(<Input />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.find("input").exists()).toBeTruthy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
