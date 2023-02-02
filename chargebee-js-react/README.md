# Chargebee JS React Wrapper
React wrapper for Chargebee Components

## Examples
For detailed examples: [Click here](https://github.com/chargebee/chargebee-checkout-samples/tree/master/components/react-app#readme)

## Live Demo
View live demo [here](https://www.recur.in/components-examples/react/#/example1)

## Installation
Install from npm:
```bash
npm install @chargebee/chargebee-js-react-wrapper
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
                site: 'your-site',
                publishableKey: 'your-publishable-key'
            })
        </script>
    </head>
    <body>
        <div id='root'></div>
    </body>
</html>
```

### Basic usage
In your react component
```jsx
import { CardComponent } from '@chargebee/chargebee-js-react-wrapper';

class App extends React.Component {
    cardRef = React.createRef()
    ...
    onSubmit = (e) => {
        if(e) e.preventDefault()
        this.cardRef.current.tokenize()
        .then((data) => {
          console.log('chargebee token', data.token)
        });
    }
    ...
    render() {
        // Using combined mode
        return(
            <div className="App">
                <form>
                    ...
                    <CardComponent ref={this.cardRef} onChange={this.onChange}/>
                    <button type="submit" onClick={this.onSubmit}>Submit</button>
                    ...
                </form>
            </div>
        )
    }
}
```

### A more complex example:
```jsx
import {CardComponent, CardNumber, CardExpiry, CardCVV} from "react-cb";
import './App.css'

class App extends Component {
  cardRef = React.createRef()

  state = {
    errors: {},
    errorMessage: '',
    // CSS class names for field's status
    classes: {
        'focus': 'focus-css-class',
        'complete': 'complete-css-class',
        'invalid': 'invalid-css-class',
        'empty': 'empty-css-class',
    },
    // Google Fonts and other whitelisted fonts
    fonts: [
        'https://fonts.googleapis.com/css?family=Open+Sans'
    ],
    // Style customizations
    styles: {
        base: {
            color: '#fff',
            fontWeight: 600,
            fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',

            ':focus': {
                color: '#424770',
            },

            '::placeholder': {
                color: '#9BACC8',
            },

            ':focus::placeholder': {
                color: '#CFD7DF',
            },
        },
        invalid: {
            color: '#fff',
            ':focus': {
                color: '#FA755A',
            },
            '::placeholder': {
                color: '#FFCCA5',
            },
        },
    }
  }

  onSubmit = (e) => {
    if(e) e.preventDefault()
    if(this.cardRef) {
      // Call tokenize method on card element
      this.cardRef.current.tokenize().then((data) => {
          console.log('chargebee token', data.token)
      });
    }
  }

  onChange = (status) => {
    let errors = {
      ...this.state.errors,
      [status.field]: status.error
    };
    let errMessages = Object.values(errors).filter(message => !!message);
    this.setState({
      errors,
      errorMessage: errMessages.pop() || '',
    })
  }

  onReady = (el) => {
    el.focus();
  }

  render() {
    const { fonts, styles, classes, locale } = this.state;
    // Using individual fields mode
    return (
      <div className="App">
          <div className="cell example example3" id="example-3">
            <form>
              <div className="fieldset">
                <CardComponent className="field" 
                    fonts={fonts} 
                    classes={classes} 
                    locale={locale} 
                    styles={styles} 
                    ref={this.CardRef} 
                    onReady={this.onReady}
                >
                    <CardNumber placeholder='4111 1111 1111 1111' className="field empty" onChange={this.onChange} onReady={this.onReady} />
                    <CardExpiry placeholder='MM / YY' className="field empty" onChange={this.onChange} />
                    <CardCVV placeholder='CVV' className="field empty" onChange={this.onChange} />
                </CardComponent>
              </div>
              <button type="submit" onClick={this.onSubmit}>Pay now</button>
            </form>
            <div id="errors">{this.state.errorMessage}</div>
          </div>
      </div>
    );
  }
}

```

## Server Side Rendering using NextJS
#### Pre-requisites:
The chargebee instance should be initialized with `site` and `API Key` and the initiated cb instance should be passed as props to the `Provider` component. A validation is done to check 3 things:
 * Passed `site` as non-empty string, during initialization call
 * Passed `API Key` as non-empty string, during initialization call
 * cbInstance initialized status

Also, a project using `NextJS` should be setup

#### Usage:
1. Load `chargebee.js script` before any other code/script execution(generally `index.html`). This is to enable `Chargebee` be a part of client side browser `window`
```html
<script src="https://js.chargebee.com/v2/chargebee.js"> </script>
```

2. Initialize chargebee inside componentDidMount(), do not use it in constructor() or render() when using SSR
```jsx
componentDidMount() {
..
    // initialize with site, publishableKey
    window.Chargebee.init({
        site: "...",
        publishableKey: "..."
    });
    
    // get cb Instance
    cbInstance = window.Chargebee.getInstance();
..
}
```

3. Import the Provider, CardComponent, etc. components from the module
```jsx
import {CardComponent, CardNumber, CardExpiry, CardCVV, Provider} from "@chargebee/chargebee-js-react-wrapper";
```

4. Within your custom component, wrap the `CardComponent` inside a `Provider` component, pass the cbInstance as props
```jsx
<Provider cbInstance={this.props.cbInstance}>
   <CardComponent ... >
    ...
    </CardComponent>
</Provider>
```

#### Example:
Detailed example :
```jsx
import {CardComponent, CardNumber, CardExpiry, CardCVV, Provider} from "@chargebee/chargebee-js-react-wrapper";

...
componentDidMount() {
  window.Chargebee.init({
    site: "honeycomics-v3-test",
    publishableKey: "test_qoH22RugUvm5IcxoqUD5Svdcu9mX5figf"
  })

  this.setState({
    cbInstance: window.Chargebee.getInstance()
  })
}

render() {
...
<script src="https://js.chargebee.com/v2/chargebee.js" ></script>
...
<Provider cbInstance={this.state.cbInstance}>
  <CardComponent ref={this.cardRef} className="fieldset field"
    styles={style} 
    classes={classes} 
    locale={locale}
    placeholder={placeholder}
    fonts={fonts}
  >
    <div className="ex1-field">
      {/* Card number component */}
      <CardNumber className="ex1-input"/>
      <label className="ex1-label">Card Number</label><i className="ex1-bar"></i>
    </div>

    <div className="ex1-fields">
      <div className="ex1-field">
        {/* Card expiry component */}
        <CardExpiry className="ex1-input"/>
        <label className="ex1-label">Expiry</label><i className="ex1-bar"></i>
      </div>

      <div className="ex1-field">
        {/* Card cvv component */}
        <CardCVV className="ex1-input"/>
        <label className="ex1-label">CVC</label><i className="ex1-bar"></i>
      </div>

    </div>
  </CardComponent>
</Provider>
... 
}
```

#### Run the application
 * npm install
 * (NextJS project structure with chargebee-js-react-wrapper installed) -> npm run build / start / dev
```jsx
"scripts": {
   "dev": "next dev",
   "build": "next build",
   "start": "next start"
 }
```
   

### 3DS Authorization
In your react component
```jsx
import { CardComponent } from '@chargebee/chargebee-js-react-wrapper';

class App extends React.Component {
    cardRef = React.createRef()
    ...
    createPaymentIntent() {
      // make ajax call to server to create payment intent
    }
    ...
    componentDidMount() {
      this.createPaymentIntent().then(intent => {
        this.state.intent = intent;
      })
    }
    ...
    onSubmit = (e) => {
        if(e) e.preventDefault()
        
        const intent = this.state.intent;
        const additionalData = this.state.additionalData;
        
        this.cardRef.current.authorizeWith3ds(intent, additionalData)
        .then(authorizedPaymentIntent => {
          console.log('Authorized payment intent', authorizedPaymentIntent.id)
        }).catch(error => {
          console.error('Error occured', error)
        });
    }
    ...
    render() {
        // Using combined mode
        return(
            <div className="App">
                <form>
                    ...
                    <CardComponent ref={this.cardRef} onChange={this.onChange}/>
                    <button type="submit" onClick={this.onSubmit}>Submit</button>
                    ...
                </form>
            </div>
        )
    }
}
```

## Components and APIs

#### Card Component ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-component-object))
Props | Description | Datatype
------|-------------|---------
`className` | CSS Class name for the container div | String
`fonts` | An array of font faces or links | [Fonts](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`classes` | Set of CSS classnames that get substituted for various [events](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on) | [Classes](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`locale` | Language code | [Locale](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`styles` | Set of style customizations | [Styles](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`placeholder` | Set of placeholders for the card fields | [Placeholder](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-3)
`ref` | React Ref element for tokenizing data | [ReactRef](https://reactjs.org/docs/refs-and-the-dom.html#creating-refs)

##### Event Props ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on))
Props | Description | Arguments
------|-------------|---------
`onReady` | Triggers when component is mounted and ready | [Field](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`onChange` | Triggers for every state change | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`onFocus` | Triggers when component is focused | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`onBlur` | Triggers when component is blurred | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`onKeyPress` | Triggers when a key is pressed inside component <br/>Supports `ESC` key | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)

#### Field Components ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object))
  * CardNumber
  * CardExpiry
  * CardCVV

Props | Description | Datatype
------|-------------|---------
`className` | CSS Classname for container `div` | String
`styles` | Styles for inidividual field | [Styles](http://localhost:8081/checkout-portal-docs/components-fields-reference.html#parameters-5)
`placeholder` | Placeholder for the field | String

##### Event Props ([docs](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#on-2))
Props | Description | Arguments
------|-------------|---------
`onReady` | Triggers when component is mounted and ready | [Field](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#card-field-object)
`onChange` | Triggers for every state change | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`onFocus` | Triggers when component is focused | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)
`onBlur` | Triggers when component is blurred | [Field State](https://chargebee.com/checkout-portal-docs/components-fields-reference.html#parameters-6)

## Reference:
[Chargebee Components - JS Docs](https://chargebee.com/checkout-portal-docs/components-fields-integrations.html#quick-start-integration)

## Support
Have any queries regarding the implementation? Reach out to [support@chargebee.com](mailto:support@chargebee.com)
