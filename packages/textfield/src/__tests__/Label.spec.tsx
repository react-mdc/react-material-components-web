import "jest";

import * as React from "react";

import * as enzyme from "enzyme";
import * as PropTypes from "prop-types";

import { FoundationAdapter } from "../adapter";
import Label from "../Label";

describe("Label", () => {
    it("Should have mdc-textfield__label classname", () => {
        const wrapper = enzyme.mount(<Label />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.hasClass("mdc-textfield__label")).toBeTruthy();
    });

    it("Should have label element as default component", () => {
        const wrapper = enzyme.mount(<Label />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.find("label").exists()).toBeTruthy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
