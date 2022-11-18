<template>
  <div v-bind:id="elementId" v-bind:class="classname">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import Element from './Element.vue'

export default {
  name: 'CardExpiry',

  props: {
    cbComponent: {
      type: Object,
      default: (): any => null
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
