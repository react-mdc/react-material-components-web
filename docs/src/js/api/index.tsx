import * as React from "react";

import * as classNames from "classnames";

import * as styles from "./styles.css";

export type APIDescription = {
    [name: string]: string,
};

export type Methods = {
    [name: string]: string,
};

export type Props = {
    className?: string,
    name: string,
    value: string,
    items: [[string, string]] | { [name: string]: string },
};

export default function APITable(props: Props) {
    let {
    className,
        name,
        value,
        items,
        ...p,
  } = props;
    let itemArray: Array<[string, string]>;
    if (!(items instanceof Array)) {
        let convert: Array<[string, string]> = [];
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                convert.push([key, items[key]]);
            }
        }
        itemArray = convert;
    } else {
        itemArray = items;
    }
    const rows = itemArray
        .map(([itemName, description], i) => (
            <tr key={i}>
                <td>
                    <code>
                        {itemName}
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
