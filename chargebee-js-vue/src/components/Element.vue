<script>
export default {

  data () {
    return {
      field: null
    }
  },

  methods: {
    getField () {
      return this.field
    },
    attachListener (listener) {
      this.field.on(listener, (data) => {
        this.$emit(listener, data)
      })
    },
    initializeField (cbComponent) {
      if (cbComponent) {
        this.field = cbComponent.createField(this.id, {
          style: this.styles || {},
          placeholder: this.placeholder
        }).at(`card-${this.id}`)
        if (this.$parent.onMount) this.$parent.onMount()

        // Attach listeners if any
        this.attachListener('ready')
        this.attachListener('focus')
        this.attachListener('blur')
        this.attachListener('change')
      }
    }
  },

  watch: {
    cbComponent: function (cbComponent, _) {
      if (!this.field) {
        this.initializeField(cbComponent)
      }
    }
  },

  mounted () {
    this.initializeField(this.cbComponent)
  }
}
</script>
