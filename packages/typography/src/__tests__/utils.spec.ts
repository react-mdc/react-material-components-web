import "jest";

import * as utils from "../utils";

describe("classNameForTextStyle()", () => {
    it("Should return text style classname", () => {
        expect(utils.classNameForTextStyle("display4")).toBe("mdc-typography--display4");
        expect(utils.classNameForTextStyle("display3")).toBe("mdc-typography--display3");
        expect(utils.classNameForTextStyle("display2")).toBe("mdc-typography--display2");
        expect(utils.classNameForTextStyle("display1")).toBe("mdc-typography--display1");
        expect(utils.classNameForTextStyle("headline")).toBe("mdc-typography--headline");
        expect(utils.classNameForTextStyle("title")).toBe("mdc-typography--title");
        expect(utils.classNameForTextStyle("subheading2")).toBe("mdc-typography--subheading2");
        expect(utils.classNameForTextStyle("subheading1")).toBe("mdc-typography--subheading1");
        expect(utils.classNameForTextStyle("body2")).toBe("mdc-typography--body2");
        expect(utils.classNameForTextStyle("body1")).toBe("mdc-typography--body1");
        expect(utils.classNameForTextStyle("caption")).toBe("mdc-typography--caption");
    });
});
