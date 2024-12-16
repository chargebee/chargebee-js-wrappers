import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class ExpiryFieldDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwaXJ5LWZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJnZWJlZS1qcy1hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9kaXJlY3RpdmVzL2V4cGlyeS1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLG9CQUFvQjtJQUN0QixXQUFXLENBQUM7SUFDWixNQUFNLENBQVU7SUFDaEIsV0FBVyxDQUFVO0lBRXBCLEtBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5QyxLQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUMsSUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzdDLE1BQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6RCxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNiLElBQUksR0FBRyxRQUFRLENBQUM7SUFFaEIsWUFBWSxFQUFjO1FBQ3hCLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUE7SUFFRCxNQUFNLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUE7SUFFRCxPQUFPLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUE7SUFFRCxRQUFRLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUE7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEUsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7MkhBN0NVLG9CQUFvQjsrR0FBcEIsb0JBQW9COzs0RkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOytFQUVVLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksS0FBSztzQkFBZCxNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvcENoYW5nZXMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjYkV4cGlyeUZpZWxkXSdcbn0pXG5leHBvcnQgY2xhc3MgRXhwaXJ5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjYkNvbXBvbmVudDtcbiAgQElucHV0KCkgc3R5bGVzPzogb2JqZWN0O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlkID0gJyc7XG4gIGZpZWxkID0gbnVsbDtcbiAgdHlwZSA9ICdleHBpcnknO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKGVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaWQgPSBlbC5uYXRpdmVFbGVtZW50LmlkO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG9uQmx1ciA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuYmx1ci5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBvblJlYWR5ID0gKGVsOiBhbnkpID0+IHtcbiAgICB0aGlzLnJlYWR5LmVtaXQoZWwpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuZmllbGQpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gWydwbGFjZWhvbGRlcicsICdzdHlsZXMnXTtcbiAgICAgIGNvbnN0IHsgaGFzQ2hhbmdlZCwgY3VycmVudE9wdGlvbnMgfSA9IGdldFByb3BDaGFuZ2VzKGNoYW5nZXMsIHByb3BzKTtcblxuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5maWVsZC51cGRhdGUoY3VycmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbiJdfQ==