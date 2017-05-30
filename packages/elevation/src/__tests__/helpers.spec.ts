import "jest";

import * as helpers from "../helpers";
import { ZSpace } from "../types";

describe("classNameForZSpace", () => {
    it("Should return mdc-elevation--z{zSpace} as result", () => {
        for (let i = 0; i <= 24; i++) {
            expect(helpers.classNameForZSpace(i as ZSpace)).toBe(`mdc-elevation--z${i}`);

        }
    });
});
