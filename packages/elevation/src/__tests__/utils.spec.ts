import "jest";

import { ZSpace } from "../types";
import * as utils from "../utils";

describe("classNameForZSpace", () => {
    it("Should return mdc-elevation--z{zSpace} as result", () => {
        for (let i = 0; i <= 24; i++) {
            expect(utils.classNameForZSpace(i as ZSpace)).toBe(`mdc-elevation--z${i}`);

        }
    });
});
