import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class NumberFieldDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJnZWJlZS1qcy1hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9kaXJlY3RpdmVzL251bWJlci1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLG9CQUFvQjtJQUN0QixNQUFNLENBQVU7SUFDaEIsV0FBVyxDQUFVO0lBRXBCLEtBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5QyxLQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUMsSUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzdDLE1BQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6RCxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ1IsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNiLElBQUksR0FBRyxRQUFRLENBQUM7SUFFaEIsWUFBWSxFQUFjO1FBQ3hCLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUE7SUFFRCxNQUFNLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUE7SUFFRCxPQUFPLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUE7SUFFRCxRQUFRLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUE7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEUsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7MkhBNUNVLG9CQUFvQjsrR0FBcEIsb0JBQW9COzs0RkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOytFQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvcENoYW5nZXMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjYk51bWJlckZpZWxkXSdcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzdHlsZXM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaWQgPSAnJztcbiAgZmllbGQgPSBudWxsO1xuICB0eXBlID0gJ251bWJlcic7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pZCA9IGVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cyA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuZm9jdXMuZW1pdChzdGF0dXMpO1xuICB9XG5cbiAgb25CbHVyID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5ibHVyLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG9uUmVhZHkgPSAoZWw6IGFueSkgPT4ge1xuICAgIHRoaXMucmVhZHkuZW1pdChlbCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5maWVsZCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBbJ3BsYWNlaG9sZGVyJywgJ3N0eWxlcyddO1xuICAgICAgY29uc3QgeyBoYXNDaGFuZ2VkLCBjdXJyZW50T3B0aW9ucyB9ID0gZ2V0UHJvcENoYW5nZXMoY2hhbmdlcywgcHJvcHMpO1xuXG4gICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmZpZWxkLnVwZGF0ZShjdXJyZW50T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==