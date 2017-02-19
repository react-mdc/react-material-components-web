/* @flow */
import type {Color} from './types';
import {SURFACE_BASE_CLASS_NAME} from './constants';

export function classNameForColor (color: Color): string {
  return `${SURFACE_BASE_CLASS_NAME}--${color}`;
}
