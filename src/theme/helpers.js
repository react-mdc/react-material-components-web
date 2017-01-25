/* @flow */
import type {
  Color,
  BackgroundColor,
  TextColor,
  OnColor
} from './types';
import {CLASS_PREFIX} from './constants';

export function classNameForTextColor (textColor: TextColor, onColor: OnColor): string {
  return `${CLASS_PREFIX}--text-${textColor}-on-${onColor}`;
}

export function classNameForColor (color: Color): string {
  return `${CLASS_PREFIX}--${color}`;
}

export function classNameForBackground (backgroundColor: BackgroundColor): string {
  return `${CLASS_PREFIX}--${backgroundColor}-bg`;
}
