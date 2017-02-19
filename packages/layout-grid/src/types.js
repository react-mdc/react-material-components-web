/* @flow */
export type GridNumber =
  1 | 2 | 3 | 4 |
  5 | 6 | 7 | 8 |
  9 | 10 | 11 | 12;

export type Screen =
  'desktop' |
  'phone' |
  'tablet';

export type Alignment =
  'top' |
  'middle' |
  'bottom';

type MarginAndGutter = number | string;

export type Margin = MarginAndGutter;

export type Gutter = MarginAndGutter;
