import { NgModule } from '@angular/core';
import { CardFieldDirective } from './directives/card-field.directive';
import { CvvFieldDirective } from './directives/cvv-field.directive';
import { NumberFieldDirective } from './directives/number-field.directive';
import { ExpiryFieldDirective } from './directives/expiry-field.directive';
import { Provider } from './directives/provider.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective, Provider],
  imports: [
    CommonModule
  ],
  exports: [CardFieldDirective, CvvFieldDirective, NumberFieldDirective, ExpiryFieldDirective, Provider]
})
export class ChargebeeJsAngularWrapperModule { }
