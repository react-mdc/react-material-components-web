import "jest";

import {
    BackgroundColor,
    Color,
    OnColor,
    TextColor,
} from "../types";
import * as utils from "../utils";

describe("classNameForColor()", () => {
    it("Should return color classname", () => {
        expect(utils.classNameForColor("primary")).toBe("mdc-theme--primary");
        expect(utils.classNameForColor("accent")).toBe("mdc-theme--accent");
        expect(utils.classNameForColor("light")).toBe("mdc-theme--light");
        expect(utils.classNameForColor("dark")).toBe("mdc-theme--dark");
    });
});

describe("classNameForBackground()", () => {
    it("Should return background color classname", () => {
        expect(utils.classNameForBackground("background")).toBe("mdc-theme--background-bg");
        expect(utils.classNameForBackground("primary")).toBe("mdc-theme--primary-bg");
        expect(utils.classNameForBackground("accent")).toBe("mdc-theme--accent-bg");
    });
});

describe("classNameForTextColor()", () => {
    it("Should return text color classname", () => {
        const textColors: [TextColor] = [
            "primary",
            "accent",
            "hint",
            "disabled",
            "icon",
        ];

        const onColors: [OnColor] = [
            "background",
            "primary",
            "accent",
            "light",
            "dark",
        ];

        textColors.forEach((textColor) => {
            onColors.forEach((onColor) => {
                expect(utils.classNameForTextColor(textColor, onColor))
                    .toBe(`mdc-theme--text-${textColor}-on-${onColor}`);
            });
        });
    });
});
