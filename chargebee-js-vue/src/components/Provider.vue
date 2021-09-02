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
    watch: {
        cbInstance(newValue) {
            if (validateCbInstance(newValue))
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
    },
    created() {
        if (validateCbInstance(this.cbInstance))
            this.validated = true;
    }
}
</script>