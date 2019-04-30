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
    },
    locale: {
      type: String,
      default: 'en'
    },
  },

  data () {
    return {
      cbInstance: null,
      cbComponent: null,
      moduleLoaded: false
    }
  },

  computed: {
    componentOptions: function() {
      return {
        fonts: this.fonts,
        classes: this.classes,
        locale: this.locale,
        style: this.styles,
        placeholder: this.placeholder,
        icon: this.icon
      }
    }
  },

  methods: {
    tokenize () {
      return this.cbInstance.tokenize(this.cbComponent)
    },

    focus() {
      this.cbComponent.focus();
    },

    blur() {
      this.cbComponent.blur();
    },

    clear() {
      this.cbComponent.clear();
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

  mounted () {
    let cbInstance = Chargebee.getInstance();
    let options = this.componentOptions;
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

  watch: {
    componentOptions: function() {
      if(this.cbComponent) {
        this.cbComponent.update(this.componentOptions);
      }
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
