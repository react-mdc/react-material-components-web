import * as React from "react";

import { Wrappable } from "./types";

export default class Wrapper<WP, P, S> extends React.Component<P, S> {
  public render () {
    let wrap = this.renderWrap();
    let props = this.renderProps();

    if (React.isValidElement(wrap)) {
      return React.cloneElement(wrap, props);
    } else {
      // Force type cast
      let wrapComponent = wrap as React.ComponentClass<WP>;
      return React.createElement(wrapComponent, props);
    }
  }

  protected renderProps (): any {
    throw new Error("Not implemented");
  }

  protected renderWrap (): Wrappable<WP> {
    throw new Error("Not implemented");
  }
}
