<script>
import { genUUID } from '../utils/';

export default {
  props: {
    fonts: {
      type: Array,
      default: () => [],
    },
    classes: {
      type: Object,
      default: () => ({}),
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
    placeholder: {
      type: Object,
      default: () => ({}),
    },
    icon: {
      type: Boolean,
      default: true,
    },
    locale: {
      type: String,
      default: 'en',
    },
    currency: {
      type: String,
      default: 'USD',
    },
  },

  data() {
    return {
      cbInstance: null,
      cbComponent: null,
      moduleLoaded: false,
      elementId: `card-component-${genUUID()}`,
    };
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
      };
    },
  },

  provide() {
    const cardState = {};
    Object.defineProperty(cardState, 'cbComponent', {
      enumerable: true,
      get: () => this.cbComponent,
    });
    return {
      cardState,
    };
  },

  methods: {
    tokenize(additionalData) {
      return this.cbComponent.tokenize(additionalData);
    },

    authorizeWith3ds(paymentIntent, additionalData, callbacks) {
      return this.cbComponent.authorizeWith3ds(paymentIntent, additionalData, callbacks);
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
  },

  mounted() {
    let cbInstance = Chargebee.getInstance();
    let options = this.componentOptions;
    cbInstance.load('components').then(() => {
      this.cbInstance = cbInstance;
      const cbComponent = this.cbInstance.createComponent('card', options);
      this.cbComponent = cbComponent;
      this.moduleLoaded = true;
      // Attach listeners (only applicable for combined field)
      Object.keys(this.$listeners).map((listener) => {
        this.cbComponent.on(listener, (data) => {
          this.$emit(listener, data);
        });
      });
    });
  },

  updated() {
    if (this.cbComponent && this.moduleLoaded && this.cbComponent.status == 0) {
      this.$nextTick(() => {
        this.cbComponent.mount(`#${this.elementId}`);
      });
    }
  },

  watch: {
    componentOptions: function() {
      if (this.cbComponent) {
        this.cbComponent.update(this.componentOptions);
      }
    },
  },

  render(h) {
    let children = (this.moduleLoaded && this.$slots.default) || [];
    return h('div', { attrs: { id: this.elementId }, class: this.class }, children);
  },
};
</script>
