import * as i0 from '@angular/core';
import { EventEmitter, Directive, Input, Output, ContentChild, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

// Equality comparison for objects
function isEqual(left, right) {
    const OBJECT_STRING = '[object Object]';
    if (typeof left !== 'object' || typeof right !== 'object') {
        return left === right;
    }
    if (left === null || right === null) {
        return left === right;
    }
    const leftArray = Array.isArray(left);
    const rightArray = Array.isArray(right);
    if (leftArray !== rightArray) {
        return false;
    }
    const leftPlainObject = Object.prototype.toString.call(left) === OBJECT_STRING;
    const rightPlainObject = Object.prototype.toString.call(right) === OBJECT_STRING;
    if (leftPlainObject !== rightPlainObject) {
        return false;
    }
    if (!leftPlainObject && !leftArray) {
        return false;
    }
    const leftKeys = Object.keys(left);
    const rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) {
        return false;
    }
    const keySet = {};
    for (const key of leftKeys) {
        keySet[key] = true;
    }
    for (const key of rightKeys) {
        keySet[key] = true;
    }
    const allKeys = Object.keys(keySet);
    if (allKeys.length !== leftKeys.length) {
        return false;
    }
    const l = left;
    const r = right;
    const pred = (key) => {
        return isEqual(l[key], r[key]);
    };
    return allKeys.every(pred);
}
function getPropChanges(changes, props) {
    const changedProps = Object.keys(changes).filter(key => props.indexOf(key) >= 0);
    const prevOptions = {};
    const currentOptions = {};
    changedProps.map(prop => {
        const change = changes[prop];
        if (prop === 'styles') {
            prop = 'style';
        }
        prevOptions[prop] = change.previousValue;
        currentOptions[prop] = change.currentValue;
    });
    return {
        hasChanged: !isEqual(prevOptions, currentOptions),
        currentOptions,
        prevOptions,
    };
}
function validateCbInstance(cbInstance) {
    if (cbInstance != null) {
        const site = cbInstance.site;
        const key = cbInstance.publishableKey;
        if (!(site != null && typeof site == "string" && site.length > 0))
            return false;
        if (!(key != null && typeof key == "string" && key.length > 0))
            return false;
        return true;
    }
    else
        return false;
}

