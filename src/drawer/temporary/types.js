/* @flow */
import React from 'react';

export type AdapterDrawerDelegate = {
  onDrawerMount: (el: Element) => void,
  onDrawerUnmount: () => void,
  addAdapterDrawerCallback: (callback: AdapterDrawerCallback) => void,
  removeAdapterDrawerCallback: (callback: AdapterDrawerCallback) => void
};

export const AdapterDrawerDelegatePropType = React.PropTypes.shape({
  onDrawerMount: React.PropTypes.func.isRequired,
  onDrawerUnmount: React.PropTypes.func.isRequired,
  addAdapterDrawerCallback: React.PropTypes.func.isRequired,
  removeAdapterDrawerCallback: React.PropTypes.func.isRequired
});

export type AdapterDrawerCallback = {
  setTranslateX: (value: number) => void
};
