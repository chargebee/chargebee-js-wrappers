<script>

export default {

  props: {
    fonts: {
      type: Array,
      default: () => []
    },
    classes: {
      type: Object,
      default: () => ({})
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: Object,
      default: () => ({})
    },
    icon: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      cbInstance: null,
      cbComponent: null,
      moduleLoaded: false
    }
  },

  methods: {
    tokenize () {
      return this.cbInstance.tokenize(this.cbComponent)
    },
    // Set cbComponent instance to child(slot)
    setComponentInstance(slot) {
      if(slot.componentOptions) {
        slot.componentOptions.propsData = {
                ...slot.componentOptions.propsData,
                cbComponent: this.cbComponent
        }
      }
      slot.children && slot.children.map((c) => {
        this.setComponentInstance(c);
      });
    },
  },

  created () {
    let cbInstance = Chargebee.getInstance();
    let options = {
      fonts: this.fonts,
      classes: this.classes,
      style: this.styles,
      placeholder: this.placeholder,
      icon: this.icon
    }
    cbInstance.load("components").then(() => {
      this.cbInstance = cbInstance;
      const cbComponent = this.cbInstance.createComponent('card', options);
      this.cbComponent = cbComponent;
      this.moduleLoaded = true;
      // Attach listeners (only applicable for combined field)
      Object.keys(this.$listeners).map(listener => {
        this.cbComponent.on(listener, (data) => {
          this.$emit(listener, data);
        })
      });
    });
  },

  updated() {
    if(this.cbComponent && this.moduleLoaded && this.cbComponent.status == 0) {
      this.$nextTick(() => {
        this.cbComponent.at('card-field')
        this.cbComponent.mount();
      });
    }
  },

  render (h) {
    let children;
    if(this.moduleLoaded) {
      if(this.$slots.default) {
        children = this.$slots.default.map(slot => {
          this.setComponentInstance(slot);
          return slot
        })
      }
      else {
        children = [];
      }
    }
    else {
      children = [];
    }
    return h('div', { attrs: { id: 'card-field' }, class: this.class }, children)
  }
}
</script>
