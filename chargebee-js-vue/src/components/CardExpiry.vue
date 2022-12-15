<template>
  <div v-bind:id="elementId" v-bind:class="classname">
    <slot></slot>
  </div>
</template>

<script>

import Element from './Element.vue'

export default {
  name: 'CardExpiry',

  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {
      id: 'expiry',
      loaded: false,
      classname: this.class,
    }
  },

  mixins: [Element],
}
</script>

<style>

</style>
