import "jest";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactTestUtils from "react-dom/test-utils";

import * as util from "../util";

describe("util", () => {
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

            const button = ReactTestUtils.renderIntoDocument(
                <button onClick={wrapped} />,
            );

            if (button == null) {
                fail("Button was not rendered!");
                return;
            }
            ReactTestUtils.Simulate.click(button);
        });
    });
});
