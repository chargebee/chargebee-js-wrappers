import CardComponent from './components/CardComponent.vue'
import CardNumber from './components/CardNumber.vue'
import CardExpiry from './components/CardExpiry.vue'
import CardCvv from './components/CardCvv.vue'
import Provider from './components/Provider.vue'

const components = {
  CardComponent,
  CardNumber,
  CardExpiry,
  CardCvv,
  Provider
}

export default {
  install (Vue) {
    Vue.component('card-component', CardComponent);
    Vue.component('card-number', CardNumber);
    Vue.component('card-expiry', CardExpiry);
    Vue.component('card-cvv', CardCvv);
    Vue.component('provider', Provider);
  }
}

export {
  CardComponent,
  CardNumber,
  CardExpiry,
  CardCvv,
  Provider
}
