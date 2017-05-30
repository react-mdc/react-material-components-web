import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Elevation from "..";

describe("Elevation", () => {
    it("Should have mdc-elevation--z{zSpace} classname", () => {
        for (let i = 0; i <= 24; i++) {
            const wrapper = enzyme.mount(<Elevation zSpace={i as any} />);
            expect(wrapper.hasClass(`mdc-elevation--z${i}`)).toBeTruthy();

        }
    });

    it("Should have div element as default component", () => {
        const wrapper = enzyme.mount(<Elevation zSpace={10} />);
        expect(wrapper.find("div").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<Elevation zSpace={10} transition />);
        expect(wrapper.hasClass("mdc-elevation--z10")).toBeTruthy();
        expect(wrapper.hasClass("mdc-elevation-transition")).toBeTruthy();
    });
});
