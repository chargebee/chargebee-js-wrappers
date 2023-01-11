<script>
import { genUUID } from "../utils/";
import { h, computed } from "vue";

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
      default: "en",
    },
    currency: {
      type: String,
      default: "USD",
    },
  },

  data() {
    return {
      cbInstance: null,
      cbComponent: null,
      moduleLoaded: false,
      elementId: "",
    };
  },

  computed: {
    componentOptions: function () {
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
    return {
      cbComponent: computed(() => this.cbComponent),
    };
  },

  methods: {
    tokenize(additionalData) {
      return this.cbComponent.tokenize(additionalData);
    },

    authorizeWith3ds(paymentIntent, additionalData, callbacks) {
      return this.cbComponent.authorizeWith3ds(
        paymentIntent,
        additionalData,
        callbacks
      );
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

    setCbComponent(cbComponent) {
      this.cbComponent = cbComponent;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.elementId = `card-component-${genUUID()}`;
      let cbInstance = Chargebee.getInstance();
      let options = this.componentOptions;
      cbInstance.load("components").then(() => {
        this.cbInstance = cbInstance;
        const cbComponent = this.cbInstance.createComponent("card", options);
        this.setCbComponent(cbComponent);
        this.moduleLoaded = true;
        // Attach listeners (only applicable for combined field)
        ["ready", "focus", "blur", "change"].map((listener) => {
          this.cbComponent.on(listener, (data) => {
            this.$emit(listener, data);
          });
        });

        this.$nextTick(() => {
          this.cbComponent.mount(`#${this.elementId}`);
        })
      });
    });
  },

  watch: {
    componentOptions() {
      if (this.cbComponent) {
        this.cbComponent.update(this.componentOptions);
      }
    }
  },

  render() {
    let children = this.$slots.default ? this.$slots.default() : [];
    return h("div", { id: this.elementId, class: this.class }, children);
  },
};
</script>
