import { Input, Directive, Output, EventEmitter, ContentChild } from '@angular/core';
import { NumberFieldDirective } from './number-field.directive';
import { ExpiryFieldDirective } from './expiry-field.directive';
import { CvvFieldDirective } from './cvv-field.directive';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class CardFieldDirective {
    constructor(el) {
        this.id = '';
        this.cbInstance = null;
        this.cbComponent = null;
        // Below events only for combined-field
        this.ready = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.onReady = (cardComponent, field) => {
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
        this.onFocus = (status) => {
            this.focus.emit(status);
        };
        this.onBlur = (status) => {
            this.blur.emit(status);
        };
        this.onChange = (status) => {
            this.change.emit(status);
        };
        if (el.nativeElement) {
            this.id = el.nativeElement.id;
        }
    }
    ngOnInit() {
        if (typeof window !== 'undefined' && typeof window['Chargebee'] !== 'undefined') {
            const options = {
                icon: typeof this.icon === 'boolean' ? this.icon : true,
                fonts: this.fonts || [],
                style: this.styles || {},
                locale: this.locale || 'en',
                classes: this.classes || {},
                currency: this.currency || 'USD',
                placeholder: this.placeholder || {},
            };
            this.cbInstance = window['Chargebee'].getInstance();
            this.cbInstance.load('components')
                .then(() => {
                this.cbComponent = this.cbInstance.createComponent('card', options);
                // Attaching listeners if any (only applicable for combined field)
                this.cbComponent.on('ready', this.onReady);
                this.cbComponent.on('focus', this.onFocus);
                this.cbComponent.on('blur', this.onBlur);
                this.cbComponent.on('change', this.onChange);
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
            const fieldInstance = cbComponent.createField(fieldElement.type, {
                style: fieldElement.styles || {},
                placeholder: fieldElement.placeholder || '',
            }).at(`#${fieldElement.id}`);
            fieldElement.field = fieldInstance;
            // attach listeners
            fieldInstance.on('ready', fieldElement.onReady);
            fieldInstance.on('focus', fieldElement.onFocus);
            fieldInstance.on('blur', fieldElement.onBlur);
            fieldInstance.on('change', fieldElement.onChange);
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
            const props = ['icon', 'classes', 'fonts', 'locale', 'styles', 'placeholder'];
            const { currentOptions, hasChanged } = getPropChanges(changes, props);
            if (hasChanged) {
                this.cbComponent.update(currentOptions);
            }
        }
    }
}
/** @nocollapse */ CardFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: CardFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ CardFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.8", type: CardFieldDirective, selector: "[cbCardField]", inputs: { icon: "icon", classes: "classes", fonts: "fonts", styles: "styles", locale: "locale", currency: "currency", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, queries: [{ propertyName: "numberComponent", first: true, predicate: NumberFieldDirective, descendants: true, static: true }, { propertyName: "expiryComponent", first: true, predicate: ExpiryFieldDirective, descendants: true, static: true }, { propertyName: "cvvComponent", first: true, predicate: CvvFieldDirective, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: CardFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cbCardField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { icon: [{
                type: Input
            }], classes: [{
                type: Input
            }], fonts: [{
                type: Input
            }], styles: [{
                type: Input
            }], locale: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFyZ2ViZWUtanMtYW5ndWxhci13cmFwcGVyL3NyYy9saWIvZGlyZWN0aXZlcy9jYXJkLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBZ0QsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFRN0MsTUFBTSxPQUFPLGtCQUFrQjtJQThCN0IsWUFBWSxFQUFjO1FBN0IxQixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQWtCbkIsdUNBQXVDO1FBQzdCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVd6RCxZQUFPLEdBQUcsQ0FBQyxhQUFrQixFQUFFLEtBQVUsRUFBRSxFQUFFO1lBQzNDLElBQUksSUFBUyxDQUFDO1lBQ2QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsaURBQWlEO2dCQUNqRCxJQUFJLEdBQUcsRUFBQyxhQUFhLEVBQUUsS0FBSyxFQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0ws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LCBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vbnVtYmVyLWZpZWxkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFeHBpcnlGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vZXhwaXJ5LWZpZWxkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDdnZGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vY3Z2LWZpZWxkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBnZXRQcm9wQ2hhbmdlcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFBheW1lbnRJbnRlbnQsIEFkZGl0aW9uYWxEYXRhLCBDYWxsYmFja3MgfSBmcm9tICcuLi90eXBlcyc7XG5cbmRlY2xhcmUgdmFyIENoYXJnZWJlZTogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2JDYXJkRmllbGRdJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXJkRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGlkID0gJyc7XG4gIGNiSW5zdGFuY2UgPSBudWxsO1xuICBjYkNvbXBvbmVudCA9IG51bGw7XG5cbiAgQElucHV0KCkgaWNvbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsYXNzZXM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIGZvbnRzPzogb2JqZWN0O1xuICBASW5wdXQoKSBzdHlsZXM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIGxvY2FsZT86IHN0cmluZztcbiAgQElucHV0KCkgY3VycmVuY3k/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzoge1xuICAgIG51bWJlcj86IHN0cmluZztcbiAgICBleHBpcnk/OiBzdHJpbmc7XG4gICAgY3Z2Pzogc3RyaW5nO1xuICB9O1xuXG4gIEBDb250ZW50Q2hpbGQoTnVtYmVyRmllbGREaXJlY3RpdmUsIHtzdGF0aWM6IHRydWV9KSBudW1iZXJDb21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGQoRXhwaXJ5RmllbGREaXJlY3RpdmUsIHtzdGF0aWM6IHRydWV9KSBleHBpcnlDb21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGQoQ3Z2RmllbGREaXJlY3RpdmUsIHtzdGF0aWM6IHRydWV9KSBjdnZDb21wb25lbnQ7XG5cbiAgLy8gQmVsb3cgZXZlbnRzIG9ubHkgZm9yIGNvbWJpbmVkLWZpZWxkXG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZDogUHJvbWlzZTxib29sZWFuPjtcbiAgaW5pdGlhbGl6YXRpb246IFByb21pc2U8YW55PjtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIGlmIChlbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlkID0gZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgICB9XG4gIH1cblxuICBvblJlYWR5ID0gKGNhcmRDb21wb25lbnQ6IGFueSwgZmllbGQ6IGFueSkgPT4ge1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICAvLyBFbWl0IGFsbG93cyBvbmx5IG9uZSBhcmd1bWVudCAoU3BlYyBkZXZpYXRpb24pXG4gICAgICBkYXRhID0ge2NhcmRDb21wb25lbnQsIGZpZWxkfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGNhcmRDb21wb25lbnQ7XG4gICAgfVxuICAgIHRoaXMucmVhZHkuZW1pdChkYXRhKTtcbiAgfVxuXG4gIC8vIEJlbG93IGV2ZW50cyBvbmx5IGZvciBDb21iaW5lZCBmaWVsZFxuICBvbkZvY3VzID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5mb2N1cy5lbWl0KHN0YXR1cyk7XG4gIH1cbiAgb25CbHVyID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5ibHVyLmVtaXQoc3RhdHVzKTtcbiAgfVxuICBvbkNoYW5nZSA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93WydDaGFyZ2ViZWUnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGljb246IHR5cGVvZiB0aGlzLmljb24gPT09ICdib29sZWFuJyA/IHRoaXMuaWNvbiA6IHRydWUsXG4gICAgICAgIGZvbnRzOiB0aGlzLmZvbnRzIHx8IFtdLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMgfHwge30sXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUgfHwgJ2VuJyxcbiAgICAgICAgY2xhc3NlczogdGhpcy5jbGFzc2VzIHx8IHt9LFxuICAgICAgICBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSB8fCAnVVNEJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwge30sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNiSW5zdGFuY2UgPSB3aW5kb3dbJ0NoYXJnZWJlZSddLmdldEluc3RhbmNlKCk7XG5cbiAgICAgIHRoaXMuY2JJbnN0YW5jZS5sb2FkKCdjb21wb25lbnRzJylcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2JDb21wb25lbnQgPSB0aGlzLmNiSW5zdGFuY2UuY3JlYXRlQ29tcG9uZW50KCdjYXJkJywgb3B0aW9ucyk7XG4gIFxuICAgICAgICAgIC8vIEF0dGFjaGluZyBsaXN0ZW5lcnMgaWYgYW55IChvbmx5IGFwcGxpY2FibGUgZm9yIGNvbWJpbmVkIGZpZWxkKVxuICAgICAgICAgIHRoaXMuY2JDb21wb25lbnQub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5KTtcbiAgICAgICAgICB0aGlzLmNiQ29tcG9uZW50Lm9uKCdmb2N1cycsIHRoaXMub25Gb2N1cyk7XG4gICAgICAgICAgdGhpcy5jYkNvbXBvbmVudC5vbignYmx1cicsIHRoaXMub25CbHVyKTtcbiAgICAgICAgICB0aGlzLmNiQ29tcG9uZW50Lm9uKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlKTtcbiAgXG4gICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpbmlkaXZpZHVhbCBmaWVsZHMgKGlmIHByZXNlbnQpXG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplRmllbGQodGhpcy5jYkNvbXBvbmVudCwgdGhpcy5udW1iZXJDb21wb25lbnQpO1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUZpZWxkKHRoaXMuY2JDb21wb25lbnQsIHRoaXMuZXhwaXJ5Q29tcG9uZW50KTtcbiAgICAgICAgICB0aGlzLmluaXRpYWxpemVGaWVsZCh0aGlzLmNiQ29tcG9uZW50LCB0aGlzLmN2dkNvbXBvbmVudCk7XG4gIFxuICAgICAgICAgIHRoaXMuY2JDb21wb25lbnQubW91bnQoYCMke3RoaXMuaWR9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpemVGaWVsZChjYkNvbXBvbmVudCwgZmllbGRFbGVtZW50KSB7XG4gICAgaWYgKGNiQ29tcG9uZW50ICYmIGZpZWxkRWxlbWVudCkge1xuICAgICAgY29uc3QgZmllbGRJbnN0YW5jZSA9IGNiQ29tcG9uZW50LmNyZWF0ZUZpZWxkKGZpZWxkRWxlbWVudC50eXBlLCB7XG4gICAgICAgIHN0eWxlOiBmaWVsZEVsZW1lbnQuc3R5bGVzIHx8IHt9LFxuICAgICAgICBwbGFjZWhvbGRlcjogZmllbGRFbGVtZW50LnBsYWNlaG9sZGVyIHx8ICcnLFxuICAgICAgfSkuYXQoYCMke2ZpZWxkRWxlbWVudC5pZH1gKTtcblxuICAgICAgZmllbGRFbGVtZW50LmZpZWxkID0gZmllbGRJbnN0YW5jZTtcblxuICAgICAgLy8gYXR0YWNoIGxpc3RlbmVyc1xuICAgICAgZmllbGRJbnN0YW5jZS5vbigncmVhZHknLCBmaWVsZEVsZW1lbnQub25SZWFkeSk7XG4gICAgICBmaWVsZEluc3RhbmNlLm9uKCdmb2N1cycsIGZpZWxkRWxlbWVudC5vbkZvY3VzKTtcbiAgICAgIGZpZWxkSW5zdGFuY2Uub24oJ2JsdXInLCBmaWVsZEVsZW1lbnQub25CbHVyKTtcbiAgICAgIGZpZWxkSW5zdGFuY2Uub24oJ2NoYW5nZScsIGZpZWxkRWxlbWVudC5vbkNoYW5nZSk7XG4gICAgICByZXR1cm4gZmllbGRJbnN0YW5jZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgdG9rZW5pemUoYWRkaXRpb25hbERhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmNiQ29tcG9uZW50LnRva2VuaXplKGFkZGl0aW9uYWxEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhdXRob3JpemVXaXRoM2RzKHBheW1lbnRJbnRlbnQ6IFBheW1lbnRJbnRlbnQsIGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YSwgY2FsbGJhY2tzOiBDYWxsYmFja3MpIHtcbiAgICByZXR1cm4gdGhpcy5jYkNvbXBvbmVudC5hdXRob3JpemVXaXRoM2RzKHBheW1lbnRJbnRlbnQsIGFkZGl0aW9uYWxEYXRhLCBjYWxsYmFja3MpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmNiQ29tcG9uZW50KSB7XG4gICAgICBjb25zdCBwcm9wcyA9IFsnaWNvbicsICdjbGFzc2VzJywgJ2ZvbnRzJywgJ2xvY2FsZScsICdzdHlsZXMnLCAncGxhY2Vob2xkZXInXTtcbiAgICAgIGNvbnN0IHsgY3VycmVudE9wdGlvbnMsIGhhc0NoYW5nZWQgfSA9IGdldFByb3BDaGFuZ2VzKGNoYW5nZXMsIHByb3BzKTtcblxuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5jYkNvbXBvbmVudC51cGRhdGUoY3VycmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=