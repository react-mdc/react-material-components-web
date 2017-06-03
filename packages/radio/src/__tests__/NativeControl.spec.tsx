import "jest";

import * as React from "react";

import * as enzyme from "enzyme";
import * as PropTypes from "prop-types";

import { FoundationAdapter } from "../adapter";
import NativeControl from "../NativeControl";

describe("NativeControl", () => {
    it("Should have mdc-radio__native-control classname", () => {
        const wrapper = enzyme.mount(<NativeControl />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.hasClass("mdc-radio__native-control")).toBeTruthy();
    });

    it("Should have input element as default component", () => {
        const wrapper = enzyme.mount(<NativeControl />, {
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
