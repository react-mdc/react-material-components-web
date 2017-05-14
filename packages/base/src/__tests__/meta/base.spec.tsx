import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import Meta from "../../meta/base";
import NativeDOMAdapter from "../../native-dom-adapter";

describe("Meta", () => {
    it("Should update child's props", () => {
        class MetaImpl extends Meta<{ href?: string }, { link: string }, {}> {
            protected renderProps(childProps: { href: string }) {
                return {
                    href: this.props.link,
                };
            }

            protected getNativeDOMProps(childProps: { href: string }) {
                return {};
            }
        }

        const wrapper = enzyme.shallow(
            <MetaImpl link="https://www.google.com">
                <a />
            </MetaImpl>,
        );

        expect(wrapper.equals(
            <NativeDOMAdapter>
                <a href="https://www.google.com" />
            </NativeDOMAdapter>,
        )).toBeTruthy();
    });

    it("Should update NativeDOMAdapter's props", () => {
        class MetaImpl extends Meta<{ href?: string }, { link: string, name: string }, {}> {
            protected renderProps(childProps: { href: string }) {
                return {
                    href: this.props.link,
                };
            }

            protected getNativeDOMProps(childProps: { href: string }) {
                return {
                    attributes: {
                        "data-sitename": this.props.name,
                    },
                };
            }
        }

        const wrapper = enzyme.shallow(
            <MetaImpl link="https://www.google.com" name="Google">
                <a />
            </MetaImpl>,
        );

        expect(wrapper.equals(
            <NativeDOMAdapter attributes={{ "data-sitename": "Google" }}>
                <a href="https://www.google.com" />
            </NativeDOMAdapter>,
        )).toBeTruthy();
    });

    it("should overwrite child's props if conflicted", () => {
        class MetaImpl extends Meta<{ href?: string }, { link: string }, {}> {
            protected renderProps(childProps: { href: string }) {
                return {
                    href: this.props.link,
                };
            }

            protected getNativeDOMProps(childProps: { href: string }) {
                return {};
            }
        }

        const wrapper = enzyme.shallow(
            <MetaImpl link="https://www.google.com">
                <a href="http://www.naver.com" />
            </MetaImpl>,
        );

        expect(wrapper.equals(
            <NativeDOMAdapter>
                <a href="https://www.google.com" />
            </NativeDOMAdapter>,
        )).toBeTruthy();
    });
});
