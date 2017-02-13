/* @flow */
/**
 * Foundation adapters.
 */

/**
 * Ripple adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class RippleAdapter {
  browserSupportsCssVars (): boolean {
    return false;
  }
  isUnbounded (): boolean {
    return false;
  }
  isSurfaceActive (): boolean {
    return false;
  }
  addClass (_className: string) {
  }
  removeClass (_className: string) {
  }
  registerInteractionHandler (_evtType: string, _handler: EventListener) {
  }
  deregisterInteractionHandler (_evtType: string, _handler: EventListener) {
  }
  registerResizeHandler (_handler: EventListener) {
  }
  deregisterResizeHandler (_handler: EventListener) {
  }
  updateCssVariable (_varName: string, _value: ?string) {
  }
  computeBoundingRect (): ?ClientRect {
    return null;
  }
  getWindowPageOffset (): {x: number, y: number} {
    return {x: 0, y: 0};
  }
}

/**
 * Composite adapter for MDCRippleFoundation
 */
export class FoundationAdapter {
  rippleAdapter: RippleAdapter

  constructor () {
    this.rippleAdapter = new RippleAdapter();
  }
  setRippleAdapter (rippleAdapter: RippleAdapter) {
    this.rippleAdapter = rippleAdapter;
  }
  browserSupportsCssVars (): boolean {
    return this.rippleAdapter.browserSupportsCssVars();
  }
  isUnbounded (): boolean {
    return this.rippleAdapter.isUnbounded();
  }
  isSurfaceActive (): boolean {
    return this.rippleAdapter.isSurfaceActive();
  }
  addClass (className: string) {
    this.rippleAdapter.addClass(className);
  }
  removeClass (className: string) {
    this.rippleAdapter.removeClass(className);
  }
  registerInteractionHandler (evtType: string, handler: EventListener) {
    this.rippleAdapter.registerInteractionHandler(evtType, handler);
  }
  deregisterInteractionHandler (evtType: string, handler: EventListener) {
    this.rippleAdapter.deregisterInteractionHandler(evtType, handler);
  }
  registerResizeHandler (handler: EventListener) {
    this.rippleAdapter.registerResizeHandler(handler);
  }
  deregisterResizeHandler (handler: EventListener) {
    this.rippleAdapter.deregisterResizeHandler(handler);
  }
  updateCssVariable (varName: string, value: ?string) {
    this.rippleAdapter.updateCssVariable(varName, value);
  }
  computeBoundingRect (): ?ClientRect {
    return this.rippleAdapter.computeBoundingRect();
  }
  getWindowPageOffset (): {x: number, y: number} {
    return this.rippleAdapter.getWindowPageOffset();
  }
  /**
   * MDCFoundation accepts only object as adapter
   * So we create object-proxy of instance.
   */
  toObject (): {} {
    const keys = Object.getOwnPropertyNames((Object.getPrototypeOf(this): any));
    let object = {};
    keys.forEach((key: string) => {
      object[key] = (...args) => (this: any)[key](...args);
    });
    return object;
  }
}
