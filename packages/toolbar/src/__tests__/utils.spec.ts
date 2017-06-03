import "jest";

import * as utils from "../utils";

describe("Section", () => {
    it("Should render alignment classname", () => {
        expect(utils.classNameForSectionAlignment("start")).toBe("mdc-toolbar__section--align-start");
        expect(utils.classNameForSectionAlignment("end")).toBe("mdc-toolbar__section--align-end");
    });
});
