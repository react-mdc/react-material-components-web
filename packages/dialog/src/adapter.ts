/**
 * Foundation adapters.
 */

/**
 * Container adapter
 */
export class ContainerAdapter {
    public hasClass(className: string): boolean {
        return false;
    }
    public addClass(className: string) {
    }
    public removeClass(className: string) {
    }
    public setAttr(attr: string, val: string) {
    }
    public registerInteractionHandler(evt: string, handler: EventListener) {
    }
    public deregisterInteractionHandler(evt: string, handler: EventListener) {
    }
}

export class BodyAdapter {
    public addBodyClass(className: string) {
    }
    public removeBodyClass(className: string) {
    }
    public setBodyAttr(attr: string, val: string) {
    }
    public rmBodyAttr(attr: string) {
    }
}

export class SurfaceAdapter {
    public registerSurfaceInteractionHandler(evt: string, handler: EventListener) {
    }
    public deregisterSurfaceInteractionHandler(evt: string, handler: EventListener) {
    }
    public numFocusableTargets(): number {
        return 0;
    }
    public setDialogFocusFirstTarget() {
    }
    public setInitialFocus() {
    }
    public getFocusableElements(): Element[] {
        return [];
    }
}

/**
 * Composite adapter for MDCDialogFoundation
 */
export class FoundationAdapter {
    private containerAdapter: ContainerAdapter;
    private bodyAdapter: BodyAdapter;
    private surfaceAdapter: SurfaceAdapter;

    constructor() {
        this.containerAdapter = new ContainerAdapter();
        this.bodyAdapter = new BodyAdapter();
        this.surfaceAdapter = new SurfaceAdapter();
    }

    public setContainerAdapter(containerAdapter: ContainerAdapter) {
        this.containerAdapter = containerAdapter;
    }

    public setBodyAdapter(bodyAdapter: BodyAdapter) {
        this.bodyAdapter = bodyAdapter;
    }

    public setSurfaceAdapter(surfaceAdapter: SurfaceAdapter) {
        this.surfaceAdapter = surfaceAdapter;
    }

    /* Container */
    public hasClass(className: string): boolean {
        return this.containerAdapter.hasClass(className);
    }
    public addClass(className: string) {
        this.containerAdapter.addClass(className);
    }
    public removeClass(className: string) {
        this.containerAdapter.removeClass(className);
    }
    public setAttr(attr: string, val: string) {
        this.containerAdapter.setAttr(attr, val);
    }
    public registerInteractionHandler(evt: string, handler: EventListener) {
        this.registerInteractionHandler(evt, handler);
    }
    public deregisterInteractionHandler(evt: string, handler: EventListener) {
        this.deregisterInteractionHandler(evt, handler);
    }
    /* Body */
    public addBodyClass(className: string) {
        this.bodyAdapter.addBodyClass(className);
    }
    public removeBodyClass(className: string) {
        this.bodyAdapter.removeBodyClass(className);
    }
    public setBodyAttr(attr: string, val: string) {
        this.bodyAdapter.setBodyAttr(attr, val);
    }
    public rmBodyAttr(attr: string) {
        this.bodyAdapter.rmBodyAttr(attr);
    }
    /* Surface */
    public registerSurfaceInteractionHandler(evt: string, handler: EventListener) {
        this.surfaceAdapter.registerSurfaceInteractionHandler(evt, handler);
    }
    public deregisterSurfaceInteractionHandler(evt: string, handler: EventListener) {
        this.surfaceAdapter.deregisterSurfaceInteractionHandler(evt, handler);
    }
    public numFocusableTargets(): number {
        return this.surfaceAdapter.numFocusableTargets();
    }
    public setDialogFocusFirstTarget() {
        this.surfaceAdapter.setDialogFocusFirstTarget();
    }
    public setInitialFocus() {
        this.surfaceAdapter.setInitialFocus();
    }
    public getFocusableElements(): Element[] {
        return this.surfaceAdapter.getFocusableElements();
    }

    /* Common */
    public eventTargetHasClass(target: EventTarget & Element, className: string): boolean {
        return target.classList.contains(className);
    }
    public registerDocumentKeydownHandler(handler: EventListener) {
        document.addEventListener("keydown", handler);
    }
    public deregisterDocumentKeydownHandler(handler: EventListener) {
        document.removeEventListener("keydown", handler);
    }
    public registerFocusTrappingHandler(handler: EventListener) {
        document.addEventListener("focus", handler, true);
    }
    public deregisterFocusTrappingHandler(handler: EventListener) {
        document.removeEventListener("focus", handler, true);
    }
    public getFocusedTarget(): Element {
        return document.activeElement;
    }
    public setFocusedTarget(target: EventTarget & HTMLElement) {
        target.focus();
    }
    public makeElementUntabbable(el: Element) {
        el.setAttribute("tabindex", "-1");
    }
    public saveElementTabState(el: Element) {
    }
    public restoreElementTabState(el: Element) {
    }
    public notifyAccept() {
        // this.eventListener.onAccept();
    }
    public notifyCancel() {
        // this.eventListener.onCancel();
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
