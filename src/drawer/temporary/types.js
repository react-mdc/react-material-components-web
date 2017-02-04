/* @flow */
import React from 'react';

export type AdapterDrawerDelegate = {
  setCallback: (callback: AdapterDrawerCallback) => void,
  unsetCallback: (callback: AdapterDrawerCallback) => void
};

export const AdapterDrawerDelegatePropType = React.PropTypes.shape({
  setCallback: React.PropTypes.func.isRequired,
  unsetCallback: React.PropTypes.func.isRequired
});

export type AdapterDrawerCallback = {
  setTranslateX: (value: number) => void,
  getDOMNode: () => Element
};
