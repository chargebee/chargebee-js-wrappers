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
  name: 'CardNumber',

  mixins: [Element],

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
