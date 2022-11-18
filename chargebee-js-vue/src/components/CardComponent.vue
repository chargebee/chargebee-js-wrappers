<script lang="ts">
import { genUUID } from "../utils";
import { h } from "vue";

export default {
  props: {
    fonts: {
      type: Array,
      default: (): any[] => [],
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

  methods: {
    tokenize(additionalData: object) {
      return this.cbComponent.tokenize(additionalData);
    },

    authorizeWith3ds(paymentIntent: object, additionalData: object, callbacks: object) {
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

    // Set cbComponent instance to child(slot)
    setComponentInstance(vnode: { props: any; children: { default: () => any[]; }; }) {
      if (vnode && vnode.props) {
        vnode.props = {
          ...vnode.props,
          cbComponent: this.cbComponent,
        };
      }

      if(vnode.children && vnode.children.default) {
        vnode.children.default().map((c) => {
          this.setComponentInstance(c);
        });
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.elementId = `card-component-${genUUID()}`;
      // @ts-ignore
      let cbInstance = Chargebee.getInstance();
      let options = this.componentOptions;
      cbInstance.load("components").then(() => {
        this.cbInstance = cbInstance;
        const cbComponent = this.cbInstance.createComponent("card", options);
        this.cbComponent = cbComponent;
        this.moduleLoaded = true;
        // Attach listeners (only applicable for combined field)
        ["ready", "focus", "blur", "change"].map((listener) => {
          this.cbComponent.on(listener, (data: any) => {
            this.$emit(listener, data);
          });
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
    componentOptions: function () {
      if (this.cbComponent) {
        this.cbComponent.update(this.componentOptions);
      }
    },
  },

  render() {
    let children;
    if (this.moduleLoaded) {
      if (this.$slots.default) {
        children = this.$slots.default().map((vnode: any) => {
          this.setComponentInstance(vnode);
          return vnode;
        });
      } else {
        children = [];
      }
    } else {
      children = [];
    }
    return h("div", { id: this.elementId, class: this.class }, children);
  },
};
</script>
