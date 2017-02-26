/* @flow */
import React from 'react';
import classNames from 'classnames';
import CodeMirror from 'react-codemirror';

import styles from './styles.css';

type Props = {
  className?: string,
  options?: any,
  mode?: string,
  lineNumbers?: boolean,
  readOnly?: boolean,
  theme?: string
};

function ifNull<T> (nullable: ?T, then: T): T {
  if (nullable == null) {
    return then;
  } else {
    return nullable;
  }
}

export default function Code (p: Props): React.Element<*> {
  let {
    className,
    options,
    mode,
    lineNumbers,
    readOnly,
    theme,
    ...props
  } = p;

  className = classNames(className, styles.code);
  let mergedOptions = {};
  mergedOptions['mode'] = ifNull(mode, 'jsx');
  mergedOptions['lineNumbers'] = ifNull(lineNumbers, true);
  mergedOptions['readOnly'] = ifNull(readOnly, true);
  mergedOptions['theme'] = ifNull(theme, 'dracula');
  options = {
    ...mergedOptions,
    ...options
  };
  return (
    <div className={className}>
      <CodeMirror options={options} {...props} />
    </div>
  );
}
