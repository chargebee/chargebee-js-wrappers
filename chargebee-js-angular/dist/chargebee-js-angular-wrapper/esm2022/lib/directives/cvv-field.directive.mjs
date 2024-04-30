import { Input, Directive, Output, EventEmitter } from '@angular/core';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class CvvFieldDirective {
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
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CvvFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: CvvFieldDirective, selector: "[cbCvvField]", inputs: { styles: "styles", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CvvFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cbCvvField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { styles: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Z2LWZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJnZWJlZS1qcy1hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9kaXJlY3RpdmVzL2N2di1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ1YsTUFBTSxDQUFVO0lBQ2hCLFdBQVcsQ0FBVTtJQUVwQixLQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUMsS0FBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzlDLElBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM3QyxNQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFekQsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNSLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDYixJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRWIsWUFBWSxFQUFjO1FBQ3hCLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQTtJQUVELE1BQU0sR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQTtJQUVELE9BQU8sR0FBRyxDQUFDLEVBQU8sRUFBRSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQTtJQUVELFFBQVEsR0FBRyxDQUFDLE1BQVcsRUFBRSxFQUFFO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQTtJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7MkhBN0NVLGlCQUFpQjsrR0FBakIsaUJBQWlCOzs0RkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6QjtpR0FHVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFFSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXRQcm9wQ2hhbmdlcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NiQ3Z2RmllbGRdJ1xufSlcbmV4cG9ydCBjbGFzcyBDdnZGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGNiQ29tcG9uZW50ID0gbnVsbDtcbiAgQElucHV0KCkgc3R5bGVzPzogb2JqZWN0O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGlkID0gJyc7XG4gIGZpZWxkID0gbnVsbDtcbiAgdHlwZSA9ICdjdnYnO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKGVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaWQgPSBlbC5uYXRpdmVFbGVtZW50LmlkO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG9uQmx1ciA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuYmx1ci5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBvblJlYWR5ID0gKGVsOiBhbnkpID0+IHtcbiAgICB0aGlzLnJlYWR5LmVtaXQoZWwpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuZmllbGQpIHtcbiAgICAgIGNvbnN0IHByb3BzID0gWydwbGFjZWhvbGRlcicsICdzdHlsZXMnXTtcbiAgICAgIGNvbnN0IHsgaGFzQ2hhbmdlZCwgY3VycmVudE9wdGlvbnMgfSA9IGdldFByb3BDaGFuZ2VzKGNoYW5nZXMsIHByb3BzKTtcblxuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5maWVsZC51cGRhdGUoY3VycmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=