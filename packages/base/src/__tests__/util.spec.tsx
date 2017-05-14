import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import * as util from "../util";

describe("includes()", () => {
    it("should check existence of item in array", () => {
        const array = [2, 4, 6, 8];
        expect(util.includes(array, 2)).toBe(true);
        expect(util.includes(array, 3)).toBe(false);

        expect(util.includes(array, 2, (left, right) => {
            return left % 2 === right % 2;
        })).toBe(true);
        expect(util.includes(array, 3, (left, right) => {
            return left % 2 === right % 2;
        })).toBe(false);
    });
});

describe("eventHandlerDecorator()", () => {
    it("should call wrapper after original handler", (done) => {
        let called = false;

        function wrapper() {
            if (called) {
                done();
            } else {
                fail("Original handler was not called!");
            }
        }

        function handler() {
            called = true;
        }

        const wrapped = util.eventHandlerDecorator(wrapper)(handler);

        const button = enzyme.mount(
            <button onClick={wrapped} />,
        );

        if (button == null) {
            fail("Button was not rendered!");
            return;
        }
        button.simulate("click");
    });

    it("should not call wrapper when default is prevented", (done) => {
        function wrapper() {
            fail("It should not be called!");
        }

        function handler(e: React.SyntheticEvent<any>) {
            e.preventDefault();
        }

        const wrapped = util.eventHandlerDecorator(wrapper)(handler);

        function proxy(e: React.SyntheticEvent<any>) {
            // We should call `done()` after handler ends.
            // So we proxy the event.
            wrapped(e);
            done();
        }

        const button = enzyme.mount(
            <button onClick={proxy} />,
        );

        if (button == null) {
            fail("Button was not rendered!");
            return;
        }

        button.simulate("click");
    });

    it("should call wrapper even if original handler is a kind of null", (done) => {
        function wrapper() {
            done();
        }

        const wrapped = util.eventHandlerDecorator(wrapper)(null);

        const button = enzyme.mount(
            <button onClick={wrapped} />,
        );

        if (button == null) {
            fail("Button was not rendered!");
            return;
        }

        button.simulate("click");
    });
});
