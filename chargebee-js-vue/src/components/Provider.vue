<script>
import { validateCbInstance } from '../utils/'

export default {
    name: 'Provider',
    components: { validateCbInstance },
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
    },
    render() {
        if (this.validated)
            return this.$slots.default;
        else
            return null;
    }
}
</script>