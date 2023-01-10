import { Input, Directive, Output, EventEmitter } from '@angular/core';
import { getPropChanges } from '../../utils';
import * as i0 from "@angular/core";
export class CvvFieldDirective {
    constructor(el) {
        this.cbComponent = null;
        this.ready = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.id = '';
        this.field = null;
        this.type = 'cvv';
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
/** @nocollapse */ CvvFieldDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: CvvFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ CvvFieldDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.8", type: CvvFieldDirective, selector: "[cbCvvField]", inputs: { styles: "styles", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: CvvFieldDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Z2LWZpZWxkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NoYXJnZWJlZS1qcy1hbmd1bGFyLXdyYXBwZXIvc3JjL2xpYi9kaXJlY3RpdmVzL2N2di1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLGlCQUFpQjtJQWM1QixZQUFZLEVBQWM7UUFiMUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFJVCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUMsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUNSLFVBQUssR0FBRyxJQUFJLENBQUM7UUFDYixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBUWIsWUFBTyxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFBO1FBRUQsV0FBTSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFBO1FBRUQsWUFBTyxHQUFHLENBQUMsRUFBTyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFBO1FBRUQsYUFBUSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBO1FBbkJDLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQWtCRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDeEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXRFLElBQUksVUFBVSxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDOztpSUE3Q1UsaUJBQWlCO3FIQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7aUdBR1UsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksS0FBSztzQkFBZCxNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZ2V0UHJvcENoYW5nZXMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjYkN2dkZpZWxkXSdcbn0pXG5leHBvcnQgY2xhc3MgQ3Z2RmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBjYkNvbXBvbmVudCA9IG51bGw7XG4gIEBJbnB1dCgpIHN0eWxlcz86IG9iamVjdDtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpZCA9ICcnO1xuICBmaWVsZCA9IG51bGw7XG4gIHR5cGUgPSAnY3Z2JztcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIGlmIChlbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlkID0gZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5mb2N1cy5lbWl0KHN0YXR1cyk7XG4gIH1cblxuICBvbkJsdXIgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmJsdXIuZW1pdChzdGF0dXMpO1xuICB9XG5cbiAgb25SZWFkeSA9IChlbDogYW55KSA9PiB7XG4gICAgdGhpcy5yZWFkeS5lbWl0KGVsKTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChzdGF0dXMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmZpZWxkKSB7XG4gICAgICBjb25zdCBwcm9wcyA9IFsncGxhY2Vob2xkZXInLCAnc3R5bGVzJ107XG4gICAgICBjb25zdCB7IGhhc0NoYW5nZWQsIGN1cnJlbnRPcHRpb25zIH0gPSBnZXRQcm9wQ2hhbmdlcyhjaGFuZ2VzLCBwcm9wcyk7XG5cbiAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuZmllbGQudXBkYXRlKGN1cnJlbnRPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19