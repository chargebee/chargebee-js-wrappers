# Chargebee JS Angular Wrapper
Angular wrapper for Chargebee Components

## Examples
For detailed examples: [Click here](https://github.com/chargebee/chargebee-checkout-samples/tree/master/components/angular-app#readme)

## Live Demo
View live demo [here](https://www.recur.in/components-examples/angular/#/example1)

## Installation
Install from npm:
```bash
npm install @chargebee/chargebee-js-angular-wrapper
```

## Usage
Chargebee Components requires you to initialize chargebee js with `site` and `publishableKey`

> Wondering where to obtain your publishable API key? [Refer here](https://www.chargebee.com/docs/api_keys.html)

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
    
    this.cardComponent.tokenize().then(data => {
      console.log('chargebee token', data.token)
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
    this.cardComponent.tokenize().then(data => {
      console.log('chargebee token', data.token)
    });
  }
}

```

### 3DS Authorization
In your angular component

component.html
```html
<div class="cell example example3" id="example-3" style="padding: 1em">
  <form>
    <div cbCardField id='card-field' (ready)="onReady($event)"></div>
    <button (click)="authorize($event)">Submit</button>
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
  intent = null;
  additionalData = {
    // Additional data to improve the chances of frictionless flow
  }

  onReady = (cardComponent) => {
    this.cardComponent = cardComponent;
  }

  createPaymentIntent() {
    // make ajax call to your server to create a paymentIntent
    ...
    this.intent = paymentIntent
  }

  authorize = (event) => {
    event.preventDefault();
    
    this.cardComponent.authorizeWith3ds(this.intent, this.additionalData).then(authorizedIntent => {
      console.log('3DS Authorization success', authorizedIntent.id)
    });
  }
}

```

## Directives and APIs

#### cbCardField Directive ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-component-object))
Attributes | Description | Datatype
-----------|-------------|---------
`fonts` | An array of font faces or links | [Fonts](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`classes` | Set of CSS classnames that get substituted for various [events](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on) | [Classes](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`locale` | Language code | [Locale](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`styles` | Set of style customizations | [Styles](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`placeholder` | Set of placeholders for the card fields | [Placeholder](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)

##### Events ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on))
Props | Description | Arguments
------|-------------|---------
`(ready)` | Triggers when component is mounted and ready | [Field](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`(change)` | Triggers for every state change | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`(focus)` | Triggers when component is focused | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`(blur)` | Triggers when component is blurred | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)

#### Individual Field directives ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object))
  * cbNumberField
  * cbExpiryField
  * cbCvvField

Props | Description | Datatype
------|-------------|---------
`styles` | Styles for inidividual field | [Styles](http://localhost:8081/checkout-portal-docs/components-fields-reference.html#parameters-5)
`placeholder` | Placeholder for the field | String

##### Event Props ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on-2))
Props | Description | Arguments
------|-------------|---------
`(ready)` | Triggers when component is mounted and ready | [Field](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`(change)` | Triggers for every state change | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`(focus)` | Triggers when component is focused | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`(blur)` | Triggers when component is blurred | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)

## Reference:
[Chargebee Components - JS Docs](https://chargebee.com/checkout-portal-docs/components-fields-integrations.html#quick-start-integration)

## Support
Have any queries regarding the implementation? Reach out to [support@chargebee.com](mailto:support@chargebee.com)
