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
    render() {
        if (validateCbInstance(this.cbInstance))
            return this.$slots.default();
        else
            return null;
    }
}
</script>