/**
 * Common utilities
 */
import * as React from "react";

/**
 * Decorate event handler function with default handler.
 * Default handler will not be called when decorated handler prevents default.
 *
 * Example:
 *
 *     let {onClick} = this.props;
 *     onClick = eventHandlerDecorator(this.handleClick)(onClick);
 *
 * @param handler a default event handler.
 *
 * @return event handler decorator with default functionally.
 *         decorated function can be null
 */
export function eventHandlerDecorator<T>(defaultHandler: React.ReactEventHandler<T>):
    (target: React.ReactEventHandler<T> | null) => React.ReactEventHandler<T> {
    return (handler: React.ReactEventHandler<T> | null)
        : React.ReactEventHandler<T> => (evt: React.SyntheticEvent<T>) => {
            if (handler != null) {
                handler(evt);
            }
            if (!evt.isDefaultPrevented()) {
                defaultHandler(evt);
            }
        };
}

/**
 * Array inclusion tester
 */
export function includes<T>(array: T[], item: T, predicate: (left, right) => boolean = (x, y) => x === y): boolean {
    // tslint:disable:prefer-for-of
    for (let i = 0; i < array.length; i++) {
        const itemAtIndex = array[i];
        if (predicate(item, itemAtIndex)) {
            return true;
        }
    }
    return false;
}
