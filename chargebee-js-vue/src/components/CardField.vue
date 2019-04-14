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
    setCbComponent(component) {
      if(component.componentOptions) {
        component.componentOptions.propsData = {
                ...component.componentOptions.propsData,
                cbComponent: this.cbComponent
        }
      }
      component.children && component.children.map((c) => {
        this.setCbComponent(c);
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
      let cbComponent = this.cbInstance.createComponent('card', options);
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
          this.setCbComponent(slot);
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
