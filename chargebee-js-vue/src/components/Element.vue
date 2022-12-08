<script lang="ts">
import { genUUID } from '../utils';
export default {

  inject: ['cbComponent'],

  data () {
    return {
      field: null,
      initialized: false,
    }
  },

  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: () => ''
    },
  },

  computed: {
    fieldOptions: function() {
      return {
        style: this.styles || {},
        placeholder: this.placeholder
      }
    },

    elementId: function() {
      return `card-${this.id}-${genUUID()}`
    }
  },

  methods: {
    getField () {
      return this.field
    },

    attachListener (listener: any) {
      this.field.on(listener, (data: any) => {
        this.$emit(listener, data)
      })
    },

    initializeField (cbComponent: any) {
      if (cbComponent) {
        const options = this.fieldOptions;
        this.field = cbComponent.createField(this.id, options).at(`#${this.elementId}`)
        if (this.$parent.onMount) this.$parent.onMount()
        this.$nextTick(() => {
          this.field.mount();
        })

        // Attach listeners if any
        this.attachListener('ready')
        this.attachListener('focus')
        this.attachListener('blur')
        this.attachListener('change')
        this.initialized = true;
      }
    },

    focus() {
      this.field.focus();
    },

    blur() {
      this.field.blur();
    },

    clear() {
      this.field.clear();
    },
    
  },

  watch: {
    fieldOptions() {
      if(this.field) {
        const options = this.fieldOptions;
        this.field.update(options)
      }
    },
    cbComponent(newValue, oldValue) {
      if(!oldValue && newValue) {
        if(!this.initialized) {
          this.initializeField(newValue)
        }
      }
    }
  },

  mounted () {
    this.initializeField()
  }
}
</script>
