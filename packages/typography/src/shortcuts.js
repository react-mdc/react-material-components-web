/* @flow */
import React from 'react';

import type {Props as TextProps, BaseProps} from './text';
import Text from './text';

export function Display4<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'display4',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Display3<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'display3',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Display2<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'display2',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Display1<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'display1',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Headline<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'headline',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Title<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'title',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Subheading2<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'subheading2',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Subheading1<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'subheading1',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Body2<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'body2',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Body1<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'body1',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

export function Caption<P: {}> (props: BaseProps<P>): React.Element<TextProps<P>> {
  let {
    adjustMargin,
    className,
    wrap,
    ...p
  } = props;
  let newProps: TextProps<P> = {
    textStyle: 'caption',
    adjustMargin,
    className,
    wrap,
    ...p
  };
  return React.createElement(Text, newProps);
}

