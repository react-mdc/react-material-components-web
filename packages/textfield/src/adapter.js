/* @flow */
/**
 * Foundation adapters.
 */

/**
 * Container adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class ContainerAdapter {
  addClass (_className: string) {}
  removeClass (_className: string) {}
}

/**
 * Input adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class InputAdapter {
  registerInputFocusHandler (_handler: EventListener) {}
  deregisterInputFocusHandler (_handler: EventListener) {}
  registerInputBlurHandler (_handler: EventListener) {}
  deregisterInputBlurHandler (_handler: EventListener) {}
  registerInputInputHandler (_handler: EventListener) {}
  deregisterInputInputHandler (_handler: EventListener) {}
  registerInputKeydownHandler (_handler: EventListener) {}
  deregisterInputKeydownHandler (_handler: EventListener) {}
  getNativeInput (): ?{value: string, disabled: boolean, checkValidity: () => boolean} {
    return null;
  }
}

/**
 * Label adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class LabelAdapter {
  addClassToLabel (_className: string) {}
  removeClassFromLabel (_className: string) {}
}

/**
 * Helptext adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class HelptextAdapter {
  addClassToHelptext (_className: string) {}
  removeClassFromHelptext (_className: string) {}
  helptextHasClass (_className: string): boolean {
    return false;
  }
  setHelptextAttr (_name: string, _value: string) {}
  removeHelptextAttr (_name: string) {}
}

/**
 * Composite adapter for MDCRadioFoundation
 */
export class FoundationAdapter {
  containerAdapter: ContainerAdapter
  inputAdapter: InputAdapter
  labelAdapter: LabelAdapter
  helptextAdapter: HelptextAdapter

  constructor () {
    this.containerAdapter = new ContainerAdapter();
    this.inputAdapter = new InputAdapter();
    this.labelAdapter = new LabelAdapter();
    this.helptextAdapter = new HelptextAdapter();
  }
  setContainerAdapter (containerAdapter: ContainerAdapter) {
    this.containerAdapter = containerAdapter;
  }
  setInputAdapter (inputAdapter: InputAdapter) {
    this.inputAdapter = inputAdapter;
  }
  setLabelAdapter (labelAdapter: LabelAdapter) {
    this.labelAdapter = labelAdapter;
  }
  setHelptextAdapter (helptextAdapter: HelptextAdapter) {
    this.helptextAdapter = helptextAdapter;
  }

  /* Container */
  addClass (className: string) {
    this.containerAdapter.addClass(className);
  }
  removeClass (className: string) {
    this.containerAdapter.removeClass(className);
  }
  /* Label */
  addClassToLabel (className: string) {
    this.labelAdapter.addClassToLabel(className);
  }
  removeClassFromLabel (className: string) {
    this.labelAdapter.removeClassFromLabel(className);
  }
  /* Helptext */
  addClassToHelptext (className: string) {
    this.helptextAdapter.addClassToHelptext(className);
  }
  removeClassFromHelptext (className: string) {
    this.helptextAdapter.removeClassFromHelptext(className);
  }
  helptextHasClass (className: string): boolean {
    return this.helptextAdapter.helptextHasClass(className);
  }
  setHelptextAttr (name: string, value: string) {
    this.helptextAdapter.setHelptextAttr(name, value);
  }
  removeHelptextAttr (name: string) {
    this.helptextAdapter.removeHelptextAttr(name);
  }
  /* Input */
  registerInputFocusHandler (handler: EventListener) {
    this.inputAdapter.registerInputFocusHandler(handler);
  }
  deregisterInputFocusHandler (handler: EventListener) {
    this.inputAdapter.deregisterInputFocusHandler(handler);
  }
  registerInputBlurHandler (handler: EventListener) {
    this.inputAdapter.registerInputBlurHandler(handler);
  }
  deregisterInputBlurHandler (handler: EventListener) {
    this.inputAdapter.deregisterInputBlurHandler(handler);
  }
  registerInputInputHandler (handler: EventListener) {
    this.inputAdapter.registerInputInputHandler(handler);
  }
  deregisterInputInputHandler (handler: EventListener) {
    this.inputAdapter.deregisterInputInputHandler(handler);
  }
  registerInputKeydownHandler (handler: EventListener) {
    this.inputAdapter.registerInputKeydownHandler(handler);
  }
  deregisterInputKeydownHandler (handler: EventListener) {
    this.inputAdapter.deregisterInputKeydownHandler(handler);
  }
  getNativeInput (): ?{value: string, disabled: boolean, checkValidity: () => boolean} {
    return this.inputAdapter.getNativeInput();
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
