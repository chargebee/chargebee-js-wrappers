<script>
import { genUUID } from '../utils/';

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
    currency: {
      type: String,
      default: 'USD'
    },
  },

  data () {
    return {
      cbInstance: null,
      cbComponent: null,
      moduleLoaded: false,
      elementId: ''
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
        icon: this.icon,
        currency: this.currency,
      }
    },
  },

  methods: {
    tokenize (additionalData) {
      return this.cbComponent.tokenize(additionalData)
    },

    authorizeWith3ds (paymentIntent, additionalData, callbacks) {
      return this.cbComponent.authorizeWith3ds(paymentIntent, additionalData, callbacks)
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
    this.$nextTick(() => {
      this.elementId = `card-component-${genUUID()}`;
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
    })
  },

  updated() {
    if(this.cbComponent && this.moduleLoaded && this.cbComponent.status == 0) {
      this.$nextTick(() => {
        this.cbComponent.mount(`#${this.elementId}`);
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
    return h('div', { attrs: { id: this.elementId }, class: this.class }, children)
  }
}
</script>
