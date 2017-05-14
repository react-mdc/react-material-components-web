import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Meta from "../../meta/base";

describe("Meta", () => {
    it("Should update child's props", () => {
        class MetaImpl extends Meta<{href?: string}, {link: string}, {}> {
            protected renderProps(childProps: {href: string}) {
                return {
                    href: this.props.link,
                };
            }

            protected getNativeDOMProps(childProps: {href: string}) {
                return {};
            }
        }
        const wrapper = enzyme.mount(
            <MetaImpl link="https://www.google.com">
                <a />
            </MetaImpl>,
        );

        const node = wrapper.getDOMNode();
        expect(node.tagName.toLowerCase()).toBe("a");
        expect(node.getAttribute("href")).toBe("https://www.google.com");
    });
});
