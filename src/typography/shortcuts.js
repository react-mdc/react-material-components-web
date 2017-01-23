/* @flow */
import React from 'react';

import type {TextStyle} from './types';
import type {BaseProps} from './text';
import Text from './text';

function wrapWithTextStyle (textStyle: TextStyle): ReactClass<BaseProps> {
  return (props: BaseProps) => (<Text textStyle={textStyle} {...props} />);
}

export const Display4 = wrapWithTextStyle('display4');
export const Display3 = wrapWithTextStyle('display3');
export const Display2 = wrapWithTextStyle('display2');
export const Display1 = wrapWithTextStyle('display1');
export const Headline = wrapWithTextStyle('headline');
export const Title = wrapWithTextStyle('title');
export const Subheading2 = wrapWithTextStyle('subheading2');
export const Subheading1 = wrapWithTextStyle('subheading1');
export const Body2 = wrapWithTextStyle('body2');
export const Body1 = wrapWithTextStyle('body1');
export const Caption = wrapWithTextStyle('caption');

