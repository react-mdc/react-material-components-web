/**
 * Foundation adapters.
 */

import {
    util as dialogUtil,
} from "@material/dialog/dist/mdc.dialog";

/**
 * Container adapter
 */
export class ContainerAdapter {
    public hasClass(_className: string): boolean {
        return false;
    }
    public addClass(_className: string) {
    }
    public removeClass(_className: string) {
    }
    public setAttr(_attr: string, _val: string) {
    }
    public registerInteractionHandler(_evt: string, _handler: EventListener) {
    }
    public deregisterInteractionHandler(_evt: string, _handler: EventListener) {
    }
    public notifyAccept() {
    }
    public notifyCancel() {
    }
}

export class SurfaceAdapter {
    public registerSurfaceInteractionHandler(_evt: string, _handler: EventListener) {
    }
    public deregisterSurfaceInteractionHandler(_evt: string, _handler: EventListener) {
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
    private surfaceAdapter: SurfaceAdapter;

    constructor() {
        this.containerAdapter = new ContainerAdapter();
        this.surfaceAdapter = new SurfaceAdapter();
    }

    public setContainerAdapter(containerAdapter: ContainerAdapter) {
        this.containerAdapter = containerAdapter;
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
        this.containerAdapter.registerInteractionHandler(evt, handler);
    }
    public deregisterInteractionHandler(evt: string, handler: EventListener) {
        this.containerAdapter.deregisterInteractionHandler(evt, handler);
    }
    public notifyAccept() {
        this.containerAdapter.notifyAccept();
    }
    public notifyCancel() {
        this.containerAdapter.notifyCancel();
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
        dialogUtil.saveElementTabState(el);
    }
    public restoreElementTabState(el: Element) {
        dialogUtil.restoreElementTabState(el);
    }
    public addBodyClass(className: string) {
        document.body.classList.add(className);
    }
    public removeBodyClass(className: string) {
        document.body.classList.remove(className);
    }
    public setBodyAttr(attr: string, val: string) {
        document.body.setAttribute(attr, val);
    }
    public rmBodyAttr(attr: string) {
        document.body.removeAttribute(attr);
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
