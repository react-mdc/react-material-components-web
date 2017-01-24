/* @flow */
import type {TextColor, MainColor, ColorTheme} from './types';
import {CLASS_PREFIX} from './constants';

type OnColor = MainColor | ColorTheme;

export function classNameForTextColor (textColor: TextColor, onColor: ?OnColor): string {
  let on: string;
  if (onColor == null) {
    on = 'background';
  } else {
    on = onColor;
  }
  return `${CLASS_PREFIX}--text-${textColor}-on-${on}`;
}

export function classNameForColor (color: MainColor | ColorTheme): string {
  return `${CLASS_PREFIX}--${color}`;
}

export function classNameForBackground (backgroundColor: ?MainColor): string {
  if (backgroundColor == null) {
    return `${CLASS_PREFIX}--background`;
  }
  return `${CLASS_PREFIX}--${backgroundColor}-bg`;
}
