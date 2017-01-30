/* @flow */
import type {
  Color,
  BackgroundColor,
  TextColor,
  OnColor
} from './types';
import {BASE_CLASS_NAME} from './constants';

export function classNameForTextColor (textColor: TextColor, onColor: OnColor): string {
  return `${BASE_CLASS_NAME}--text-${textColor}-on-${onColor}`;
}

export function classNameForColor (color: Color): string {
  return `${BASE_CLASS_NAME}--${color}`;
}

export function classNameForBackground (backgroundColor: BackgroundColor): string {
  return `${BASE_CLASS_NAME}--${backgroundColor}-bg`;
}
