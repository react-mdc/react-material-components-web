import * as React from "react";

export type Config = {};

export type ReactComponent<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

export type Wrappable<P> = ReactComponent<P> | React.ReactElement<P>;
