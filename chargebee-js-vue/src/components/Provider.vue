<script>
import { validateCbInstance } from '../utils/'

export default {
    name: 'Provider',
    props: {
        cbInstance: {
            type: Object,
            default: null
        },
    },
    created() {
        // Set Vue wrapper source for KVL tracking
        if (typeof window !== 'undefined') {
            window.CbJsSource = 'vue';
        }
    },
    render() {
        if (validateCbInstance(this.cbInstance))
            return this.$slots.default();
        else
            return null;
    }
}
</script>