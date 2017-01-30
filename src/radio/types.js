/* @flow */
import React from 'react';

export type AdapterNativeControlDelegate = {
  onNativeControlMount: (el: Element) => void,
  onNativeControlUnmount: () => void
};

export const AdapterNativeControlDelegatePropType = React.PropTypes.shape({
  onNativeControlMount: React.PropTypes.func.isRequired,
  onNativeControlUnmount: React.PropTypes.func.isRequired
});
