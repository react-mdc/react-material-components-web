import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Cell from "../Cell";

describe("Cell", () => {
    it("Should have mdc-layout-grid__cell classname", () => {
        const wrapper = enzyme.mount(<Cell />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Cell />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Cell span={1} />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--span-1")).toBeTruthy();

        wrapper = enzyme.mount(<Cell spanDesktop={2} />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--span-2-desktop")).toBeTruthy();

        wrapper = enzyme.mount(<Cell spanTablet={3} />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--span-3-tablet")).toBeTruthy();

        wrapper = enzyme.mount(<Cell spanPhone={4} />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--span-4-phone")).toBeTruthy();

        wrapper = enzyme.mount(<Cell order={5} />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--order-5")).toBeTruthy();

        wrapper = enzyme.mount(<Cell align="top" />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--align-top")).toBeTruthy();

        wrapper = enzyme.mount(<Cell align="middle" />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--align-middle")).toBeTruthy();

        wrapper = enzyme.mount(<Cell align="bottom" />);
        expect(wrapper.hasClass("mdc-layout-grid__cell")).toBeTruthy();
        expect(wrapper.hasClass("mdc-layout-grid__cell--align-bottom")).toBeTruthy();
    });
});
