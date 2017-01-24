/* @flow */
import React from 'react';

type FunctionComponent<P> = (props: P) => ?React.Element<any>;
type ClassComponent<D, P, S> = Class<React.Component<D, P, S>>;

export type ReactComponent<P> =
  ClassComponent<*, P, *> |
  FunctionComponent<P>;

export type Wrappable<P> = ReactComponent<P> | React.Element<P>;

export type WrapperProps<Props> = Props & {
  component: Wrappable<Props>
};
