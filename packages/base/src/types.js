/* @flow */
import React from 'react';

type FunctionComponent<P> = (props: P) => ?React.Element<any>;
type ClassComponent<D, P, S> = Class<React.Component<D, P, S>>;

export type Config = {};

export type ReactComponent<P: Config> =
  ClassComponent<*, P, *> |
  FunctionComponent<P>;

export type Wrappable<P: Config> = ReactComponent<P> | React.Element<P>;

export type EventHandler = (evt: *, ...args: Array<void>) => void;
