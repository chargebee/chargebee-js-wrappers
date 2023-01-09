import { Input, Component } from '@angular/core';
import { validateCbInstance } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class Provider {
    constructor() {
        this.validated = false;
    }
    ngOnChanges(changes) {
        if (validateCbInstance(this.cbInstance))
            this.validated = true;
        else {
            this.validated = false;
        }
    }
}
/** @nocollapse */ Provider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: Provider, deps: [], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ Provider.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.8", type: Provider, selector: "[cbProvider]", inputs: { cbInstance: "cbInstance" }, usesOnChanges: true, ngImport: i0, template: `
        <ng-container *ngIf="validated">
            <ng-content>
            </ng-content>
        </ng-container>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: Provider, decorators: [{
            type: Component,
            args: [{
                    selector: '[cbProvider]',
                    template: `
        <ng-container *ngIf="validated">
            <ng-content>
            </ng-content>
        </ng-container>
    `
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { cbInstance: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcmdlYmVlLWpzLWFuZ3VsYXItd3JhcHBlci9zcmMvbGliL2RpcmVjdGl2ZXMvcHJvdmlkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUE0SyxNQUFNLGVBQWUsQ0FBQztBQUMzTixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQVdqRCxNQUFNLE9BQU8sUUFBUTtJQUlqQjtRQUZBLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFFWixDQUFDO0lBRWhCLFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUMxQjtJQUNMLENBQUM7O3dIQVpRLFFBQVE7NEdBQVIsUUFBUSwrR0FQUDs7Ozs7S0FLVDsyRkFFUSxRQUFRO2tCQVRwQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7O0tBS1Q7aUJBQ0Y7MEVBRVUsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT25Jbml0LCBDb250ZW50Q2hpbGRyZW4sIFJlbmRlcmVyMiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdmFsaWRhdGVDYkluc3RhbmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ1tjYlByb3ZpZGVyXScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZhbGlkYXRlZFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIGBcbiAgfSlcbmV4cG9ydCBjbGFzcyBQcm92aWRlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgY2JJbnN0YW5jZT86IG9iamVjdDtcbiAgICB2YWxpZGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge30gXG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmICh2YWxpZGF0ZUNiSW5zdGFuY2UodGhpcy5jYkluc3RhbmNlKSlcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==