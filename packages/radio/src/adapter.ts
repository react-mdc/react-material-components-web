/**
 * Foundation adapters.
 */

/**
 * Container adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class ContainerAdapter {
  public addClass(_className: string) {
  }
  public removeClass(_className: string) {
  }
  public isChecked(): boolean | null {
    return null;
  }
}

/**
 * Native control adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class NativeControlAdapter<ChildProps> {
  public getNativeControl(): Element | null {
    return null;
  }
  public setDefaultOnChangeHandler(_onChange: React.ChangeEventHandler<ChildProps>) {
  }
}

/**
 * Composite adapter for MDCRadioFoundation
 */
export class FoundationAdapter<ChildProps> {
  private nativeControlAdapter: NativeControlAdapter<ChildProps>;
  private containerAdapter: ContainerAdapter;
  private defaultOnchangeHandler: React.ChangeEventHandler<ChildProps>;

  constructor() {
    this.containerAdapter = new ContainerAdapter();
    this.nativeControlAdapter = new NativeControlAdapter();
    this.defaultOnchangeHandler = () => { };
  }

  public setContainerAdapter(containerAdapter: ContainerAdapter) {
    this.containerAdapter = containerAdapter;
  }
  public setNativeControlAdapter(nativeControlAdapter: NativeControlAdapter<ChildProps>) {
    this.nativeControlAdapter = nativeControlAdapter;
    this.nativeControlAdapter.setDefaultOnChangeHandler(this.defaultOnchangeHandler);
  }
  public addClass(className: string) {
    this.containerAdapter.addClass(className);
  }
  public removeClass(className: string) {
    this.containerAdapter.removeClass(className);
  }
  public getNativeControl(): Element | null {
    return this.nativeControlAdapter.getNativeControl();
  }

  public setDefaultOnChangeHandler(onChange: React.ChangeEventHandler<ChildProps>) {
    this.nativeControlAdapter.setDefaultOnChangeHandler(onChange);
  }
  public isChecked(): boolean | null {
    return this.containerAdapter.isChecked();
  }
  /**
   * MDCFoundation accepts only object as adapter
   * So we create object-proxy of instance.
   */
  public toObject(): {} {
    const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    let object = {};
    keys.forEach((key: string) => {
      object[key] = (...args) => this[key](...args);
    });
    return object;
  }
}
