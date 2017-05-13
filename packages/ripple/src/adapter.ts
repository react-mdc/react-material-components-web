/**
 * Foundation adapters.
 */

/**
 * Ripple adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class RippleAdapter {
    public browserSupportsCssVars(): boolean {
        return false;
    }
    public isUnbounded(): boolean {
        return false;
    }
    public isSurfaceActive(): boolean {
        return false;
    }
    public addClass(_className: string) {
    }
    public removeClass(_className: string) {
    }
    public registerInteractionHandler(_evtType: string, _handler: EventListener) {
    }
    public deregisterInteractionHandler(_evtType: string, _handler: EventListener) {
    }
    public registerResizeHandler(_handler: EventListener) {
    }
    public deregisterResizeHandler(_handler: EventListener) {
    }
    public updateCssVariable(_varName: string, _value: string | null) {
    }
    public computeBoundingRect(): ClientRect | null {
        return null;
    }
    public getWindowPageOffset(): { x: number, y: number } {
        return { x: 0, y: 0 };
    }
}

/**
 * Composite adapter for MDCRippleFoundation
 */
export class FoundationAdapter {
    public rippleAdapter: RippleAdapter;

    constructor() {
        this.rippleAdapter = new RippleAdapter();
    }
    public setRippleAdapter(rippleAdapter: RippleAdapter) {
        this.rippleAdapter = rippleAdapter;
    }
    public browserSupportsCssVars(): boolean {
        return this.rippleAdapter.browserSupportsCssVars();
    }
    public isUnbounded(): boolean {
        return this.rippleAdapter.isUnbounded();
    }
    public isSurfaceActive(): boolean {
        return this.rippleAdapter.isSurfaceActive();
    }
    public addClass(className: string) {
        this.rippleAdapter.addClass(className);
    }
    public removeClass(className: string) {
        this.rippleAdapter.removeClass(className);
    }
    public registerInteractionHandler(evtType: string, handler: EventListener) {
        this.rippleAdapter.registerInteractionHandler(evtType, handler);
    }
    public deregisterInteractionHandler(evtType: string, handler: EventListener) {
        this.rippleAdapter.deregisterInteractionHandler(evtType, handler);
    }
    public registerResizeHandler(handler: EventListener) {
        this.rippleAdapter.registerResizeHandler(handler);
    }
    public deregisterResizeHandler(handler: EventListener) {
        this.rippleAdapter.deregisterResizeHandler(handler);
    }
    public updateCssVariable(varName: string, value: string | null) {
        this.rippleAdapter.updateCssVariable(varName, value);
    }
    public computeBoundingRect(): ClientRect | null {
        return this.rippleAdapter.computeBoundingRect();
    }
    public getWindowPageOffset(): { x: number, y: number } {
        return this.rippleAdapter.getWindowPageOffset();
    }
    /**
     * MDCFoundation accepts only object as adapter
     * So we create object-proxy of instance.
     */
    public toObject() {
        const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        const object = {};
        keys.forEach((key: string) => {
            object[key] = (...args) => this[key](...args);
        });
        return object;
    }
}
