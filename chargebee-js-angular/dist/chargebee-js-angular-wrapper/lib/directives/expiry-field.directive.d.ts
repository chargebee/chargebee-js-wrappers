import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ExpiryFieldDirective implements OnChanges {
    cbComponent: any;
    styles?: object;
    placeholder?: string;
    ready: EventEmitter<any>;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    change: EventEmitter<any>;
    id: string;
    field: any;
    type: string;
    constructor(el: ElementRef);
    onFocus: (status: any) => void;
    onBlur: (status: any) => void;
    onReady: (el: any) => void;
    onChange: (status: any) => void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpiryFieldDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ExpiryFieldDirective, "[cbExpiryField]", never, { "cbComponent": "cbComponent"; "styles": "styles"; "placeholder": "placeholder"; }, { "ready": "ready"; "focus": "focus"; "blur": "blur"; "change": "change"; }, never, never, false>;
}
//# sourceMappingURL=expiry-field.directive.d.ts.map