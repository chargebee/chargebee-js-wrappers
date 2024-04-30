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
    static ɵdir: i0.ɵɵDirectiveDeclaration<CardFieldDirective, "[cbCardField]", never, { "icon": { "alias": "icon"; "required": false; }; "classes": { "alias": "classes"; "required": false; }; "fonts": { "alias": "fonts"; "required": false; }; "styles": { "alias": "styles"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, { "ready": "ready"; "focus": "focus"; "blur": "blur"; "change": "change"; }, ["numberComponent", "expiryComponent", "cvvComponent"], never, false, never>;
}
//# sourceMappingURL=card-field.directive.d.ts.map