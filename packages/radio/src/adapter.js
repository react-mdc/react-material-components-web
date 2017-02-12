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
  isChecked (): ?boolean {
    return null;
  }
}

/**
 * Native control adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class NativeControlAdapter {
  getNativeControl (): ?HTMLElement {
    return null;
  }
  setDefaultOnChangeHandler (_onChange: EventHandler) {
  }
}

/**
 * Composite adapter for MDCRadioFoundation
 */
export class FoundationAdapter {
  containerAdapter: ContainerAdapter
  nativeControlAdapter: NativeControlAdapter

  constructor () {
    this.containerAdapter = new ContainerAdapter();
    this.nativeControlAdapter = new NativeControlAdapter();
  }
  setContainerAdapter (containerAdapter: ContainerAdapter) {
    this.containerAdapter = containerAdapter;
  }
  setNativeControlAdapter (nativeControlAdapter: NativeControlAdapter) {
    this.nativeControlAdapter = nativeControlAdapter;
  }
  addClass (className: string) {
    this.containerAdapter.addClass(className);
  }
  removeClass (className: string) {
    this.containerAdapter.removeClass(className);
  }
  getNativeControl (): ?HTMLElement {
    return this.nativeControlAdapter.getNativeControl();
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
