# Chargebee JS Vue Wrapper
Vue wrapper for Chargebee Components

## Examples
For detailed examples: [Click here](https://github.com/chargebee/chargebee-checkout-samples/tree/master/components/vue/cb-components-examples#readme)

## Live Demo
View live demo [here](https://www.recur.in/components-examples/vue/#/example1)

## Installation
Install from npm:
```bash
npm install @chargebee/chargebee-js-vue-wrapper
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
In your vue component
```js
<template>
  <div>
    <div class="cell example example3" id="example-3" style="padding: 1em">
      <form>
        ...
        <card-component ref="cardComponent" />
        <button type="submit" id="tokenize" v-on:click="onSubmit">Submit</button>
        ...
      </form>
    </div>
  </div>
</template>

<script>
import {CardComponent} from '@chargebee/chargebee-js-vue-wrapper';

export default {
  name: 'app',
  components: {
    'card-component': CardComponent,
  },

  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.$refs.cardComponent.tokenize().then(data => {
        console.log('chargebee token', data.token)
      })
    }
  }
}

</script>
```

### A more complex example:

>Note: If vue version is 3.2 or less, please add the following line to your Vue application bootstrap
> `app.config.unwrapInjectedRef = true`
> [Reference documentation](https://vuejs.org/guide/components/provide-inject.html#working-with-reactivity)


```js
<template>
  <div>
    <div class="example-3" id="example-3" >
      <form>
          <card-component class="fieldset" ref="cardComponent" 
            :fonts="fonts" 
            :styles="styles" 
            :locale="locale" 
            :classes="classes" 
            @ready="onReady"
            @change="onChange"
          >
            <card-number class="field empty" @focus="onFocus"  :placeholder="'4111 1111 1111 1111'" />
            <card-expiry class="field empty" @focus="onFocus"  :placeholder="'MM / YY'" />
            <card-cvv class="field empty" @focus="onFocus" :placeholder="'CVV'" />
          </card-component>
          <button type="submit" v-on:click="onSubmit">Submit</button>
          <div id="errors">{{errorMessage}}</div>
      </form>
    </div>
  </div>
</template>

<script>
import {CardComponent, CardNumber, CardExpiry, CardCvv} from '@chargebee/chargebee-js-vue-wrapper';

export default {
  name: 'app',
  components: {
    'card-component': CardComponent,
    'card-number': CardNumber,
    'card-expiry': CardExpiry,
    'card-cvv': CardCvv,
  },

  data () {
    return {
      styles: {
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
      },
      locale: 'en',
      classes: {
        focus: 'focus',
        complete: 'complete',
        invalid: 'invalid',
        empty: 'empty'
      },
      fonts: [
        {
          src: 'https://mysite.com/assets/my-font.woff',
          fontStyle: 'italic',
          fontFamily: 'Myfont',
          fontWeight: '500'
        },
        'https://fonts.googleapis.com/css?family=Lato'
      ],
      errors: {},
      errorMessage: ''
    }
  },

  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.$refs.cardComponent.tokenize().then(data => {
        console.log('chargebee token', data.token)
      })
    },
    onChange (status) {
      let errors = {
        ...this.errors,
        [status.field]: status.error
      }
      this.errors = errors
      let {message} = Object.values(errors).filter(message => !!message).pop() || {}
      this.errorMessage = message
    },
    onFocus (event) {
      console.log(event.field, 'focused')
    },
    onReady (el) {
      el.focus()
    }
  }
}
</script>

```


### 3DS Authorization
In your vue component
```js
<template>
  <div>
    <div class="cell example example3" id="example-3" style="padding: 1em">
      <form>
        ...
        <card-component ref="cardComponent" />
        <button type="submit" id="authorize" v-on:click="onSubmit">Submit</button>
        ...
      </form>
    </div>
  </div>
</template>

<script>
import {CardComponent} from '@chargebee/chargebee-js-vue-wrapper';

export default {
  name: 'app',
  components: {
    'card-component': CardComponent,
  },

  mounted: function() {
    this.createPaymentIntent().then(intent => {
      this.paymentIntent = intent;
    });
  },

  data: function() {
    return {
      paymentIntent: null,
      additionalData: {
        // Additional params to improve chances of frictionless flow
      }
    }
  },

  methods: {
    createPaymentIntent() {
      // Make ajax call to server to create a paymentIntent
    },
    onSubmit (e) {
      e.preventDefault()
      this.$refs.cardComponent.authorizeWith3ds(this.paymentIntent, this.additionalData)
        .then(authorizedIntent => {
          console.log('Success', authorizedIntent.id)
        }).catch(error => {
          consoel.error('Error', error)
        })
    }
  }
}

</script>
```

## Components and APIs

#### Card Component ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-component-object))
Props | Description | Datatype
------|-------------|---------
`class` | CSS Class name for the container element | String
`fonts` | An array of font faces or links | [Fonts](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`classes` | Set of CSS classnames that get substituted for various [events](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on) | [Classes](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`locale` | Language code | [Locale](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`styles` | Set of style customizations | [Styles](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`placeholder` | Set of placeholders for the card fields | [Placeholder](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`ref` | Vue reference(ref) for card component | [Vue ref](https://vuejs.org/v2/api/#vm-refs)

##### Events ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on))
Props | Description | Arguments
------|-------------|---------
`@ready` | Triggers when component is mounted and ready | [Field](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`@change` | Triggers for every state change | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`@focus` | Triggers when component is focused | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`@blur` | Triggers when component is blurred | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)

#### Field Components ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object))
  * CardNumber
  * CardExpiry
  * CardCVV

Props | Description | Datatype
------|-------------|---------
`class` | CSS Classname for container element | String
`styles` | Styles for inidividual field | [Styles](http://localhost:8081/checkout-portal-docs/components-fields-reference.html#parameters-5)
`placeholder` | Placeholder for the field | String

##### Event Props ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on-2))
Props | Description | Arguments
------|-------------|---------
`@ready` | Triggers when component is mounted and ready | [Field](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`@change` | Triggers for every state change | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`@focus` | Triggers when component is focused | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`@blur` | Triggers when component is blurred | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)

## Reference:
[Chargebee Components - JS Docs](https://chargebee.com/checkout-portal-docs/components-fields-integrations.html#quick-start-integration)

## Support
Have any queries regarding the implementation? Reach out to [support@chargebee.com](mailto:support@chargebee.com)
