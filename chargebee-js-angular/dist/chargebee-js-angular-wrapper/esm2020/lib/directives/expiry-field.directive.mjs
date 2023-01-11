import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class ExpiryFieldDirective {
    constructor(el) {
        this.ready = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.id = '';
        this.field = null;
        this.type = 'expiry';
        this.onFocus = (status) => {
            this.focus.emit(status);
        };
        this.onBlur = (status) => {
            this.blur.emit(status);
        };
        this.onReady = (el) => {
            this.ready.emit(el);
        };
        this.onChange = (status) => {
            this.change.emit(status);
        };
        if (el.nativeElement) {
            this.id = el.nativeElement.id;
        }
    }
    ngOnChanges(changes) {
        if (this.field) {
            const props = ['placeholder', 'styles'];
            const { hasChanged, currentOptions } = getPropChanges(changes, props);
            if (hasChanged) {
                this.field.update(currentOptions);
            }
        }
    }
}
/** @nocollapse */ ExpiryFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: ExpiryFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ ExpiryFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.8", type: ExpiryFieldDirective, selector: "[cbExpiryField]", inputs: { cbComponent: "cbComponent", styles: "styles", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: ExpiryFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cbExpiryField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { cbComponent: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwaXJ5LWZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJnZWJlZS1qcy1hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9kaXJlY3RpdmVzL2V4cGlyeS1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLG9CQUFvQjtJQWMvQixZQUFZLEVBQWM7UUFUaEIsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQVFoQixZQUFPLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUE7UUFFRCxXQUFNLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUE7UUFFRCxZQUFPLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUE7UUFFRCxhQUFRLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUE7UUFuQkMsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBa0JELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7O29JQTdDVSxvQkFBb0I7d0hBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2lHQUVVLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksS0FBSztzQkFBZCxNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvcENoYW5nZXMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjYkV4cGlyeUZpZWxkXSdcbn0pXG5leHBvcnQgY2xhc3MgRXhwaXJ5RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjYkNvbXBvbmVudDtcbiAgQElucHV0KCkgc3R5bGVzPzogb2JqZWN0O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlkID0gJyc7XG4gIGZpZWxkID0gbnVsbDtcbiAgdHlwZSA9ICdleHBpcnknO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKGVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaWQgPSBlbC5uYXRpdmVFbGVtZW50LmlkO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG9uQmx1ciA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuYmx1ci5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBvblJlYWR5ID0gKGVsOiBhbnkpID0+IHtcbiAgICB0aGlzLnJlYWR5LmVtaXQoZWwpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuZmllbGQpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gWydwbGFjZWhvbGRlcicsICdzdHlsZXMnXTtcbiAgICAgIGNvbnN0IHsgaGFzQ2hhbmdlZCwgY3VycmVudE9wdGlvbnMgfSA9IGdldFByb3BDaGFuZ2VzKGNoYW5nZXMsIHByb3BzKTtcblxuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5maWVsZC51cGRhdGUoY3VycmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbiJdfQ==