import "jest";

import * as React from "react";

import * as enzyme from "enzyme";

import { IPropMaker, PropMakerMetaComponent } from "../../meta/prop-maker";
import NativeDOMAdapter from "../../native-dom-adapter";

describe("PropMakerMetaComponent", () => {
    it("Should update child's props", () => {
        class PropMaker implements IPropMaker<{ href?: string }, { link: string }, {}> {
            public makeProps(childProps: { href: string }, props: { link: string }) {
                return {
                    href: props.link,
                };
            }

            public makeNativeDOMProps(childProps: { href: string }) {
                return {};
            }
        }
        class MetaImpl extends PropMakerMetaComponent<{ href?: string }, { link: string }, {}> {
            protected propMaker = new PropMaker();
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
        class PropMaker implements IPropMaker<{ href?: string }, { link: string, name: string }, {}> {
            public makeProps(childProps: { href: string }, props: { link: string, name: string }) {
                return {
                    href: props.link,
                };
            }

            public makeNativeDOMProps(childProps: { href: string }, props: { link: string, name: string }) {
                return {
                    attributes: {
                        "data-sitename": props.name,
                    },
                };
            }
        }
        class MetaImpl extends PropMakerMetaComponent<{ href?: string }, { link: string, name: string }, {}> {
            protected propMaker = new PropMaker();
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
        class PropMaker implements IPropMaker<{ href?: string }, { link: string }, {}> {
            public makeProps(childProps: { href: string }, props: { link: string }) {
                return {
                    href: props.link,
                };
            }

            public makeNativeDOMProps(childProps: { href: string }, props: { link: string }) {
                return {};
            }
        }
        class MetaImpl extends PropMakerMetaComponent<{ href?: string }, { link: string }, {}> {
            protected propMaker = new PropMaker();
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

    describe("simple()", () => {
        it("should make meta component for given prop maker", () => {
            class PropMaker implements IPropMaker<{ href?: string }, { link: string }, {}> {
                public makeProps(childProps: { href: string }, props: { link: string }) {
                    return {
                        href: props.link,
                    };
                }

                public makeNativeDOMProps(childProps: { href: string }) {
                    return {};
                }
            }
            const component = PropMakerMetaComponent.simple(new PropMaker(), "MetaImpl");

            const wrapper = enzyme.shallow(
                React.createElement(component, { link: "https://www.google.com" }, <a />),
            );

            expect(wrapper.equals(
                <NativeDOMAdapter>
                    <a href="https://www.google.com" />
                </NativeDOMAdapter>,
            )).toBeTruthy();
        });
    });
});
