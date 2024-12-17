import { Input, Directive, Output, EventEmitter, ContentChild, } from "@angular/core";
import { NumberFieldDirective } from "./number-field.directive";
import { ExpiryFieldDirective } from "./expiry-field.directive";
import { CvvFieldDirective } from "./cvv-field.directive";
import { getPropChanges } from "../../utils";
import * as i0 from "@angular/core";
export class CardFieldDirective {
    id = "";
    cbInstance = null;
    cbComponent = null;
    icon;
    classes;
    fonts;
    styles;
    locale;
    showTestCards;
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
        if (typeof window !== "undefined" &&
            typeof window["Chargebee"] !== "undefined") {
            const options = {
                icon: typeof this.icon === "boolean" ? this.icon : true,
                fonts: this.fonts || [],
                style: this.styles || {},
                locale: this.locale || "en",
                showTestCards: this.showTestCards ?? false,
                classes: this.classes || {},
                currency: this.currency || "USD",
                placeholder: this.placeholder || {},
            };
            this.cbInstance = window["Chargebee"].getInstance();
            this.cbInstance.load("components").then(() => {
                this.cbComponent = this.cbInstance.createComponent("card", options);
                // Attaching listeners if any (only applicable for combined field)
                this.cbComponent.on("ready", this.onReady);
                this.cbComponent.on("focus", this.onFocus);
                this.cbComponent.on("blur", this.onBlur);
                this.cbComponent.on("change", this.onChange);
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
            const fieldInstance = cbComponent
                .createField(fieldElement.type, {
                style: fieldElement.styles || {},
                placeholder: fieldElement.placeholder || "",
            })
                .at(`#${fieldElement.id}`);
            fieldElement.field = fieldInstance;
            // attach listeners
            fieldInstance.on("ready", fieldElement.onReady);
            fieldInstance.on("focus", fieldElement.onFocus);
            fieldInstance.on("blur", fieldElement.onBlur);
            fieldInstance.on("change", fieldElement.onChange);
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
            const props = [
                "icon",
                "classes",
                "fonts",
                "locale",
                "showTestCards",
                "styles",
                "placeholder",
            ];
            const { currentOptions, hasChanged } = getPropChanges(changes, props);
            if (hasChanged) {
                this.cbComponent.update(currentOptions);
            }
        }
    }
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: CardFieldDirective, selector: "[cbCardField]", inputs: { icon: "icon", classes: "classes", fonts: "fonts", styles: "styles", locale: "locale", showTestCards: "showTestCards", currency: "currency", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, queries: [{ propertyName: "numberComponent", first: true, predicate: NumberFieldDirective, descendants: true, static: true }, { propertyName: "expiryComponent", first: true, predicate: ExpiryFieldDirective, descendants: true, static: true }, { propertyName: "cvvComponent", first: true, predicate: CvvFieldDirective, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[cbCardField]",
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { icon: [{
                type: Input
            }], classes: [{
                type: Input
            }], fonts: [{
                type: Input
            }], styles: [{
                type: Input
            }], locale: [{
                type: Input
            }], showTestCards: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFyZ2ViZWUtanMtYW5ndWxhci13cmFwcGVyL3NyYy9saWIvZGlyZWN0aXZlcy9jYXJkLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksR0FLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVE3QyxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDUixVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFFVixJQUFJLENBQVc7SUFDZixPQUFPLENBQVU7SUFDakIsS0FBSyxDQUFVO0lBQ2YsTUFBTSxDQUFVO0lBQ2hCLE1BQU0sQ0FBVTtJQUNoQixhQUFhLENBQVc7SUFDeEIsUUFBUSxDQUFVO0lBQ2xCLFdBQVcsQ0FJbEI7SUFFb0QsZUFBZSxDQUFDO0lBQ2hCLGVBQWUsQ0FBQztJQUNuQixZQUFZLENBQUM7SUFFaEUsdUNBQXVDO0lBQzdCLEtBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5QyxLQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUMsSUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzdDLE1BQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6RCxJQUFJLENB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aEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQU1nRCxlQUFlO3NCQUFwRSxZQUFZO3VCQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDRSxlQUFlO3NCQUFwRSxZQUFZO3VCQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDRCxZQUFZO3NCQUE5RCxZQUFZO3VCQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFHdkMsS0FBSztzQkFBZCxNQUFNO2dCQUNHLEtBQUs7c0JBQWQsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZERpcmVjdGl2ZSB9IGZyb20gXCIuL251bWJlci1maWVsZC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IEV4cGlyeUZpZWxkRGlyZWN0aXZlIH0gZnJvbSBcIi4vZXhwaXJ5LWZpZWxkLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgQ3Z2RmllbGREaXJlY3RpdmUgfSBmcm9tIFwiLi9jdnYtZmllbGQuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBnZXRQcm9wQ2hhbmdlcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgUGF5bWVudEludGVudCwgQWRkaXRpb25hbERhdGEsIENhbGxiYWNrcyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5kZWNsYXJlIHZhciBDaGFyZ2ViZWU6IGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltjYkNhcmRGaWVsZF1cIixcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBpZCA9IFwiXCI7XG4gIGNiSW5zdGFuY2UgPSBudWxsO1xuICBjYkNvbXBvbmVudCA9IG51bGw7XG5cbiAgQElucHV0KCkgaWNvbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsYXNzZXM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIGZvbnRzPzogb2JqZWN0O1xuICBASW5wdXQoKSBzdHlsZXM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIGxvY2FsZT86IHN0cmluZztcbiAgQElucHV0KCkgc2hvd1Rlc3RDYXJkcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGN1cnJlbmN5Pzogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHtcbiAgICBudW1iZXI/OiBzdHJpbmc7XG4gICAgZXhwaXJ5Pzogc3RyaW5nO1xuICAgIGN2dj86IHN0cmluZztcbiAgfTtcblxuICBAQ29udGVudENoaWxkKE51bWJlckZpZWxkRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBudW1iZXJDb21wb25lbnQ7XG4gIEBDb250ZW50Q2hpbGQoRXhwaXJ5RmllbGREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGV4cGlyeUNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChDdnZGaWVsZERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgY3Z2Q29tcG9uZW50O1xuXG4gIC8vIEJlbG93IGV2ZW50cyBvbmx5IGZvciBjb21iaW5lZC1maWVsZFxuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxvYWQ6IFByb21pc2U8Ym9vbGVhbj47XG4gIGluaXRpYWxpemF0aW9uOiBQcm9taXNlPGFueT47XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAoZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pZCA9IGVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgfVxuICB9XG5cbiAgb25SZWFkeSA9IChjYXJkQ29tcG9uZW50OiBhbnksIGZpZWxkOiBhbnkpID0+IHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgLy8gRW1pdCBhbGxvd3Mgb25seSBvbmUgYXJndW1lbnQgKFNwZWMgZGV2aWF0aW9uKVxuICAgICAgZGF0YSA9IHsgY2FyZENvbXBvbmVudCwgZmllbGQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGNhcmRDb21wb25lbnQ7XG4gICAgfVxuICAgIHRoaXMucmVhZHkuZW1pdChkYXRhKTtcbiAgfTtcblxuICAvLyBCZWxvdyBldmVudHMgb25seSBmb3IgQ29tYmluZWQgZmllbGRcbiAgb25Gb2N1cyA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuZm9jdXMuZW1pdChzdGF0dXMpO1xuICB9O1xuICBvbkJsdXIgPSAoc3RhdHVzOiBhbnkpID0+IHtcbiAgICB0aGlzLmJsdXIuZW1pdChzdGF0dXMpO1xuICB9O1xuICBvbkNoYW5nZSA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoc3RhdHVzKTtcbiAgfTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB0eXBlb2Ygd2luZG93W1wiQ2hhcmdlYmVlXCJdICE9PSBcInVuZGVmaW5lZFwiXG4gICAgKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBpY29uOiB0eXBlb2YgdGhpcy5pY29uID09PSBcImJvb2xlYW5cIiA/IHRoaXMuaWNvbiA6IHRydWUsXG4gICAgICAgIGZvbnRzOiB0aGlzLmZvbnRzIHx8IFtdLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZXMgfHwge30sXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUgfHwgXCJlblwiLFxuICAgICAgICBzaG93VGVzdENhcmRzOiB0aGlzLnNob3dUZXN0Q2FyZHMgPz8gZmFsc2UsXG4gICAgICAgIGNsYXNzZXM6IHRoaXMuY2xhc3NlcyB8fCB7fSxcbiAgICAgICAgY3VycmVuY3k6IHRoaXMuY3VycmVuY3kgfHwgXCJVU0RcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfHwge30sXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNiSW5zdGFuY2UgPSB3aW5kb3dbXCJDaGFyZ2ViZWVcIl0uZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgdGhpcy5jYkluc3RhbmNlLmxvYWQoXCJjb21wb25lbnRzXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNiQ29tcG9uZW50ID0gdGhpcy5jYkluc3RhbmNlLmNyZWF0ZUNvbXBvbmVudChcImNhcmRcIiwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gQXR0YWNoaW5nIGxpc3RlbmVycyBpZiBhbnkgKG9ubHkgYXBwbGljYWJsZSBmb3IgY29tYmluZWQgZmllbGQpXG4gICAgICAgIHRoaXMuY2JDb21wb25lbnQub24oXCJyZWFkeVwiLCB0aGlzLm9uUmVhZHkpO1xuICAgICAgICB0aGlzLmNiQ29tcG9uZW50Lm9uKFwiZm9jdXNcIiwgdGhpcy5vbkZvY3VzKTtcbiAgICAgICAgdGhpcy5jYkNvbXBvbmVudC5vbihcImJsdXJcIiwgdGhpcy5vbkJsdXIpO1xuICAgICAgICB0aGlzLmNiQ29tcG9uZW50Lm9uKFwiY2hhbmdlXCIsIHRoaXMub25DaGFuZ2UpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgaW5pZGl2aWR1YWwgZmllbGRzIChpZiBwcmVzZW50KVxuICAgICAgICB0aGlzLmluaXRpYWxpemVGaWVsZCh0aGlzLmNiQ29tcG9uZW50LCB0aGlzLm51bWJlckNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUZpZWxkKHRoaXMuY2JDb21wb25lbnQsIHRoaXMuZXhwaXJ5Q29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRmllbGQodGhpcy5jYkNvbXBvbmVudCwgdGhpcy5jdnZDb21wb25lbnQpO1xuXG4gICAgICAgIHRoaXMuY2JDb21wb25lbnQubW91bnQoYCMke3RoaXMuaWR9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplRmllbGQoY2JDb21wb25lbnQsIGZpZWxkRWxlbWVudCkge1xuICAgIGlmIChjYkNvbXBvbmVudCAmJiBmaWVsZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGZpZWxkSW5zdGFuY2UgPSBjYkNvbXBvbmVudFxuICAgICAgICAuY3JlYXRlRmllbGQoZmllbGRFbGVtZW50LnR5cGUsIHtcbiAgICAgICAgICBzdHlsZTogZmllbGRFbGVtZW50LnN0eWxlcyB8fCB7fSxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogZmllbGRFbGVtZW50LnBsYWNlaG9sZGVyIHx8IFwiXCIsXG4gICAgICAgIH0pXG4gICAgICAgIC5hdChgIyR7ZmllbGRFbGVtZW50LmlkfWApO1xuXG4gICAgICBmaWVsZEVsZW1lbnQuZmllbGQgPSBmaWVsZEluc3RhbmNlO1xuXG4gICAgICAvLyBhdHRhY2ggbGlzdGVuZXJzXG4gICAgICBmaWVsZEluc3RhbmNlLm9uKFwicmVhZHlcIiwgZmllbGRFbGVtZW50Lm9uUmVhZHkpO1xuICAgICAgZmllbGRJbnN0YW5jZS5vbihcImZvY3VzXCIsIGZpZWxkRWxlbWVudC5vbkZvY3VzKTtcbiAgICAgIGZpZWxkSW5zdGFuY2Uub24oXCJibHVyXCIsIGZpZWxkRWxlbWVudC5vbkJsdXIpO1xuICAgICAgZmllbGRJbnN0YW5jZS5vbihcImNoYW5nZVwiLCBmaWVsZEVsZW1lbnQub25DaGFuZ2UpO1xuICAgICAgcmV0dXJuIGZpZWxkSW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHRva2VuaXplKGFkZGl0aW9uYWxEYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5jYkNvbXBvbmVudC50b2tlbml6ZShhZGRpdGlvbmFsRGF0YSk7XG4gIH1cblxuICBwdWJsaWMgYXV0aG9yaXplV2l0aDNkcyhcbiAgICBwYXltZW50SW50ZW50OiBQYXltZW50SW50ZW50LFxuICAgIGFkZGl0aW9uYWxEYXRhOiBBZGRpdGlvbmFsRGF0YSxcbiAgICBjYWxsYmFja3M6IENhbGxiYWNrc1xuICApIHtcbiAgICByZXR1cm4gdGhpcy5jYkNvbXBvbmVudC5hdXRob3JpemVXaXRoM2RzKFxuICAgICAgcGF5bWVudEludGVudCxcbiAgICAgIGFkZGl0aW9uYWxEYXRhLFxuICAgICAgY2FsbGJhY2tzXG4gICAgKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jYkNvbXBvbmVudCkge1xuICAgICAgY29uc3QgcHJvcHMgPSBbXG4gICAgICAgIFwiaWNvblwiLFxuICAgICAgICBcImNsYXNzZXNcIixcbiAgICAgICAgXCJmb250c1wiLFxuICAgICAgICBcImxvY2FsZVwiLFxuICAgICAgICBcInNob3dUZXN0Q2FyZHNcIixcbiAgICAgICAgXCJzdHlsZXNcIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHsgY3VycmVudE9wdGlvbnMsIGhhc0NoYW5nZWQgfSA9IGdldFByb3BDaGFuZ2VzKGNoYW5nZXMsIHByb3BzKTtcblxuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5jYkNvbXBvbmVudC51cGRhdGUoY3VycmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19