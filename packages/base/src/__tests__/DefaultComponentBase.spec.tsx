import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import ClassNameMetaBase from "../ClassNameMetaBase";
import DefaultComponentBase from "../DefaultComponentBase";

describe("DefaultComponentBase", () => {
    it("Should render default component with meta", () => {
        class MetaImpl extends ClassNameMetaBase<{}, { bar?: boolean }, {}> {
            protected renderBaseClassName() {
                return "foo";
            }

            protected renderClassValues() {
                return [{
                    bar: this.props.bar,
                }];
            }
        }

        class Default extends DefaultComponentBase<{}, { bar?: boolean }, {}> {
            protected getMetaPropNames() {
                return ["bar"];
            }
            protected getMetaComponent() {
                return MetaImpl;
            }
            protected getChildComponent() {
                return "div";
            }
        }

        const wrapper = enzyme.mount(<Default bar={true} />);

        expect(wrapper.find("div").exists()).toBeTruthy();
        expect(wrapper.find("div").hasClass("foo")).toBeTruthy();
        expect(wrapper.find("div").hasClass("bar")).toBeTruthy();
    });
});
