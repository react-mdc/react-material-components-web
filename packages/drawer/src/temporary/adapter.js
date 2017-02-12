/* @flow */
/**
 * Foundation adapters.
 */

/**
 * Container adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class ContainerAdapter {
  addClass (_className: string) {
  }
  removeClass (_className: string) {
  }
  hasClass (_className: string): boolean {
    return false;
  }
  registerInteractionHandler (_evt: string, _handler: EventListener) {
  }
  deregisterInteractionHandler (_evt: string, _handler: EventListener) {
  }
  registerTransitionEndHandler (_handler: EventListener) {
  }
  deregisterTransitionEndHandler (_handler: EventListener) {
  }
  registerDocumentKeydownHandler (_handler: EventListener) {
  }
  deregisterDocumentKeydownHandler (_handler: EventListener) {
  }
  updateCssVariable (_value: string) {
  }
  saveElementTabState (_el: Element) {
  }
  restoreElementTabState (_el: Element) {
  }
  makeElementUntabbable (_el: Element) {
  }
  isRtl (): boolean {
    return false;
  }
}

/**
 * Drawer adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class DrawerAdapter {
  registerDrawerInteractionHandler (_evt: string, _handler: EventListener) {
  }
  deregisterDrawerInteractionHandler (_evt: string, _handler: EventListener) {
  }
  getDrawerWidth (): number {
    return 0;
  }
  setTranslateX (_value: number) {
  }
  isDrawer (_el: Element): boolean {
    return false;
  }
  getFocusableElements (): Iterable<Node> {
    return [];
  }
  hasNecessaryDom (): boolean {
    return false;
  }
}

/**
 * Composite adapter for MDCTemporaryDrawerFoundation
 */
export class FoundationAdapter {
  containerAdapter: ContainerAdapter
  drawerAdapter: DrawerAdapter

  constructor () {
    this.containerAdapter = new ContainerAdapter();
    this.drawerAdapter = new DrawerAdapter();
  }
  setContainerAdapter (containerAdapter: ContainerAdapter) {
    this.containerAdapter = containerAdapter;
  }
  setDrawerAdapter (drawerAdapter: DrawerAdapter) {
    this.drawerAdapter = drawerAdapter;
  }
  addClass (className: string) {
    this.containerAdapter.addClass(className);
  }
  removeClass (className: string) {
    this.containerAdapter.removeClass(className);
  }
  hasClass (className: string): boolean {
    return this.containerAdapter.hasClass(className);
  }
  registerInteractionHandler (evt: string, handler: EventListener) {
    this.containerAdapter.registerInteractionHandler(evt, handler);
  }
  deregisterInteractionHandler (evt: string, handler: EventListener) {
    this.containerAdapter.deregisterInteractionHandler(evt, handler);
  }
  registerTransitionEndHandler (handler: EventListener) {
    this.containerAdapter.registerTransitionEndHandler(handler);
  }
  deregisterTransitionEndHandler (handler: EventListener) {
    this.containerAdapter.deregisterTransitionEndHandler(handler);
  }
  registerDocumentKeydownHandler (handler: EventListener) {
    this.containerAdapter.registerDocumentKeydownHandler(handler);
  }
  deregisterDocumentKeydownHandler (handler: EventListener) {
    this.containerAdapter.deregisterDocumentKeydownHandler(handler);
  }
  updateCssVariable (value: string) {
    this.containerAdapter.updateCssVariable(value);
  }
  saveElementTabState (el: Element) {
    this.containerAdapter.saveElementTabState(el);
  }
  restoreElementTabState (el: Element) {
    this.containerAdapter.restoreElementTabState(el);
  }
  makeElementUntabbable (el: Element) {
    this.containerAdapter.makeElementUntabbable(el);
  }
  isRtl (): boolean {
    return this.containerAdapter.isRtl();
  }
  registerDrawerInteractionHandler (evt: string, handler: EventListener) {
    this.drawerAdapter.registerDrawerInteractionHandler(evt, handler);
  }
  deregisterDrawerInteractionHandler (evt: string, handler: EventListener) {
    this.drawerAdapter.deregisterDrawerInteractionHandler(evt, handler);
  }
  getDrawerWidth (): number {
    return this.drawerAdapter.getDrawerWidth();
  }
  setTranslateX (value: number) {
    this.drawerAdapter.setTranslateX(value);
  }
  isDrawer (el: Element): boolean {
    return this.drawerAdapter.isDrawer(el);
  }
  getFocusableElements (): Iterable<Node> {
    return this.drawerAdapter.getFocusableElements();
  }
  hasNecessaryDom (): boolean {
    return this.drawerAdapter.hasNecessaryDom();
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
