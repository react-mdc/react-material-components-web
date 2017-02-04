/* @flow */
import React from 'react';

import type {EventHandler} from '../core/types';

export type AdapterNativeControlDelegate = {
  setCallback: (callback: AdapterNativeControlCallback) => void,
  unsetCallback: (callback: AdapterNativeControlCallback) => void,
  isChecked: () => ?boolean
};

export const AdapterNativeControlDelegatePropType = React.PropTypes.shape({
  setCallback: React.PropTypes.func.isRequired,
  unsetCallback: React.PropTypes.func.isRequired,
  isChecked: React.PropTypes.func.isRequired
});

export type AdapterNativeControlCallback = {
  setDefaultOnChange: (onChange: EventHandler) => void,
  getDOMNode: () => Element
};
