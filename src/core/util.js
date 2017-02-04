/* @flow */
/**
 * Common utilities
 */

type EventHandler = (evt: SyntheticEvent, ...args: Array<void>) => void;

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
export function eventHandlerDecorator (defaultHandler: EventHandler): ?EventHandler => EventHandler {
  return (handler: ?EventHandler) => (evt: SyntheticEvent, ...args: Array<void>) => {
    if (handler != null) {
      handler(evt, ...args);
    }
    if (!evt.isDefaultPrevented()) {
      defaultHandler(evt, ...args);
    }
  };
}
