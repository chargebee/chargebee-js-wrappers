import CardComponent from './components/CardComponent.vue'
import CardNumber from './components/CardNumber.vue'
import CardExpiry from './components/CardExpiry.vue'
import CardCvv from './components/CardCvv.vue'

const components = {
  CardComponent,
  CardNumber,
  CardExpiry,
  CardCvv
}

export default {
  install (Vue) {
    Vue.component('card-component', CardComponent);
    Vue.component('card-number', CardNumber);
    Vue.component('card-expiry', CardExpiry);
    Vue.component('card-cvv', CardCvv);
  }
}

export {
  CardComponent,
  CardNumber,
  CardExpiry,
  CardCvv
}
