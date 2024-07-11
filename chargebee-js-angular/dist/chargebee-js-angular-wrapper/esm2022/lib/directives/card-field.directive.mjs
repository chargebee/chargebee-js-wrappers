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
    /** @nocollapse */ static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: CardFieldDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
    /** @nocollapse */ static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.11", type: CardFieldDirective, selector: "[cbCardField]", inputs: { icon: "icon", classes: "classes", fonts: "fonts", styles: "styles", locale: "locale", showTestCards: "showTestCards", currency: "currency", placeholder: "placeholder" }, outputs: { ready: "ready", focus: "focus", blur: "blur", change: "change" }, queries: [{ propertyName: "numberComponent", first: true, predicate: NumberFieldDirective, descendants: true, static: true }, { propertyName: "expiryComponent", first: true, predicate: ExpiryFieldDirective, descendants: true, static: true }, { propertyName: "cvvComponent", first: true, predicate: CvvFieldDirective, descendants: true, static: true }], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.11", ngImport: i0, type: CardFieldDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jaGFyZ2ViZWUtanMtYW5ndWxhci13cmFwcGVyL3NyYy9saWIvZGlyZWN0aXZlcy9jYXJkLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksR0FLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQVE3QyxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDUixVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFFVixJQUFJLENBQVc7SUFDZixPQUFPLENBQVU7SUFDakIsS0FBSyxDQUFVO0lBQ2YsTUFBTSxDQUFVO0lBQ2hCLE1BQU0sQ0FBVTtJQUNoQixhQUFhLENBQVc7SUFDeEIsUUFBUSxDQUFVO0lBQ2xCLFdBQVcsQ0FJbEI7SUFFb0QsZUFBZSxDQUFDO0lBQ2hCLGVBQWUsQ0FBQztJQUNuQixZQUFZLENBQUM7SUFFaEUsdUNBQXVDO0lBQzdCLEtBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5QyxLQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUMsSUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQzdDLE1BQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV6RCxJQUFJLENB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QUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNFLGVBQWU7c0JBQXBFLFlBQVk7dUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNELFlBQVk7c0JBQTlELFlBQVk7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUd2QyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csS0FBSztzQkFBZCxNQUFNO2dCQUNHLElBQUk7c0JBQWIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE51bWJlckZpZWxkRGlyZWN0aXZlIH0gZnJvbSBcIi4vbnVtYmVyLWZpZWxkLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgRXhwaXJ5RmllbGREaXJlY3RpdmUgfSBmcm9tIFwiLi9leHBpcnktZmllbGQuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBDdnZGaWVsZERpcmVjdGl2ZSB9IGZyb20gXCIuL2N2di1maWVsZC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7IGdldFByb3BDaGFuZ2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBQYXltZW50SW50ZW50LCBBZGRpdGlvbmFsRGF0YSwgQ2FsbGJhY2tzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmRlY2xhcmUgdmFyIENoYXJnZWJlZTogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2NiQ2FyZEZpZWxkXVwiLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGlkID0gXCJcIjtcbiAgY2JJbnN0YW5jZSA9IG51bGw7XG4gIGNiQ29tcG9uZW50ID0gbnVsbDtcblxuICBASW5wdXQoKSBpY29uPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xhc3Nlcz86IG9iamVjdDtcbiAgQElucHV0KCkgZm9udHM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIHN0eWxlcz86IG9iamVjdDtcbiAgQElucHV0KCkgbG9jYWxlPzogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93VGVzdENhcmRzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY3VycmVuY3k/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzoge1xuICAgIG51bWJlcj86IHN0cmluZztcbiAgICBleHBpcnk/OiBzdHJpbmc7XG4gICAgY3Z2Pzogc3RyaW5nO1xuICB9O1xuXG4gIEBDb250ZW50Q2hpbGQoTnVtYmVyRmllbGREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIG51bWJlckNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChFeHBpcnlGaWVsZERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgZXhwaXJ5Q29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKEN2dkZpZWxkRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBjdnZDb21wb25lbnQ7XG5cbiAgLy8gQmVsb3cgZXZlbnRzIG9ubHkgZm9yIGNvbWJpbmVkLWZpZWxkXG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZDogUHJvbWlzZTxib29sZWFuPjtcbiAgaW5pdGlhbGl6YXRpb246IFByb21pc2U8YW55PjtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIGlmIChlbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlkID0gZWwubmF0aXZlRWxlbWVudC5pZDtcbiAgICB9XG4gIH1cblxuICBvblJlYWR5ID0gKGNhcmRDb21wb25lbnQ6IGFueSwgZmllbGQ6IGFueSkgPT4ge1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICAvLyBFbWl0IGFsbG93cyBvbmx5IG9uZSBhcmd1bWVudCAoU3BlYyBkZXZpYXRpb24pXG4gICAgICBkYXRhID0geyBjYXJkQ29tcG9uZW50LCBmaWVsZCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gY2FyZENvbXBvbmVudDtcbiAgICB9XG4gICAgdGhpcy5yZWFkeS5lbWl0KGRhdGEpO1xuICB9O1xuXG4gIC8vIEJlbG93IGV2ZW50cyBvbmx5IGZvciBDb21iaW5lZCBmaWVsZFxuICBvbkZvY3VzID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5mb2N1cy5lbWl0KHN0YXR1cyk7XG4gIH07XG4gIG9uQmx1ciA9IChzdGF0dXM6IGFueSkgPT4ge1xuICAgIHRoaXMuYmx1ci5lbWl0KHN0YXR1cyk7XG4gIH07XG4gIG9uQ2hhbmdlID0gKHN0YXR1czogYW55KSA9PiB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChzdGF0dXMpO1xuICB9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgIHR5cGVvZiB3aW5kb3dbXCJDaGFyZ2ViZWVcIl0gIT09IFwidW5kZWZpbmVkXCJcbiAgICApIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGljb246IHR5cGVvZiB0aGlzLmljb24gPT09IFwiYm9vbGVhblwiID8gdGhpcy5pY29uIDogdHJ1ZSxcbiAgICAgICAgZm9udHM6IHRoaXMuZm9udHMgfHwgW10sXG4gICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlcyB8fCB7fSxcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSB8fCBcImVuXCIsXG4gICAgICAgIHNob3dUZXN0Q2FyZHM6IHRoaXMuc2hvd1Rlc3RDYXJkcyA/PyBmYWxzZSxcbiAgICAgICAgY2xhc3NlczogdGhpcy5jbGFzc2VzIHx8IHt9LFxuICAgICAgICBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSB8fCBcIlVTRFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB8fCB7fSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2JJbnN0YW5jZSA9IHdpbmRvd1tcIkNoYXJnZWJlZVwiXS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICB0aGlzLmNiSW5zdGFuY2UubG9hZChcImNvbXBvbmVudHNcIikudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuY2JDb21wb25lbnQgPSB0aGlzLmNiSW5zdGFuY2UuY3JlYXRlQ29tcG9uZW50KFwiY2FyZFwiLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBBdHRhY2hpbmcgbGlzdGVuZXJzIGlmIGFueSAob25seSBhcHBsaWNhYmxlIGZvciBjb21iaW5lZCBmaWVsZClcbiAgICAgICAgdGhpcy5jYkNvbXBvbmVudC5vbihcInJlYWR5XCIsIHRoaXMub25SZWFkeSk7XG4gICAgICAgIHRoaXMuY2JDb21wb25lbnQub24oXCJmb2N1c1wiLCB0aGlzLm9uRm9jdXMpO1xuICAgICAgICB0aGlzLmNiQ29tcG9uZW50Lm9uKFwiYmx1clwiLCB0aGlzLm9uQmx1cik7XG4gICAgICAgIHRoaXMuY2JDb21wb25lbnQub24oXCJjaGFuZ2VcIiwgdGhpcy5vbkNoYW5nZSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBpbmlkaXZpZHVhbCBmaWVsZHMgKGlmIHByZXNlbnQpXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUZpZWxkKHRoaXMuY2JDb21wb25lbnQsIHRoaXMubnVtYmVyQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRmllbGQodGhpcy5jYkNvbXBvbmVudCwgdGhpcy5leHBpcnlDb21wb25lbnQpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVGaWVsZCh0aGlzLmNiQ29tcG9uZW50LCB0aGlzLmN2dkNvbXBvbmVudCk7XG5cbiAgICAgICAgdGhpcy5jYkNvbXBvbmVudC5tb3VudChgIyR7dGhpcy5pZH1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpemVGaWVsZChjYkNvbXBvbmVudCwgZmllbGRFbGVtZW50KSB7XG4gICAgaWYgKGNiQ29tcG9uZW50ICYmIGZpZWxkRWxlbWVudCkge1xuICAgICAgY29uc3QgZmllbGRJbnN0YW5jZSA9IGNiQ29tcG9uZW50XG4gICAgICAgIC5jcmVhdGVGaWVsZChmaWVsZEVsZW1lbnQudHlwZSwge1xuICAgICAgICAgIHN0eWxlOiBmaWVsZEVsZW1lbnQuc3R5bGVzIHx8IHt9LFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZEVsZW1lbnQucGxhY2Vob2xkZXIgfHwgXCJcIixcbiAgICAgICAgfSlcbiAgICAgICAgLmF0KGAjJHtmaWVsZEVsZW1lbnQuaWR9YCk7XG5cbiAgICAgIGZpZWxkRWxlbWVudC5maWVsZCA9IGZpZWxkSW5zdGFuY2U7XG5cbiAgICAgIC8vIGF0dGFjaCBsaXN0ZW5lcnNcbiAgICAgIGZpZWxkSW5zdGFuY2Uub24oXCJyZWFkeVwiLCBmaWVsZEVsZW1lbnQub25SZWFkeSk7XG4gICAgICBmaWVsZEluc3RhbmNlLm9uKFwiZm9jdXNcIiwgZmllbGRFbGVtZW50Lm9uRm9jdXMpO1xuICAgICAgZmllbGRJbnN0YW5jZS5vbihcImJsdXJcIiwgZmllbGRFbGVtZW50Lm9uQmx1cik7XG4gICAgICBmaWVsZEluc3RhbmNlLm9uKFwiY2hhbmdlXCIsIGZpZWxkRWxlbWVudC5vbkNoYW5nZSk7XG4gICAgICByZXR1cm4gZmllbGRJbnN0YW5jZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgdG9rZW5pemUoYWRkaXRpb25hbERhdGE6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmNiQ29tcG9uZW50LnRva2VuaXplKGFkZGl0aW9uYWxEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhdXRob3JpemVXaXRoM2RzKFxuICAgIHBheW1lbnRJbnRlbnQ6IFBheW1lbnRJbnRlbnQsXG4gICAgYWRkaXRpb25hbERhdGE6IEFkZGl0aW9uYWxEYXRhLFxuICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzXG4gICkge1xuICAgIHJldHVybiB0aGlzLmNiQ29tcG9uZW50LmF1dGhvcml6ZVdpdGgzZHMoXG4gICAgICBwYXltZW50SW50ZW50LFxuICAgICAgYWRkaXRpb25hbERhdGEsXG4gICAgICBjYWxsYmFja3NcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmNiQ29tcG9uZW50KSB7XG4gICAgICBjb25zdCBwcm9wcyA9IFtcbiAgICAgICAgXCJpY29uXCIsXG4gICAgICAgIFwiY2xhc3Nlc1wiLFxuICAgICAgICBcImZvbnRzXCIsXG4gICAgICAgIFwibG9jYWxlXCIsXG4gICAgICAgIFwic2hvd1Rlc3RDYXJkc1wiLFxuICAgICAgICBcInN0eWxlc1wiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICBdO1xuICAgICAgY29uc3QgeyBjdXJyZW50T3B0aW9ucywgaGFzQ2hhbmdlZCB9ID0gZ2V0UHJvcENoYW5nZXMoY2hhbmdlcywgcHJvcHMpO1xuXG4gICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmNiQ29tcG9uZW50LnVwZGF0ZShjdXJyZW50T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=