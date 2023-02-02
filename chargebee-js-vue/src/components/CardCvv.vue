<template>
  <div v-bind:id="elementId" v-bind:class="classname">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Styles } from '@chargebee/chargebee-js-types';
import Element from './Element.vue';

export default {
  name: 'CardCvv',

  props: {
    styles: {
      type: Object as PropType<Styles>,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {
      id: 'cvv',
      loaded: false,
      classname: this.class,
    }
  },

  mixins: [Element],
}
</script>