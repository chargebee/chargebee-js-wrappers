import CardField from './components/CardField.vue'
import CardNumber from './components/CardNumber.vue'
import CardExpiry from './components/CardExpiry.vue'
import CardCvv from './components/CardCvv.vue'

const components = {
  CardField,
  CardNumber,
  CardExpiry,
  CardCvv
}

export default {
  install (Vue) {
    Vue.component('card-field', CardField);
    Vue.component('card-number', CardNumber);
    Vue.component('card-expiry', CardExpiry);
    Vue.component('card-cvv', CardCvv);
  }
}


export {
  CardField,
  CardNumber,
  CardExpiry,
  CardCvv
}
