/* @flow */
import type {TextStyle} from './types';
import {CLASS_PREFIX} from './constants';

export function classNameForTextStyle (style: TextStyle): string {
  return `${CLASS_PREFIX}--${style}`;
}
