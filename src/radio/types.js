/* @flow */
import React from 'react';

import type {EventHandler} from '../core/types';

export type AdapterNativeControlDelegate = {
  setCallback: (callback: AdapterNativeControlCallback) => void,
  unsetCallback: (callback: AdapterNativeControlCallback) => void
};

export const AdapterNativeControlDelegatePropType = React.PropTypes.shape({
  setCallback: React.PropTypes.func.isRequired,
  unsetCallback: React.PropTypes.func.isRequired
});

export type AdapterNativeControlCallback = {
  setDefaultOnChange: (onChange: EventHandler) => void,
  getDOMNode: () => Element
};
