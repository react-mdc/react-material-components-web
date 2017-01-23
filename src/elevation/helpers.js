/* @flow */
import type {ZSpace} from './types';
import {CLASS_PREFIX} from './constants';

export function classNameForZSpace (zSpace: ZSpace): string {
  if (zSpace < 0 || zSpace > 24) {
    throw new TypeError('z-space should be a number between 0-24');
  }
  return `${CLASS_PREFIX}--z${zSpace}`;
}
