/**
 * Foundation adapters.
 */

/**
 * Container adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class ContainerAdapter {
  public addClass (_className: string) {
  }
  public removeClass (_className: string) {
  }
  public registerAnimationEndHandler (_handler: EventListener) {
  }
  public deregisterAnimationEndHandler (_handler: EventListener) {
  }
  public forceLayout () {
  }
  public isAttachedToDOM (): boolean {
    return false;
  }
  public isChecked (): boolean | null {
    return null;
  }
}

/**
 * Native control adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class NativeControlAdapter {
  public registerChangeHandler (_handler: EventListener) {
  }
  public deregisterChangeHandler (_handler: EventListener) {
  }
  public getNativeControl (): Element| null {
    return null;
  }
  public setDefaultOnChangeHandler (_onChange: React.ChangeEventHandler<any>) {
  }
}

/**
 * Composite adapter for MDCChcekboxFoundation
 */
export class FoundationAdapter {
  private containerAdapter: ContainerAdapter;
  private nativeControlAdapter: NativeControlAdapter;
  private defaultOnchangeHandler: React.ChangeEventHandler<any>;

  constructor () {
    this.containerAdapter = new ContainerAdapter();
    this.nativeControlAdapter = new NativeControlAdapter();
    this.defaultOnchangeHandler = () => {};
  }

  public setContainerAdapter (containerAdapter: ContainerAdapter) {
    this.containerAdapter = containerAdapter;
  }
  public setNativeControlAdapter (nativeControlAdapter: NativeControlAdapter) {
    this.nativeControlAdapter = nativeControlAdapter;
    this.nativeControlAdapter.setDefaultOnChangeHandler(this.defaultOnchangeHandler);
  }
  public addClass (className: string) {
    this.containerAdapter.addClass(className);
  }
  public removeClass (className: string) {
    this.containerAdapter.removeClass(className);
  }
  public registerAnimationEndHandler (handler: EventListener) {
    this.containerAdapter.registerAnimationEndHandler(handler);
  }
  public deregisterAnimationEndHandler (handler: EventListener) {
    this.containerAdapter.deregisterAnimationEndHandler(handler);
  }
  public registerChangeHandler (handler: EventListener) {
    this.nativeControlAdapter.registerChangeHandler(handler);
  }
  public deregisterChangeHandler (handler: EventListener) {
    this.nativeControlAdapter.deregisterChangeHandler(handler);
  }
  public getNativeControl (): Element | null {
    return this.nativeControlAdapter.getNativeControl();
  }
  public forceLayout () {
    this.containerAdapter.forceLayout();
  }
  public isAttachedToDOM (): boolean {
    return this.containerAdapter.isAttachedToDOM();
  }
  public setDefaultOnChangeHandler (onChange: React.ChangeEventHandler<any>) {
    this.nativeControlAdapter.setDefaultOnChangeHandler(onChange);
  }
  public isChecked (): boolean | null {
    return this.containerAdapter.isChecked();
  }
  /**
   * MDCFoundation accepts only object as adapter
   * So we create object-proxy of instance.
   */
  public toObject (): {} {
    const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    let object = {};
    keys.forEach((key: string) => {
      object[key] = (...args) => this[key](...args);
    });
    return object;
  }
}
