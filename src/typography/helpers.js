/* @flow */
import type {TextStyle} from './types';
import {BASE_CLASS_NAME} from './constants';

export function classNameForTextStyle (style: TextStyle): string {
  return `${BASE_CLASS_NAME}--${style}`;
}
