<script lang="ts">
import { PropType } from 'vue';
import { ChargebeeInstance } from '@chargebee/chargebee-js-types';
import { validateCbInstance } from '../utils/';

export default {
    name: 'Provider',
    props: {
        cbInstance: {
            type: Object as PropType<ChargebeeInstance>,
            default: null
        },
    },
    render() {
        if (validateCbInstance(this.cbInstance))
            return this.$slots.default();
        else
            return null;
    }
}
</script>