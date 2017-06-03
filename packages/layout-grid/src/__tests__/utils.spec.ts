import "jest";

import { GUTTER_CSS_VARIABLE, MARGIN_CSS_VARIABLE } from "../constants";
import { GridNumber, Screen } from "../types";
import * as utils from "../utils";

describe("classNameForCellSpan()", () => {
    it("Should return span classname", () => {
        for (let i = 1; i <= 12; i++) {
            expect(utils.classNameForCellSpan(i as GridNumber)).toBe(
                `mdc-layout-grid__cell--span-${i}`,
            );
        }
    });

    it("Should return span classname with screens", () => {
        (["desktop", "phone", "tablet"] as [Screen]).forEach((screen) => {
            for (let i = 1; i <= 12; i++) {
                expect(utils.classNameForCellSpan(i as GridNumber, screen)).toBe(
                    `mdc-layout-grid__cell--span-${i}-${screen}`,
                );
            }
        });
    });
});

describe("classNameForCellOrder()", () => {
    it("Should return order classname", () => {
        for (let i = 1; i <= 12; i++) {
            expect(utils.classNameForCellOrder(i as GridNumber)).toBe(
                `mdc-layout-grid__cell--order-${i}`,
            );
        }
    });
});

describe("classNameForCellAlignment()", () => {
    it("Should return align classname", () => {
        expect(utils.classNameForCellAlignment("top")).toBe(
            "mdc-layout-grid__cell--align-top",
        );
        expect(utils.classNameForCellAlignment("middle")).toBe(
            "mdc-layout-grid__cell--align-middle",
        );
        expect(utils.classNameForCellAlignment("bottom")).toBe(
            "mdc-layout-grid__cell--align-bottom",
        );
    });
});
