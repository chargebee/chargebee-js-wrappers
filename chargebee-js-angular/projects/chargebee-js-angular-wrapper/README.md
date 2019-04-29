# Chargebee JS Angular Wrapper
Angular wrapper for Chargebee Components

## Examples
To Quickly get started, check out the [Codepen demo](https://codepen.io) here

For more examples: [Click here](https://github.com/chargebee/chargebee-js/tree/component_examples/angular-app/)

## Installation
Install from npm:
```bash
npm install @chargebee/chargebee-js-angular-wrapper
```

## Usage
Chargebee Components requires you to initialize chargebee js with `site` and `publishableKey`

> Wondering where to obtain your publishable API key? [Refer here](https://jsdocs.chargebee.com/)

In your `index.html`:
```html
<html>
    <head>
      ...
      <script src="https://js.chargebee.com/v2/chargebee.js"></script>
      <script>
        Chargebee.init({
          site: 'your-site'
          publishableKey: 'your-publishable-key'
        })
      </script>
    </head>
    <body>
      <div id="app"></div>
    </body>
</html>
```

### Basic usage
In your angular component

component.html
```html
<div class="cell example example3" id="example-3" style="padding: 1em">
  <form>
    <div cbCardField id='card-field' (ready)="onReady($event)"></div>
    <button (click)="onTokenize($event)">Submit</button>
  </form>
</div>
```
component.ts
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cardComponent = null;

  onReady = (cardComponent) => {
    this.cardComponent = cardComponent;
  }

  onTokenize = (event) => {
    event.preventDefault();
    
    this.cardComponent.tokenize().then(token => {
      console.log('chargebee token', token.id)
    });
  }
}

```


### A more complex example:
component.html
```html
<div class="cell example example3" id="example-3" style="padding: 1em">
  <form>
    <div cbCardField id='card-field' 
      [fonts]="fonts"
      [styles]="styles"
      locale='en'
      [classes]="classes"
      (ready)="onReady($event)"
    >
      <div id='card-number' cbNumberField class="field empty" placeholder="4111 1111 1111 1111" 
        (ready)="setFocus($event)"
        (change)="onChange($event)"
      ></div>
      <div id='card-expiry' cbExpiryField class="field empty" placeholder="MM / YY"
        (change)="onChange($event)"
      ></div>
      <div id='card-cvv' cbCvvField class="field empty" placeholder="CVV"
        (change)="onChange($event)"
      ></div>
    </div>
    <div id="errors">{{errorMessage}}</div>
    <button id='submit-button' (click)="onSubmit($event)">Pay 25$</button>
  </form>
</div>
```
component.ts
```js
import { Component, ChangeDetectorRef, HostListener } from '@angular/core';
declare var Chargebee;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  errorMessage = '';
  changeDetectorRef: ChangeDetectorRef;
  cardComponent = null;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }

  errors = {};
  classes = {
    focus: 'focus',
    complete: 'complete-custom-class',
    invalid: 'invalid',
    empty: 'empty',
  };
  fonts = [
    'https://fonts.googleapis.com/css?family=Open+Sans'
  ];
  styles = {
    base: {
      color: '#fff',
      fontWeight: 600,
      fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',

      ':focus': {
        color: '#424770'
      },

      '::placeholder': {
        color: '#9BACC8'
      },

      ':focus::placeholder': {
        color: '#CFD7DF'
      }
    },
    invalid: {
      color: '#fff',
      ':focus': {
        color: '#FA755A'
      },
      '::placeholder': {
        color: '#FFCCA5'
      }
    }
  };

  onReady = (cardComponent) => {
    this.cardComponent = cardComponent;
  }

  setFocus(field) {
    field.focus();
  }

  onChange = (status) => {
    let errors = {
      ...this.errors,
      [status.field]: status.error
    }
    this.errors = errors
    let {message} = Object.values(errors).filter(message => !!message).pop() || {}
    this.errorMessage = message
    this.changeDetectorRef.detectChanges();
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.cardComponent.tokenize().then(token => {
      console.log('chargebee token', token.id)
    });
  }
}

```

## Directives and APIs

#### cbCardField Directive ([docs](https://jsdocs.chargebee.com/checkout-portal-docs/components-fields-reference.html#card-component-object))
Attributes | Description | Datatype
-----------|-------------|---------
`fonts` | An array of font faces or links | [Fonts](https://jsdocs.chargebee.com)
`classes` | Set of CSS classnames that get substituted for various [events](https://jsdocs.chargebee.com) | [Classes](https://jsdocs.chargebee.com)
`locale` | Language code | [Locale](https://jsdocs.chargebee.com)
`styles` | Set of style customizations | [Styles](https://jsdocs.chargebee.com)
`placeholder` | Set of placeholders for the card fields | [Placeholder](https://jsdocs.chargebee.com)

##### Events ([docs](https://jsdocs.chargebee.com/checkout-portal-docs/components-fields-reference.html#on))
Props | Description | Arguments
------|-------------|---------
`(ready)` | Triggers when component is mounted and ready | [Field](https://jsdocs.chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`(change)` | Triggers for every state change | [Field State](https://jsdocs.chargebee.com)
`(focus)` | Triggers when component is focused | [Field State](https://jsdocs.chargebee.com)
`(blur)` | Triggers when component is blurred | [Field State](https://jsdocs.chargebee.com)

#### Individual Field directives ([docs](https://jsdocs.chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object))
  * cbNumberField
  * cbExpiryField
  * cbCvvField

Props | Description | Datatype
------|-------------|---------
`styles` | Styles for inidividual field | [Styles]()
`placeholder` | Placeholder for the field | String

##### Event Props ([docs](https://jsdocs.chargebee.com/checkout-portal-docs/components-fields-reference.html#on-2))
Props | Description | Arguments
------|-------------|---------
`(ready)` | Triggers when component is mounted and ready | [Field](https://jsdocs.chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`(change)` | Triggers for every state change | [Field State](https://jsdocs.chargebee.com)
`(focus)` | Triggers when component is focused | [Field State](https://jsdocs.chargebee.com)
`(blur)` | Triggers when component is blurred | [Field State](https://jsdocs.chargebee.com)

## Reference:
[Chargebee Components - JS Docs](https://jsdocs.chargebee.com/checkout-portal-docs/components-fields-integrations.html#quick-start-integration)

## Support
Have any queries regarding the implementation? Reach out to [support@chargebee.com](mailto:support@chargebee.com)