class NumberFieldDirective {
    styles;
    placeholder;
    ready = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    change = new EventEmitter();
    id = '';
    field = null;
    type = 'number';
    constructor(el) {
        if (el.nativeElement) {
            this.id = el.nativeElement.id;
        }
    }
    onFocus = (status) => {
        this.focus.emit(status);
    };
    onBlur = (status) => {
        this.blur.emit(status);
    };
    onReady = (el) => {
        this.ready.emit(el);
    };
    onChange = (status) => {
        this.change.emit(status);
    };
    ngOnChanges(changes) {
        if (this.field) {
            const props = ['placeholder', 'styles'];
            const { hasChanged, currentOptions } = getPropChanges(changes, props);
            if (hasChanged) {
                this.field.update(currentOptions);
            }
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumberFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NumberFieldDirective, selector: "[cbNumberField]", inputs: { styles: "styles", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumberFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cbNumberField]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { styles: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], ready: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class ExpiryFieldDirective {
    cbComponent;
    styles;
    placeholder;
    ready = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    change = new EventEmitter();
    id = '';
    field = null;
    type = 'expiry';
    constructor(el) {
        if (el.nativeElement) {
            this.id = el.nativeElement.id;
        }
    }
    onFocus = (status) => {
        this.focus.emit(status);
    };
    onBlur = (status) => {
        this.blur.emit(status);
    };
    onReady = (el) => {
        this.ready.emit(el);
    };
    onChange = (status) => {
        this.change.emit(status);
    };
    ngOnChanges(changes) {
        if (this.field) {
            const props = ['placeholder', 'styles'];
            const { hasChanged, currentOptions } = getPropChanges(changes, props);
            if (hasChanged) {
                this.field.update(currentOptions);
            }
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ExpiryFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: ExpiryFieldDirective, selector: "[cbExpiryField]", inputs: { cbComponent: "cbComponent", styles: "styles", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ExpiryFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cbExpiryField]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { cbComponent: [{
                type: Input
            }], styles: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], ready: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class CvvFieldDirective {
    cbComponent = null;
    styles;
    placeholder;
    ready = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    change = new EventEmitter();
    id = '';
    field = null;
    type = 'cvv';
    constructor(el) {
        if (el.nativeElement) {
            this.id = el.nativeElement.id;
        }
    }
    onFocus = (status) => {
        this.focus.emit(status);
    };
    onBlur = (status) => {
        this.blur.emit(status);
    };
    onReady = (el) => {
        this.ready.emit(el);
    };
    onChange = (status) => {
        this.change.emit(status);
    };
    ngOnChanges(changes) {
        if (this.field) {
            const props = ['placeholder', 'styles'];
            const { hasChanged, currentOptions } = getPropChanges(changes, props);
            if (hasChanged) {
                this.field.update(currentOptions);
            }
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CvvFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: CvvFieldDirective, selector: "[cbCvvField]", inputs: { styles: "styles", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CvvFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cbCvvField]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { styles: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], ready: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class CardFieldDirective {
    id = "";
    cbInstance = null;
    cbComponent = null;
    icon;
    classes;
    fonts;
    styles;
    locale;
    showTestCards;
    currency;
    placeholder;
    numberComponent;
    expiryComponent;
    cvvComponent;
    // Below events only for combined-field
    ready = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    change = new EventEmitter();
    load;
    initialization;
    constructor(el) {
        if (el.nativeElement) {
            this.id = el.nativeElement.id;
        }
    }
    onReady = (cardComponent, field) => {
        let data;
        if (field) {
            // Emit allows only one argument (Spec deviation)
            data = { cardComponent, field };
        }
        else {
            data = cardComponent;
        }
        this.ready.emit(data);
    };
    // Below events only for Combined field
    onFocus = (status) => {
        this.focus.emit(status);
    };
    onBlur = (status) => {
        this.blur.emit(status);
    };
    onChange = (status) => {
        this.change.emit(status);
    };
    ngOnInit() {
        if (typeof window !== "undefined" &&
            typeof window["Chargebee"] !== "undefined") {
            const options = {
                icon: typeof this.icon === "boolean" ? this.icon : true,
                fonts: this.fonts || [],
                style: this.styles || {},
                locale: this.locale || "en",
                showTestCards: this.showTestCards ?? false,
                classes: this.classes || {},
                currency: this.currency || "USD",
                placeholder: this.placeholder || {},
            };
            this.cbInstance = window["Chargebee"].getInstance();
            this.cbInstance.load("components").then(() => {
                this.cbComponent = this.cbInstance.createComponent("card", options);
                // Attaching listeners if any (only applicable for combined field)
                this.cbComponent.on("ready", this.onReady);
                this.cbComponent.on("focus", this.onFocus);
                this.cbComponent.on("blur", this.onBlur);
                this.cbComponent.on("change", this.onChange);
                // Initialize inidividual fields (if present)
                this.initializeField(this.cbComponent, this.numberComponent);
                this.initializeField(this.cbComponent, this.expiryComponent);
                this.initializeField(this.cbComponent, this.cvvComponent);
                this.cbComponent.mount(`#${this.id}`);
            });
        }
    }
    initializeField(cbComponent, fieldElement) {
        if (cbComponent && fieldElement) {
            const fieldInstance = cbComponent
                .createField(fieldElement.type, {
                style: fieldElement.styles || {},
                placeholder: fieldElement.placeholder || "",
            })
                .at(`#${fieldElement.id}`);
            fieldElement.field = fieldInstance;
            // attach listeners
            fieldInstance.on("ready", fieldElement.onReady);
            fieldInstance.on("focus", fieldElement.onFocus);
            fieldInstance.on("blur", fieldElement.onBlur);
            fieldInstance.on("change", fieldElement.onChange);
            return fieldInstance;
        }
        return null;
    }
    tokenize(additionalData) {
        return this.cbComponent.tokenize(additionalData);
    }
    authorizeWith3ds(paymentIntent, additionalData, callbacks) {
        return this.cbComponent.authorizeWith3ds(paymentIntent, additionalData, callbacks);
    }
    ngOnChanges(changes) {
        if (this.cbComponent) {
            const props = [
                "icon",
                "classes",
                "fonts",
                "locale",
                "showTestCards",
                "styles",
                "placeholder",
            ];
            const { currentOptions, hasChanged } = getPropChanges(changes, props);
            if (hasChanged) {
                this.cbComponent.update(currentOptions);
            }
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: CardFieldDirective, selector: "[cbCardField]", inputs: { icon: "icon", classes: "classes", fonts: "fonts", styles: "styles", locale: "locale", showTestCards: "showTestCards", currency: "currency", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, queries: [{ propertyName: "numberComponent", first: true, predicate: NumberFieldDirective, descendants: true, static: true }, { propertyName: "expiryComponent", first: true, predicate: ExpiryFieldDirective, descendants: true, static: true }, { propertyName: "cvvComponent", first: true, predicate: CvvFieldDirective, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[cbCardField]",
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { icon: [{
                type: Input
            }], classes: [{
                type: Input
            }], fonts: [{
                type: Input
            }], styles: [{
                type: Input
            }], locale: [{
                type: Input
            }], showTestCards: [{
                type: Input
            }], currency: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], numberComponent: [{
                type: ContentChild,
                args: [NumberFieldDirective, { static: true }]
            }], expiryComponent: [{
                type: ContentChild,
                args: [ExpiryFieldDirective, { static: true }]
            }], cvvComponent: [{
                type: ContentChild,
                args: [CvvFieldDirective, { static: true }]
            }], ready: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class Provider {
    cbInstance;
    validated = false;
    constructor() { }
    ngOnChanges(changes) {
        if (validateCbInstance(this.cbInstance))
            this.validated = true;
        else {
            this.validated = false;
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: Provider, deps: [], target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: Provider, selector: "[cbProvider]", inputs: { cbInstance: "cbInstance" }, usesOnChanges: true, ngImport: i0, template: `
        <ng-container *ngIf="validated">
            <ng-content>
            </ng-content>
        </ng-container>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: Provider, decorators: [{
            type: Component,
            args: [{
                    selector: '[cbProvider]',
                    template: `
        <ng-container *ngIf="validated">
            <ng-content>
            </ng-content>
        </ng-container>
    `
                }]
        }], ctorParameters: () => [], propDecorators: { cbInstance: [{
                type: Input
            }] } });

class ChargebeeJsAngularWrapperModule {
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChargebeeJsAngularWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    /** @nocollapse */ static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: ChargebeeJsAngularWrapperModule, declarations: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective, Provider], imports: [CommonModule], exports: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective, Provider] });
    /** @nocollapse */ static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChargebeeJsAngularWrapperModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ChargebeeJsAngularWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective, Provider],
                    imports: [
                        CommonModule
                    ],
                    exports: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective, Provider]
                }]
        }] });

/*
 * Public API Surface of chargebee-js-angular-wrapper
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardFieldDirective, ChargebeeJsAngularWrapperModule, CvvFieldDirective, ExpiryFieldDirective, NumberFieldDirective, Provider };
//# sourceMappingURL=chargebee-chargebee-js-angular-wrapper.mjs.map
