<template>
    <fragment v-if="validated">
        <slot />
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { validateCbInstance } from '../utils/'

export default {
    name: 'Provider',
    components: { Fragment, validateCbInstance },
    props: {
        cbInstance: {
            type: Object,
            default: null
        },
    },
    watch: {
        cbInstance(newValue) {
            this.cbInstance = newValue;
            if (this.cbInstance && validateCbInstance(this.cbInstance))
                this.validated = true;
            else
                this.validated = false;
        }
    },
    data() {
        return {
            validated: false
        }
    }
}
</script>