/**
 * Foundation adapters.
 */

function createEmptyNodeList(): NodeListOf<Element> {
    return {
        ...([]),
        item: () => { throw new Error("This is an empty node list"); },
    };
}

/**
 * Container adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class ContainerAdapter {
    public addClass(_className: string) {
    }
    public removeClass(_className: string) {
    }
    public hasClass(_className: string): boolean {
        return false;
    }
    public registerInteractionHandler(_evt: string, _handler: EventListener) {
    }
    public deregisterInteractionHandler(_evt: string, _handler: EventListener) {
    }
    public registerTransitionEndHandler(_handler: EventListener) {
    }
    public deregisterTransitionEndHandler(_handler: EventListener) {
    }
    public registerDocumentKeydownHandler(_handler: EventListener) {
    }
    public deregisterDocumentKeydownHandler(_handler: EventListener) {
    }
    public updateCssVariable(_value: string) {
    }
    public saveElementTabState(_el: Element) {
    }
    public restoreElementTabState(_el: Element) {
    }
    public makeElementUntabbable(_el: Element) {
    }
    public isRtl(): boolean {
        return false;
    }
}

/**
 * Drawer adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class DrawerAdapter {
    public registerDrawerInteractionHandler(_evt: string, _handler: EventListener) {
    }
    public deregisterDrawerInteractionHandler(_evt: string, _handler: EventListener) {
    }
    public getDrawerWidth(): number {
        return 0;
    }
    public setTranslateX(_value: number) {
    }
    public isDrawer(_el: Element): boolean {
        return false;
    }
    public getFocusableElements(): NodeListOf<Element> {
        return createEmptyNodeList();
    }
    public hasNecessaryDom(): boolean {
        return false;
    }
}

/**
 * Composite adapter for MDCTemporaryDrawerFoundation
 */
export class FoundationAdapter {
    private containerAdapter: ContainerAdapter;
    private drawerAdapter: DrawerAdapter;

    constructor() {
        this.containerAdapter = new ContainerAdapter();
        this.drawerAdapter = new DrawerAdapter();
    }
    public setContainerAdapter(containerAdapter: ContainerAdapter) {
        this.containerAdapter = containerAdapter;
    }
    public setDrawerAdapter(drawerAdapter: DrawerAdapter) {
        this.drawerAdapter = drawerAdapter;
    }
    public addClass(className: string) {
        this.containerAdapter.addClass(className);
    }
    public removeClass(className: string) {
        this.containerAdapter.removeClass(className);
    }
    public hasClass(className: string): boolean {
        return this.containerAdapter.hasClass(className);
    }
    public registerInteractionHandler(evt: string, handler: EventListener) {
        this.containerAdapter.registerInteractionHandler(evt, handler);
    }
    public deregisterInteractionHandler(evt: string, handler: EventListener) {
        this.containerAdapter.deregisterInteractionHandler(evt, handler);
    }
    public registerTransitionEndHandler(handler: EventListener) {
        this.containerAdapter.registerTransitionEndHandler(handler);
    }
    public deregisterTransitionEndHandler(handler: EventListener) {
        this.containerAdapter.deregisterTransitionEndHandler(handler);
    }
    public registerDocumentKeydownHandler(handler: EventListener) {
        this.containerAdapter.registerDocumentKeydownHandler(handler);
    }
    public deregisterDocumentKeydownHandler(handler: EventListener) {
        this.containerAdapter.deregisterDocumentKeydownHandler(handler);
    }
    public updateCssVariable(value: string) {
        this.containerAdapter.updateCssVariable(value);
    }
    public saveElementTabState(el: Element) {
        this.containerAdapter.saveElementTabState(el);
    }
    public restoreElementTabState(el: Element) {
        this.containerAdapter.restoreElementTabState(el);
    }
    public makeElementUntabbable(el: Element) {
        this.containerAdapter.makeElementUntabbable(el);
    }
    public isRtl(): boolean {
        return this.containerAdapter.isRtl();
    }
    public registerDrawerInteractionHandler(evt: string, handler: EventListener) {
        this.drawerAdapter.registerDrawerInteractionHandler(evt, handler);
    }
    public deregisterDrawerInteractionHandler(evt: string, handler: EventListener) {
        this.drawerAdapter.deregisterDrawerInteractionHandler(evt, handler);
    }
    public getDrawerWidth(): number {
        return this.drawerAdapter.getDrawerWidth();
    }
    public setTranslateX(value: number) {
        this.drawerAdapter.setTranslateX(value);
    }
    public isDrawer(el: Element): boolean {
        return this.drawerAdapter.isDrawer(el);
    }
    public getFocusableElements(): NodeListOf<Element> {
        return this.drawerAdapter.getFocusableElements();
    }
    public hasNecessaryDom(): boolean {
        return this.drawerAdapter.hasNecessaryDom();
    }

    /**
     * MDCFoundation accepts only object as adapter
     * So we create object-proxy of instance.
     */
    public toObject(): {} {
        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        const object = {};
        keys.forEach((key: string) => {
            object[key] = (...args) => this[key](...args);
        });
        return object;
    }
}
