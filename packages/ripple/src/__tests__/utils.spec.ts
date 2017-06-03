import "jest";

import { Color } from "../types";
import * as utils from "../utils";

describe("classNameForColor", () => {
    it("Should return mdc-ripple-surface--{color} as result", () => {
        expect(utils.classNameForColor("primary")).toBe("mdc-ripple-surface--primary");
        expect(utils.classNameForColor("accent")).toBe("mdc-ripple-surface--accent");
    });
});
