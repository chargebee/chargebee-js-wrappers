import { NgModule } from '@angular/core';
import { CardFieldDirective } from './directives/card-field.directive';
import { CvvFieldDirective } from './directives/cvv-field.directive';
import { NumberFieldDirective } from './directives/number-field.directive';
import { ExpiryFieldDirective } from './directives/expiry-field.directive';

@NgModule({
  declarations: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective],
  imports: [
  ],
  exports: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective]
})
export class ChargebeeJsAngularWrapperModule { }
