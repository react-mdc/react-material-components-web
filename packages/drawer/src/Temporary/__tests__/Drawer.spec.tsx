import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import * as PropTypes from "prop-types";

import { FoundationAdapter } from "../adapter";
import Drawer from "../Drawer";

describe("Container", () => {
    it("Should have mdc-temporary-drawer__drawer classname", () => {
        const wrapper = enzyme.mount(<Drawer />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.hasClass("mdc-temporary-drawer__drawer")).toBeTruthy();
    });

    it("Should have nav element as default component", () => {
        const wrapper = enzyme.mount(<Drawer />, {
            context: {
                adapter: new FoundationAdapter(),
            },
            childContextTypes: {
                adapter: PropTypes.instanceOf(FoundationAdapter),
            },
        });
        expect(wrapper.find("nav").exists()).toBeTruthy();
    });

    it("Should update foundation with props", () => {
        // TODO: Add tests
    });
});
