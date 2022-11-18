<script lang="ts">
import { genUUID } from '../utils';
export default {

  data () {
    return {
      field: null
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

        // Attach listeners if any
        this.attachListener('ready')
        this.attachListener('focus')
        this.attachListener('blur')
        this.attachListener('change')
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
    cbComponent: function (cbComponent, _) {
      if (!this.field) {
        this.initializeField(cbComponent)
      }
    },

    fieldOptions: function () {
      if(this.field) {
        const options = this.fieldOptions;
        this.field.update(options)
      }
    },
  },

  mounted () {
    this.initializeField(this.cbComponent)
  }
}
</script>
