import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class NumberFieldDirective {
    constructor(el) {
        this.ready = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.id = '';
        this.field = null;
        this.type = 'number';
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
/** @nocollapse */ NumberFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: NumberFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ NumberFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.8", type: NumberFieldDirective, selector: "[cbNumberField]", inputs: { styles: "styles", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: NumberFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cbNumberField]'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJnZWJlZS1qcy1hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9kaXJlY3RpdmVzL251bWJlci1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFDNUcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLG9CQUFvQjtJQWEvQixZQUFZLEVBQWM7UUFUaEIsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXpELE9BQUUsR0FBRyxFQUFFLENBQUM7UUFDUixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQVFoQixZQUFPLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUE7UUFFRCxXQUFNLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUE7UUFFRCxZQUFPLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUE7UUFFRCxhQUFRLEdBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUE7UUFuQkMsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBa0JELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7O29JQTVDVSxvQkFBb0I7d0hBQXBCLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCO2lHQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvcENoYW5nZXMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjYk51bWJlckZpZWxkXSdcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzdHlsZXM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaWQgPSAnJztcbiAgZmllbGQgPSBudWxsO1xuICB0eXBlID0gJ251bWJlcic7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pZCA9IGVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cyA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuZm9jdXMuZW1pdChzdGF0dXMpO1xuICB9XG5cbiAgb25CbHVyID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5ibHVyLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG9uUmVhZHkgPSAoZWw6IGFueSkgPT4ge1xuICAgIHRoaXMucmVhZHkuZW1pdChlbCk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5maWVsZCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBbJ3BsYWNlaG9sZGVyJywgJ3N0eWxlcyddO1xuICAgICAgY29uc3QgeyBoYXNDaGFuZ2VkLCBjdXJyZW50T3B0aW9ucyB9ID0gZ2V0UHJvcENoYW5nZXMoY2hhbmdlcywgcHJvcHMpO1xuXG4gICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmZpZWxkLnVwZGF0ZShjdXJyZW50T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==