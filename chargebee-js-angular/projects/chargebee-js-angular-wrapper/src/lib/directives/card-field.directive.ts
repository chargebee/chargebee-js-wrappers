import { Input, Directive, Output, EventEmitter, ContentChild, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NumberFieldDirective } from './number-field.directive';
import { ExpiryFieldDirective } from './expiry-field.directive';
import { CvvFieldDirective } from './cvv-field.directive';
import { getPropChanges } from '../../utils';

declare var Chargebee: any;

@Directive({
  selector: '[cbCardField]'
})
export class CardFieldDirective implements OnInit, OnChanges {
  id = '';
  cbInstance = null;
  cbComponent = null;

  @Input() icon?: boolean;
  @Input() classes?: object;
  @Input() fonts?: object;
  @Input() styles?: object;
  @Input() locale?: string;
  @Input() placeholder?: {
    number?: string;
    expiry?: string;
    cvv?: string;
  };

  @ContentChild(NumberFieldDirective) numberComponent;
  @ContentChild(ExpiryFieldDirective) expiryComponent;
  @ContentChild(CvvFieldDirective) cvvComponent;

  // Below events only for combined-field
  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  load: Promise<boolean>;
  initialization: Promise<any>;

  constructor(el: ElementRef) {
    if (el.nativeElement) {
      this.id = el.nativeElement.id;
    }
  }

  onReady = (cardComponent: any, field: any) => {
    let data: any;
    if (field) {
      // Emit allows only one argument (Spec deviation)
      data = {cardComponent, field};
    } else {
      data = cardComponent;
    }
    this.ready.emit(data);
  }

  // Below events only for Combined field
  onFocus = (status: any) => {
    this.focus.emit(status);
  }
  onBlur = (status: any) => {
    this.blur.emit(status);
  }
  onChange = (status: any) => {
    this.change.emit(status);
  }

  ngOnInit() {
    const options = {
      icon: typeof this.icon === 'boolean' ? this.icon : true,
      fonts: this.fonts || [],
      style: this.styles || {},
      locale: this.locale || 'en',
      classes: this.classes || {},
      placeholder: this.placeholder || {},
    };

    this.cbInstance = Chargebee.getInstance();

    this.cbInstance.load('components')
      .then(() => {
        this.cbComponent = this.cbInstance.createComponent('card', options);

        // Attaching listeners if any (only applicable for combined field)
        this.cbComponent.on('ready', this.onReady);
        this.cbComponent.on('focus', this.onFocus);
        this.cbComponent.on('blur', this.onBlur);
        this.cbComponent.on('change', this.onChange);

        // Initialize inidividual fields (if present)
        this.initializeField(this.cbComponent, this.numberComponent);
        this.initializeField(this.cbComponent, this.expiryComponent);
        this.initializeField(this.cbComponent, this.cvvComponent);

        this.cbComponent.mount(`#${this.id}`);
      });
  }

  initializeField(cbComponent, fieldElement) {
    if (cbComponent && fieldElement) {
      const fieldInstance = cbComponent.createField(fieldElement.type, {
        style: fieldElement.styles || {},
        placeholder: fieldElement.placeholder || '',
      }).at(`#${fieldElement.id}`);

      fieldElement.field = fieldInstance;

      // attach listeners
      fieldInstance.on('ready', fieldElement.onReady);
      fieldInstance.on('focus', fieldElement.onFocus);
      fieldInstance.on('blur', fieldElement.onBlur);
      fieldInstance.on('change', fieldElement.onChange);
      return fieldInstance;
    }
    return null;
  }

  public tokenize() {
    return this.cbInstance.tokenize(this.cbComponent);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.cbComponent) {
      const props = ['icon', 'classes', 'fonts', 'locale', 'styles', 'placeholder'];
      const { currentOptions, hasChanged } = getPropChanges(changes, props);

      if (hasChanged) {
        this.cbComponent.update(currentOptions);
      }
    }
  }

}
