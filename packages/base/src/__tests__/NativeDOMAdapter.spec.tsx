import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import NativeDOMAdapter from "../NativeDOMAdapter";

describe("NativeDOMAdapter", () => {
    it("Should render native DOM given as child", () => {
        const wrapper = enzyme.mount(
            <NativeDOMAdapter>
                <a />
            </NativeDOMAdapter>,
        );

        const node = wrapper.getDOMNode();
        expect(node.tagName.toLowerCase()).toBe("a");
    });

    it("Should set attributes to DOM", () => {
        const wrapper = enzyme.mount(
            <NativeDOMAdapter attributes={{ "data-link": "http://www.daum.net" }}>
                <a />
            </NativeDOMAdapter>,
        );

        const node = wrapper.getDOMNode();
        expect(node.getAttribute("data-link")).toBe("http://www.daum.net");
    });

    it("Should unset removed attributes to DOM", () => {
        const rootNode = document.createElement("div");
        const wrapper = enzyme.mount(
            <NativeDOMAdapter attributes={{
                "data-link": "http://www.daum.net",
                "data-sitename": "Daum",
            }}>
                <a />
            </NativeDOMAdapter>,
            rootNode,
        );

        const node = wrapper.getDOMNode();
        expect(node.getAttribute("data-link")).toBe("http://www.daum.net");
        expect(node.getAttribute("data-sitename")).toBe("Daum");

        // Update
        wrapper.setProps({
            attributes: {
                "data-sitename": "Daum",
            },
        });
        expect(node.hasAttribute("data-link")).toBeFalsy();
        expect(node.getAttribute("data-sitename")).toBe("Daum");
    });

    /*
        Many DOM emulators does not support arbitrary CSS property.
        So we use known css properties for testing instead of
        CSS variables like `--react-mdc-foo`
    */
    it("should render css variable into styles", () => {
        // Many DOM emulators does not support arbitrary CSS property.
        // So we use known css properties for testing instead of
        // CSS variables like `--react-mdc-foo`
        const wrapper = enzyme.mount(
            <NativeDOMAdapter cssVariables={{
                display: "123",
            }}>
                <div />
            </NativeDOMAdapter>,
        );

        const node = wrapper.getDOMNode() as HTMLDivElement;
        expect(node.style.getPropertyValue("display")).toBe("123");
    });

    it("should unset removed css variable from styles", () => {
        const wrapper = enzyme.mount(
            <NativeDOMAdapter cssVariables={{
                display: "123",
                padding: "0px",
            }}>
                <div />
            </NativeDOMAdapter>,
        );

        const node = wrapper.getDOMNode() as HTMLDivElement;
        expect(node.style.getPropertyValue("display")).toBe("123");
        expect(node.style.getPropertyValue("padding")).toBe("0px");

        // Update
        wrapper.setProps({
            cssVariables: {
                padding: "0px",
            },
        });
        expect(node.style.getPropertyValue("padding")).toBe("0px");
        expect(node.style.getPropertyValue("display")).toBe("");
    });

    it("should add native event listeners by order", (done) => {
        let firstCalled = false;
        const first = () => {
            firstCalled = true;
        };
        const second = () => {
            if (!firstCalled) {
                fail("First listener not called!");
            } else {
                done();
            }
        };

        const wrapper = enzyme.mount(
            <NativeDOMAdapter eventListeners={{
                click: [first, second],
            }}>
                <div />
            </NativeDOMAdapter>,
        );

        const node = wrapper.getDOMNode() as HTMLDivElement;

        const event = new MouseEvent("click");
        node.dispatchEvent(event);
    });

    it("should remove removed native event listeners from node", (done) => {
        let firstCalled = false;
        let secondCalled = false;
        const first = () => {
            if (firstCalled) {
                fail("First should not be called twice!");
            }
            firstCalled = true;
        };
        const second = () => {
            if (!firstCalled) {
                fail("First listener not called!");
            }
            if (secondCalled) {
                done();
            }
            secondCalled = true;
        };

        const wrapper = enzyme.mount(
            <NativeDOMAdapter eventListeners={{
                click: [first, second],
            }}>
                <div />
            </NativeDOMAdapter>,
        );

        const node = wrapper.getDOMNode() as HTMLDivElement;

        node.dispatchEvent(new MouseEvent("click"));

        wrapper.setProps({
            eventListeners: {
                click: [second],
            },
        });

        node.dispatchEvent(new MouseEvent("click"));
    });
});
