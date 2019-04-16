import { Input, Output, EventEmitter, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cbExpiryField]'
})
export class ExpiryFieldDirective {
  @Input() cbComponent;
  @Input() styles?: object;
  @Input() placeholder?: string;

  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();
  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  id = '';
  field = null;
  type = 'expiry';

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

}

