/* @flow */
import type {ZSpace} from './types';
import {CLASS_PREFIX} from './constants';

export function classNameForZSpace (zSpace: ZSpace): string {
  return `${CLASS_PREFIX}--z${zSpace}`;
}
