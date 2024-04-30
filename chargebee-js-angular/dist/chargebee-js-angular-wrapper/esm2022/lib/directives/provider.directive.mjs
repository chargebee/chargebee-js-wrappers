import { Input, Component } from '@angular/core';
import { validateCbInstance } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class Provider {
    cbInstance;
    validated = false;
    constructor() { }
    ngOnChanges(changes) {
        if (validateCbInstance(this.cbInstance))
            this.validated = true;
        else {
            this.validated = false;
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Provider, deps: [], target: i0.ɵɵFactoryTarget.Component });
    /** @nocollapse */ static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: Provider, selector: "[cbProvider]", inputs: { cbInstance: "cbInstance" }, usesOnChanges: true, ngImport: i0, template: `
        <ng-container *ngIf="validated">
            <ng-content>
            </ng-content>
        </ng-container>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Provider, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY2hhcmdlYmVlLWpzLWFuZ3VsYXItd3JhcHBlci9zcmMvbGliL2RpcmVjdGl2ZXMvcHJvdmlkZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUE0SyxNQUFNLGVBQWUsQ0FBQztBQUMzTixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQVdqRCxNQUFNLE9BQU8sUUFBUTtJQUNSLFVBQVUsQ0FBVTtJQUM3QixTQUFTLEdBQVksS0FBSyxDQUFDO0lBRTNCLGdCQUFlLENBQUM7SUFFaEIsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQzsySEFaUSxRQUFROytHQUFSLFFBQVEsK0dBUFA7Ozs7O0tBS1Q7OzRGQUVRLFFBQVE7a0JBVHBCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRTs7Ozs7S0FLVDtpQkFDRjswRUFFVSxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQsIENvbnRlbnRDaGlsZHJlbiwgUmVuZGVyZXIyLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZUNiSW5zdGFuY2UgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW2NiUHJvdmlkZXJdJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmFsaWRhdGVkXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD5cbiAgICAgICAgICAgIDwvbmctY29udGVudD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgYFxuICB9KVxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBjYkluc3RhbmNlPzogb2JqZWN0O1xuICAgIHZhbGlkYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fSBcblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHZhbGlkYXRlQ2JJbnN0YW5jZSh0aGlzLmNiSW5zdGFuY2UpKVxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59Il19