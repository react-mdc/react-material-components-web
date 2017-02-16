/* @flow */
/**
 * Foundation adapters.
 */
import type {EventHandler} from '@react-mdc/base/lib/types';

/**
 * Container adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class ContainerAdapter {
  addClass (_className: string) {
  }
  removeClass (_className: string) {
  }
  registerAnimationEndHandler (_handler: EventListener) {
  }
  deregisterAnimationEndHandler (_handler: EventListener) {
  }
  forceLayout () {
  }
  isAttachedToDOM (): boolean {
    return false;
  }
  isChecked (): ?boolean {
    return null;
  }
}

/**
 * Native control adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class NativeControlAdapter {
  registerChangeHandler (_handler: EventListener) {
  }
  deregisterChangeHandler (_handler: EventListener) {
  }
  getNativeControl (): ?HTMLElement {
    return null;
  }
  setDefaultOnChangeHandler (_onChange: EventHandler) {
  }
}

/**
 * Composite adapter for MDCChcekboxFoundation
 */
export class FoundationAdapter {
  containerAdapter: ContainerAdapter
  nativeControlAdapter: NativeControlAdapter
  defaultOnchangeHandler: EventHandler = () => {}

  constructor () {
    this.containerAdapter = new ContainerAdapter();
    this.nativeControlAdapter = new NativeControlAdapter();
  }
  setContainerAdapter (containerAdapter: ContainerAdapter) {
    this.containerAdapter = containerAdapter;
  }
  setNativeControlAdapter (nativeControlAdapter: NativeControlAdapter) {
    this.nativeControlAdapter = nativeControlAdapter;
    this.nativeControlAdapter.setDefaultOnChangeHandler(this.defaultOnchangeHandler);
  }
  addClass (className: string) {
    this.containerAdapter.addClass(className);
  }
  removeClass (className: string) {
    this.containerAdapter.removeClass(className);
  }
  registerAnimationEndHandler (handler: EventListener) {
    this.containerAdapter.registerAnimationEndHandler(handler);
  }
  deregisterAnimationEndHandler (handler: EventListener) {
    this.containerAdapter.deregisterAnimationEndHandler(handler);
  }
  registerChangeHandler (handler: EventListener) {
    this.nativeControlAdapter.registerChangeHandler(handler);
  }
  deregisterChangeHandler (handler: EventListener) {
    this.nativeControlAdapter.deregisterChangeHandler(handler);
  }
  getNativeControl (): ?HTMLElement {
    return this.nativeControlAdapter.getNativeControl();
  }
  forceLayout () {
    this.containerAdapter.forceLayout();
  }
  isAttachedToDOM (): boolean {
    return this.containerAdapter.isAttachedToDOM();
  }
  setDefaultOnChangeHandler (onChange: EventHandler) {
    this.nativeControlAdapter.setDefaultOnChangeHandler(onChange);
  }
  isChecked (): ?boolean {
    this.containerAdapter.isChecked();
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
