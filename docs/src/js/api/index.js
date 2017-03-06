/* @flow */
import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

export type APIDescription = {
  [string]: string
};

export type Methods = {
  [string]: string
};

export type Props = {
  className?: string,
  name: string,
  value: string,
  items: [[string, string]] | {[string]: string}
};

export default function APITable (props: Props): React.Element<*> {
  let {
    className,
    name,
    value,
    items,
    ...p
  } = props;
  if (!(items instanceof Array)) {
    let convert = [];
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        convert.push([key, items[key]]);
      }
    }
    items = convert;
  }
  const rows = items
        .map(([name, description], i) => (
          <tr key={i}>
            <td>
              <code>
                {name}
              </code>
            </td>
            <td>
              {description}
            </td>
          </tr>
        ));
  return (
    <table className={classNames(styles.table, className)} {...p}>
      <thead>
        <tr>
          <th>{name}</th>
          <th>{value}</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
