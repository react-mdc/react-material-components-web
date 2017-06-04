import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import ClassNameMetaBase from "../ClassNameMetaBase";
import NativeDOMAdapter from "../NativeDOMAdapter";

describe("ClassNameMetaBase", () => {
    it("Should render base classname", () => {
        class MetaImpl extends ClassNameMetaBase<{}, {}, {}> {
            protected renderBaseClassName() {
                return "foo";
            }
        }

        const wrapper = enzyme.shallow(
            <MetaImpl>
                <a />
            </MetaImpl>,
        );

        expect(wrapper.find("a").hasClass("foo")).toBeTruthy();
    });

    it("Should render class values", () => {
        class MetaImpl extends ClassNameMetaBase<{}, {}, {}> {
            protected renderClassValues() {
                return [{
                    foo: true,
                    bar: false,
                    baz: undefined,
                }, "qux"];
            }
        }

        const wrapper = enzyme.shallow(
            <MetaImpl>
                <a />
            </MetaImpl>,
        );

        expect(wrapper.find("a").hasClass("foo")).toBeTruthy();
        expect(wrapper.find("a").hasClass("bar")).toBeFalsy();
        expect(wrapper.find("a").hasClass("baz")).toBeFalsy();
        expect(wrapper.find("a").hasClass("qux")).toBeTruthy();
    });

    it("Should preserve meta's className", () => {
        class MetaImpl extends ClassNameMetaBase<{}, { className: string }, {}> {
            protected renderBaseClassName() {
                return "foo";
            }
        }

        const wrapper = enzyme.shallow(
            <MetaImpl className="meta">
                <a />
            </MetaImpl>,
        );

        expect(wrapper.find("a").hasClass("meta")).toBeTruthy();
        expect(wrapper.find("a").hasClass("foo")).toBeTruthy();
    });

    it("Should preserve child's className", () => {
        class MetaImpl extends ClassNameMetaBase<{ className: string }, { className: string }, {}> {
            protected renderBaseClassName() {
                return "foo";
            }
        }

        const wrapper = enzyme.shallow(
            <MetaImpl className="meta">
                <a className="child" />
            </MetaImpl>,
        );

        expect(wrapper.find("a").hasClass("meta")).toBeTruthy();
        expect(wrapper.find("a").hasClass("foo")).toBeTruthy();
        expect(wrapper.find("a").hasClass("child")).toBeTruthy();
    });
});
