import CardComponent from './components/CardComponent.vue'
import CardNumber from './components/CardNumber.vue'
import CardExpiry from './components/CardExpiry.vue'
import CardCvv from './components/CardCvv.vue'
import Provider from './components/Provider.vue'
import {App} from "vue";

const components = {
  CardComponent,
  CardNumber,
  CardExpiry,
  CardCvv,
  Provider
}

export default {
  install (app: App) {
    app.component('card-component', CardComponent);
    app.component('card-number', CardNumber);
    app.component('card-expiry', CardExpiry);
    app.component('card-cvv', CardCvv);
    app.component('provider', Provider);
  }
}

export {
  CardComponent,
  CardNumber,
  CardExpiry,
  CardCvv,
  Provider
}
