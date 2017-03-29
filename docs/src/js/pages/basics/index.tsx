import * as React from "react";

import {
    Body2,
    Display1,
    Text,
    Title,
} from "@react-mdc/typography";

import Code from "app/js/components/code";
import PageContainer from "app/js/components/page-container";
import PageTitle from "app/js/components/page-title";

function ExternalLink(props: React.HTMLProps<HTMLAnchorElement>) {
    return <a target="_blank" {...props} />;
}

const EL = ExternalLink;

export default function () {
    return (
        <PageContainer>
            <PageTitle>
                Basics
            </PageTitle>

            <Display1>Material Components Web</Display1>
            <Body2>
                This library is
                React wrapper of <EL href="https://github.com/material-components/material-components-web">
                    Meterial Components Web (MDC)
                </EL> Which is Meterial Design Framework made by Google.

                It wraps MDC by React style and it's fully customizable.
            </Body2>

            <Display1>Design Goals</Display1>
            <Body2>
                The design goals of this library are
            </Body2>

            <Text.Meta textStyle="body2">
                <ul>
                    <li>Typing strictly with <EL href="http://typescriptlang.org">TypeScript</EL></li>
                    <li>Fully customizable</li>
                    <li>Packaging Independently</li>
                </ul>
            </Text.Meta>

            <Body2>
                Followings are detailed description of design goals.
            </Body2>

            <Title>TypeScript</Title>
            <Body2>
                Is was fully written by TypeScript. So it provides <code>.d.ts</code> files to provide
                typings.
            </Body2>

            <Title>Customizable - Stylesheet</Title>
            <Body2>
                It doesn't provide any CSS files for MDC. Because, MDC can be customized with SASS (or CSS).
                So you have to provide a CSS files to HTML yourself.
            </Body2>

            <Title>Customizable - Meta Components</Title>
            <Body2>
                MDC is basically provides functionalities by CSS classes, and Foundation.
                Not specific HTML elements.
                So almost every components can be rendered with more than two HTML elements.
            </Body2>
            <Body2>
                So we made each components using meta components. You can customize HTML elements by them.
            </Body2>
            <Body2>
                For instance, for <code>Button</code> component, it renders <code>button</code> element by default.
                But if we use <code>Button.Meta</code> with <code>anchor</code> element,
                it renders <code>anchor</code> element instead of <code>button</code> element.
            </Body2>
            <Code value={`
<Button>
    Submit
</Button>
// => <button class="mdc-button">Submit</button>
<Button.Meta>
    <a href="/submit">
        Submit
    </a>
</Button.Meta>
// => <a href="/submit" class="mdc-button">Submit</a>
`.trim()} />
            <Body2>
                Most of all components have Meta component. If it doesn't we will mark on this document.
            </Body2>

            <Title>Packaging</Title>
            <Body2>
                Just like MDC, it provides each components in individual components.
                If you want to use button component, then just install <code>@react-mdc/button</code>
            </Body2>

            <Code mode="shell" value={`npm install --save @react-mdc/button`} />

            <Display1>End</Display1>
            <Body2>
                These are basics of React Metarial Components Web.
                You can find more details of components from left-top menu.
            </Body2>
        </PageContainer>
    );
}
