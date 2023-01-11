import { EventEmitter, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PaymentIntent, AdditionalData, Callbacks } from '../types';
import * as i0 from "@angular/core";
export declare class CardFieldDirective implements OnInit, OnChanges {
    id: string;
    cbInstance: any;
    cbComponent: any;
    icon?: boolean;
    classes?: object;
    fonts?: object;
    styles?: object;
    locale?: string;
    currency?: string;
    placeholder?: {
        number?: string;
        expiry?: string;
        cvv?: string;
    };
    numberComponent: any;
    expiryComponent: any;
    cvvComponent: any;
    ready: EventEmitter<any>;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    load: Promise<boolean>;
    initialization: Promise<any>;
    constructor(el: ElementRef);
    onReady: (cardComponent: any, field: any) => void;
    onFocus: (status: any) => void;
    onBlur: (status: any) => void;
    onChange: (status: any) => void;
    ngOnInit(): void;
    initializeField(cbComponent: any, fieldElement: any): any;
    tokenize(additionalData: any): any;
    authorizeWith3ds(paymentIntent: PaymentIntent, additionalData: AdditionalData, callbacks: Callbacks): any;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardFieldDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CardFieldDirective, "[cbCardField]", never, { "icon": "icon"; "classes": "classes"; "fonts": "fonts"; "styles": "styles"; "locale": "locale"; "currency": "currency"; "placeholder": "placeholder"; }, { "ready": "ready"; "focus": "focus"; "blur": "blur"; "change": "change"; }, ["numberComponent", "expiryComponent", "cvvComponent"], never, false>;
}
//# sourceMappingURL=card-field.directive.d.ts.map