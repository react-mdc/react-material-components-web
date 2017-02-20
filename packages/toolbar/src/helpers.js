/* @flow */
import type {Alignment} from './types';
import {SECTION_BASE_CLASS_NAME} from './constants';

export function classNameForSectionAlignment (alignment: Alignment): string {
  return `${SECTION_BASE_CLASS_NAME}--align-${alignment}`;
}
