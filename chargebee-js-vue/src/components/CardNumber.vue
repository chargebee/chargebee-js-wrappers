<template>
  <div v-bind:id="elementId" v-bind:class="classname">
    <slot></slot>
  </div>
</template>

<script>

import Element from './Element.vue'

export default {
  name: 'CardNumber',

  mixins: [Element],

  props: {
    cbComponent: {
      type: Object,
      default: () => null
    },
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
      id: 'number',
      loaded: false,
      classname: this.class,
    }
  },

}
</script>

<style>

</style>
