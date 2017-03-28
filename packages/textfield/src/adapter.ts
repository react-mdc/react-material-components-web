/**
 * Foundation adapters.
 */

/**
 * Container adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class ContainerAdapter {
    public addClass(_className: string) { }
    public removeClass(_className: string) { }
}

/**
 * Input adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class InputAdapter {
    public registerInputFocusHandler(_handler: EventListener) { }
    public deregisterInputFocusHandler(_handler: EventListener) { }
    public registerInputBlurHandler(_handler: EventListener) { }
    public deregisterInputBlurHandler(_handler: EventListener) { }
    public registerInputInputHandler(_handler: EventListener) { }
    public deregisterInputInputHandler(_handler: EventListener) { }
    public registerInputKeydownHandler(_handler: EventListener) { }
    public deregisterInputKeydownHandler(_handler: EventListener) { }
    public getNativeInput(): { value: string, disabled: boolean, checkValidity: () => boolean; } | null {
        return null;
    }
}

/**
 * Label adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class LabelAdapter {
    public addClassToLabel(_className: string) { }
    public removeClassFromLabel(_className: string) { }
}

/**
 * Helptext adapter interface
 * Default implementations are noop and returns meaningless value.
 */
export class HelptextAdapter {
    public addClassToHelptext(_className: string) { }
    public removeClassFromHelptext(_className: string) { }
    public helptextHasClass(_className: string): boolean {
        return false;
    }
    public setHelptextAttr(_name: string, _value: string) { }
    public removeHelptextAttr(_name: string) { }
}

/**
 * Composite adapter for MDCRadioFoundation
 */
export class FoundationAdapter {
    private containerAdapter: ContainerAdapter;
    private inputAdapter: InputAdapter;
    private labelAdapter: LabelAdapter;
    private helptextAdapter: HelptextAdapter;

    constructor() {
        this.containerAdapter = new ContainerAdapter();
        this.inputAdapter = new InputAdapter();
        this.labelAdapter = new LabelAdapter();
        this.helptextAdapter = new HelptextAdapter();
    }
    public setContainerAdapter(containerAdapter: ContainerAdapter) {
        this.containerAdapter = containerAdapter;
    }
    public setInputAdapter(inputAdapter: InputAdapter) {
        this.inputAdapter = inputAdapter;
    }
    public setLabelAdapter(labelAdapter: LabelAdapter) {
        this.labelAdapter = labelAdapter;
    }
    public setHelptextAdapter(helptextAdapter: HelptextAdapter) {
        this.helptextAdapter = helptextAdapter;
    }

    /* Container */
    public addClass(className: string) {
        this.containerAdapter.addClass(className);
    }
    public removeClass(className: string) {
        this.containerAdapter.removeClass(className);
    }
    /* Label */
    public addClassToLabel(className: string) {
        this.labelAdapter.addClassToLabel(className);
    }
    public removeClassFromLabel(className: string) {
        this.labelAdapter.removeClassFromLabel(className);
    }
    /* Helptext */
    public addClassToHelptext(className: string) {
        this.helptextAdapter.addClassToHelptext(className);
    }
    public removeClassFromHelptext(className: string) {
        this.helptextAdapter.removeClassFromHelptext(className);
    }
    public helptextHasClass(className: string): boolean {
        return this.helptextAdapter.helptextHasClass(className);
    }
    public setHelptextAttr(name: string, value: string) {
        this.helptextAdapter.setHelptextAttr(name, value);
    }
    public removeHelptextAttr(name: string) {
        this.helptextAdapter.removeHelptextAttr(name);
    }

    /* Input */
    public registerInputFocusHandler(handler: EventListener) {
        this.inputAdapter.registerInputFocusHandler(handler);
    }
    public deregisterInputFocusHandler(handler: EventListener) {
        this.inputAdapter.deregisterInputFocusHandler(handler);
    }
    public registerInputBlurHandler(handler: EventListener) {
        this.inputAdapter.registerInputBlurHandler(handler);
    }
    public deregisterInputBlurHandler(handler: EventListener) {
        this.inputAdapter.deregisterInputBlurHandler(handler);
    }
    public registerInputInputHandler(handler: EventListener) {
        this.inputAdapter.registerInputInputHandler(handler);
    }
    public deregisterInputInputHandler(handler: EventListener) {
        this.inputAdapter.deregisterInputInputHandler(handler);
    }
    public registerInputKeydownHandler(handler: EventListener) {
        this.inputAdapter.registerInputKeydownHandler(handler);
    }
    public deregisterInputKeydownHandler(handler: EventListener) {
        this.inputAdapter.deregisterInputKeydownHandler(handler);
    }
    public getNativeInput(): { value: string, disabled: boolean, checkValidity: () => boolean; } | null {
        return this.inputAdapter.getNativeInput();
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
