import { Input, Directive, Output, EventEmitter, ContentChild } from '@angular/core';
import { NumberFieldDirective } from './number-field.directive';
import { ExpiryFieldDirective } from './expiry-field.directive';
import { CvvFieldDirective } from './cvv-field.directive';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class CardFieldDirective {
    id = '';
    cbInstance = null;
    cbComponent = null;
    icon;
    classes;
    fonts;
    styles;
    locale;
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
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CardFieldDirective, selector: "[cbCardField]", inputs: { icon: "icon", classes: "classes", fonts: "fonts", styles: "styles", locale: "locale", currency: "currency", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, queries: [{ propertyName: "numberComponent", first: true, predicate: NumberFieldDirective, descendants: true, static: true }, { propertyName: "expiryComponent", first: true, predicate: ExpiryFieldDirective, descendants: true, static: true }, { propertyName: "cvvComponent", first: true, predicate: CvvFieldDirective, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardFieldDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFyZ2ViZWUtanMtYW5ndWxhci13cmFwcGVyL3NyYy9saWIvZGlyZWN0aXZlcy9jYXJkLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBZ0QsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFRN0MsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ1IsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNsQixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBRVYsSUFBSSxDQUFXO0lBQ2YsT0FBTyxDQUFVO0lBQ2pCLEtBQUssQ0FBVTtJQUNmLE1BQU0sQ0FBVTtJQUNoQixNQUFNLENBQVU7SUFDaEIsUUFBUSxDQUFVO0lBQ2xCLFdBQVcsQ0FJbEI7SUFFa0QsZUFBZSxDQUFDO0lBQ2hCLGVBQWUsQ0FBQztJQUNuQixZQUFZLENBQUM7SUFFOUQsdUNBQXVDO0lBQzdCLEtBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5QyxLQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUMsSUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzdDLE1BQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6RCxJQUFJLENBQW1CO0lBQ3ZCLGNBQWMs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QVk7c0JBQTVELFlBQVk7dUJBQUMsaUJBQWlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO2dCQUdyQyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnVtYmVyRmllbGREaXJlY3RpdmUgfSBmcm9tICcuL251bWJlci1maWVsZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXhwaXJ5RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2V4cGlyeS1maWVsZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ3Z2RmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2N2di1maWVsZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgZ2V0UHJvcENoYW5nZXMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBQYXltZW50SW50ZW50LCBBZGRpdGlvbmFsRGF0YSwgQ2FsbGJhY2tzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5kZWNsYXJlIHZhciBDaGFyZ2ViZWU6IGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NiQ2FyZEZpZWxkXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBpZCA9ICcnO1xuICBjYkluc3RhbmNlID0gbnVsbDtcbiAgY2JDb21wb25lbnQgPSBudWxsO1xuXG4gIEBJbnB1dCgpIGljb24/OiBib29sZWFuO1xuICBASW5wdXQoKSBjbGFzc2VzPzogb2JqZWN0O1xuICBASW5wdXQoKSBmb250cz86IG9iamVjdDtcbiAgQElucHV0KCkgc3R5bGVzPzogb2JqZWN0O1xuICBASW5wdXQoKSBsb2NhbGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1cnJlbmN5Pzogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHtcbiAgICBudW1iZXI/OiBzdHJpbmc7XG4gICAgZXhwaXJ5Pzogc3RyaW5nO1xuICAgIGN2dj86IHN0cmluZztcbiAgfTtcblxuICBAQ29udGVudENoaWxkKE51bWJlckZpZWxkRGlyZWN0aXZlLCB7c3RhdGljOiB0cnVlfSkgbnVtYmVyQ29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKEV4cGlyeUZpZWxkRGlyZWN0aXZlLCB7c3RhdGljOiB0cnVlfSkgZXhwaXJ5Q29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKEN2dkZpZWxkRGlyZWN0aXZlLCB7c3RhdGljOiB0cnVlfSkgY3Z2Q29tcG9uZW50O1xuXG4gIC8vIEJlbG93IGV2ZW50cyBvbmx5IGZvciBjb21iaW5lZC1maWVsZFxuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxvYWQ6IFByb21pc2U8Ym9vbGVhbj47XG4gIGluaXRpYWxpemF0aW9uOiBQcm9taXNlPGFueT47XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pZCA9IGVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgfVxuICB9XG5cbiAgb25SZWFkeSA9IChjYXJkQ29tcG9uZW50OiBhbnksIGZpZWxkOiBhbnkpID0+IHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgLy8gRW1pdCBhbGxvd3Mgb25seSBvbmUgYXJndW1lbnQgKFNwZWMgZGV2aWF0aW9uKVxuICAgICAgZGF0YSA9IHtjYXJkQ29tcG9uZW50LCBmaWVsZH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBjYXJkQ29tcG9uZW50O1xuICAgIH1cbiAgICB0aGlzLnJlYWR5LmVtaXQoZGF0YSk7XG4gIH1cblxuICAvLyBCZWxvdyBldmVudHMgb25seSBmb3IgQ29tYmluZWQgZmllbGRcbiAgb25Gb2N1cyA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuZm9jdXMuZW1pdChzdGF0dXMpO1xuICB9XG4gIG9uQmx1ciA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuYmx1ci5lbWl0KHN0YXR1cyk7XG4gIH1cbiAgb25DaGFuZ2UgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvd1snQ2hhcmdlYmVlJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBpY29uOiB0eXBlb2YgdGhpcy5pY29uID09PSAnYm9vbGVhbicgPyB0aGlzLmljb24gOiB0cnVlLFxuICAgICAgICBmb250czogdGhpcy5mb250cyB8fCBbXSxcbiAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVzIHx8IHt9LFxuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlIHx8ICdlbicsXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuY2xhc3NlcyB8fCB7fSxcbiAgICAgICAgY3VycmVuY3k6IHRoaXMuY3VycmVuY3kgfHwgJ1VTRCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyIHx8IHt9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5jYkluc3RhbmNlID0gd2luZG93WydDaGFyZ2ViZWUnXS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICB0aGlzLmNiSW5zdGFuY2UubG9hZCgnY29tcG9uZW50cycpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNiQ29tcG9uZW50ID0gdGhpcy5jYkluc3RhbmNlLmNyZWF0ZUNvbXBvbmVudCgnY2FyZCcsIG9wdGlvbnMpO1xuICBcbiAgICAgICAgICAvLyBBdHRhY2hpbmcgbGlzdGVuZXJzIGlmIGFueSAob25seSBhcHBsaWNhYmxlIGZvciBjb21iaW5lZCBmaWVsZClcbiAgICAgICAgICB0aGlzLmNiQ29tcG9uZW50Lm9uKCdyZWFkeScsIHRoaXMub25SZWFkeSk7XG4gICAgICAgICAgdGhpcy5jYkNvbXBvbmVudC5vbignZm9jdXMnLCB0aGlzLm9uRm9jdXMpO1xuICAgICAgICAgIHRoaXMuY2JDb21wb25lbnQub24oJ2JsdXInLCB0aGlzLm9uQmx1cik7XG4gICAgICAgICAgdGhpcy5jYkNvbXBvbmVudC5vbignY2hhbmdlJywgdGhpcy5vbkNoYW5nZSk7XG4gIFxuICAgICAgICAgIC8vIEluaXRpYWxpemUgaW5pZGl2aWR1YWwgZmllbGRzIChpZiBwcmVzZW50KVxuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUZpZWxkKHRoaXMuY2JDb21wb25lbnQsIHRoaXMubnVtYmVyQ29tcG9uZW50KTtcbiAgICAgICAgICB0aGlzLmluaXRpYWxpemVGaWVsZCh0aGlzLmNiQ29tcG9uZW50LCB0aGlzLmV4cGlyeUNvbXBvbmVudCk7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplRmllbGQodGhpcy5jYkNvbXBvbmVudCwgdGhpcy5jdnZDb21wb25lbnQpO1xuICBcbiAgICAgICAgICB0aGlzLmNiQ29tcG9uZW50Lm1vdW50KGAjJHt0aGlzLmlkfWApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplRmllbGQoY2JDb21wb25lbnQsIGZpZWxkRWxlbWVudCkge1xuICAgIGlmIChjYkNvbXBvbmVudCAmJiBmaWVsZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGZpZWxkSW5zdGFuY2UgPSBjYkNvbXBvbmVudC5jcmVhdGVGaWVsZChmaWVsZEVsZW1lbnQudHlwZSwge1xuICAgICAgICBzdHlsZTogZmllbGRFbGVtZW50LnN0eWxlcyB8fCB7fSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZpZWxkRWxlbWVudC5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgIH0pLmF0KGAjJHtmaWVsZEVsZW1lbnQuaWR9YCk7XG5cbiAgICAgIGZpZWxkRWxlbWVudC5maWVsZCA9IGZpZWxkSW5zdGFuY2U7XG5cbiAgICAgIC8vIGF0dGFjaCBsaXN0ZW5lcnNcbiAgICAgIGZpZWxkSW5zdGFuY2Uub24oJ3JlYWR5JywgZmllbGRFbGVtZW50Lm9uUmVhZHkpO1xuICAgICAgZmllbGRJbnN0YW5jZS5vbignZm9jdXMnLCBmaWVsZEVsZW1lbnQub25Gb2N1cyk7XG4gICAgICBmaWVsZEluc3RhbmNlLm9uKCdibHVyJywgZmllbGRFbGVtZW50Lm9uQmx1cik7XG4gICAgICBmaWVsZEluc3RhbmNlLm9uKCdjaGFuZ2UnLCBmaWVsZEVsZW1lbnQub25DaGFuZ2UpO1xuICAgICAgcmV0dXJuIGZpZWxkSW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHRva2VuaXplKGFkZGl0aW9uYWxEYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5jYkNvbXBvbmVudC50b2tlbml6ZShhZGRpdGlvbmFsRGF0YSk7XG4gIH1cblxuICBwdWJsaWMgYXV0aG9yaXplV2l0aDNkcyhwYXltZW50SW50ZW50OiBQYXltZW50SW50ZW50LCBhZGRpdGlvbmFsRGF0YTogQWRkaXRpb25hbERhdGEsIGNhbGxiYWNrczogQ2FsbGJhY2tzKSB7XG4gICAgcmV0dXJuIHRoaXMuY2JDb21wb25lbnQuYXV0aG9yaXplV2l0aDNkcyhwYXltZW50SW50ZW50LCBhZGRpdGlvbmFsRGF0YSwgY2FsbGJhY2tzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jYkNvbXBvbmVudCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBbJ2ljb24nLCAnY2xhc3NlcycsICdmb250cycsICdsb2NhbGUnLCAnc3R5bGVzJywgJ3BsYWNlaG9sZGVyJ107XG4gICAgICBjb25zdCB7IGN1cnJlbnRPcHRpb25zLCBoYXNDaGFuZ2VkIH0gPSBnZXRQcm9wQ2hhbmdlcyhjaGFuZ2VzLCBwcm9wcyk7XG5cbiAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuY2JDb21wb25lbnQudXBkYXRlKGN1cnJlbnRPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19