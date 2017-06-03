import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import MediaItem from "../MediaItem";

describe("MediaItem", () => {
    it("Should have mdc-card__media-item classname", () => {
        const wrapper = enzyme.mount(<MediaItem />);
        expect(wrapper.hasClass("mdc-card__media-item")).toBeTruthy();
    });

    it("Should have img element as default component", () => {
        const wrapper = enzyme.mount(<MediaItem />);
        expect(wrapper.find("img").exists()).toBeTruthy();
    });

    it("Should render property classnames", () => {
        let wrapper;

        wrapper = enzyme.mount(<MediaItem size={1.5} />);
        expect(wrapper.hasClass("mdc-card__media-item")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__media-item--1dot5x")).toBeTruthy();

        wrapper = enzyme.mount(<MediaItem size={2} />);
        expect(wrapper.hasClass("mdc-card__media-item")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__media-item--2x")).toBeTruthy();

        wrapper = enzyme.mount(<MediaItem size={3} />);
        expect(wrapper.hasClass("mdc-card__media-item")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__media-item--3x")).toBeTruthy();

        wrapper = enzyme.mount(<MediaItem />);
        expect(wrapper.hasClass("mdc-card__media-item")).toBeTruthy();
        expect(wrapper.hasClass("mdc-card__media-item--1dot5x")).toBeFalsy();
        expect(wrapper.hasClass("mdc-card__media-item--2x")).toBeFalsy();
        expect(wrapper.hasClass("mdc-card__media-item--3x")).toBeFalsy();
    });
});
