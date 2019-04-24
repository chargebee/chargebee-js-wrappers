import {Input, Output, EventEmitter, Directive, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { getPropChanges } from '../../utils';

@Directive({
  selector: '[cbNumberField]'
})
export class NumberFieldDirective implements OnChanges {
  @Input() styles?: object;
  @Input() placeholder?: string;

  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  id = '';
  field = null;
  type = 'number';

  constructor(el: ElementRef) {
    if (el.nativeElement) {
      this.id = el.nativeElement.id;
    }
  }

  onFocus = (status: any) => {
    this.focus.emit(status);
  }

  onBlur = (status: any) => {
    this.blur.emit(status);
  }

  onReady = (el: any) => {
    this.ready.emit(el);
  }

  onChange = (status: any) => {
    this.change.emit(status);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.field) {
      const props = ['placeholder', 'styles'];
      const { hasChanged, currentOptions } = getPropChanges(changes, props);

      if (hasChanged) {
        this.field.update(currentOptions);
      }
    }
  }

}
