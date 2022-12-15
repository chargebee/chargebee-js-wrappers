import { computed, h, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
function genUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function validateCbInstance(cbInstance) {
  if (cbInstance) {
    const site = cbInstance.site;
    const key = cbInstance.publishableKey;
    if (!(site && typeof site == "string" && site.length > 0))
      return false;
    if (!(key && typeof key == "string" && key.length > 0))
      return false;
    return true;
  } else {
    return false;
  }
}
const _sfc_main$5 = {
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
      default: "en"
    },
    currency: {
      type: String,
      default: "USD"
    }
  },
  data() {
    return {
      cbInstance: null,
      cbComponent: null,
      moduleLoaded: false,
      elementId: ""
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
        currency: this.currency
      };
    }
  },
  provide() {
    return {
      cbComponent: computed(() => this.cbComponent)
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
    setCbComponent(cbComponent) {
      this.cbComponent = cbComponent;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.elementId = `card-component-${genUUID()}`;
      let cbInstance = Chargebee.getInstance();
      let options = this.componentOptions;
      cbInstance.load("components").then(() => {
        this.cbInstance = cbInstance;
        const cbComponent = this.cbInstance.createComponent("card", options);
        this.cbComponent = cbComponent;
        this.setCbComponent(cbComponent);
        this.moduleLoaded = true;
        ["ready", "focus", "blur", "change"].map((listener) => {
          this.cbComponent.on(listener, (data) => {
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
    componentOptions() {
      if (this.cbComponent) {
        this.cbComponent.update(this.componentOptions);
      }
    }
  },
  render() {
    let children = this.$slots.default ? this.$slots.default() : [];
    return h("div", { id: this.elementId, class: this.class }, children);
  }
};
const _sfc_main$4 = {
  data() {
    return {
      field: null
    };
  },
  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    fieldOptions: function() {
      return {
        style: this.styles || {},
        placeholder: this.placeholder
      };
    },
    elementId: function() {
      return `card-${this.id}-${genUUID()}`;
    }
  },
  methods: {
    getField() {
      return this.field;
    },
    attachListener(listener) {
      this.field.on(listener, (data) => {
        this.$emit(listener, data);
      });
    },
    initializeField(cbComponent) {
      if (cbComponent) {
        const options = this.fieldOptions;
        this.field = cbComponent.createField(this.id, options).at(`#${this.elementId}`);
        if (this.$parent.onMount)
          this.$parent.onMount();
        this.$nextTick(() => {
          this.field.mount();
        });
        this.attachListener("ready");
        this.attachListener("focus");
        this.attachListener("blur");
        this.attachListener("change");
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
    }
  },
  watch: {
    fieldOptions() {
      if (this.field) {
        const options = this.fieldOptions;
        this.field.update(options);
      }
    },
    cbComponent(newValue, oldValue) {
      if (!oldValue && newValue) {
        if (!this.initialized) {
          this.initializeField(newValue);
        }
      }
    }
  },
  inject: ["cbComponent"],
  mounted() {
    this.initializeField();
  }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  name: "CardNumber",
  mixins: [_sfc_main$4],
  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      id: "number",
      loaded: false,
      classname: this.class
    };
  }
};
const _hoisted_1$2 = ["id"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.elementId,
    class: normalizeClass($data.classname)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$2);
}
var CardNumber = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
const _sfc_main$2 = {
  name: "CardExpiry",
  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      id: "expiry",
      loaded: false,
      classname: this.class
    };
  },
  mixins: [_sfc_main$4]
};
const _hoisted_1$1 = ["id"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.elementId,
    class: normalizeClass($data.classname)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$1);
}
var CardExpiry = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _sfc_main$1 = {
  name: "CardCvv",
  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      id: "cvv",
      loaded: false,
      classname: this.class
    };
  },
  mixins: [_sfc_main$4]
};
const _hoisted_1 = ["id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.elementId,
    class: normalizeClass($data.classname)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1);
}
var CardCvv = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _sfc_main = {
  name: "Provider",
  props: {
    cbInstance: {
      type: Object,
      default: null
    }
  },
  render() {
    if (validateCbInstance(this.cbInstance))
      return this.$slots.default();
    else
      return null;
  }
};
var index = {
  install(Vue) {
    Vue.component("card-component", _sfc_main$5);
    Vue.component("card-number", CardNumber);
    Vue.component("card-expiry", CardExpiry);
    Vue.component("card-cvv", CardCvv);
    Vue.component("provider", _sfc_main);
  }
};
export { _sfc_main$5 as CardComponent, CardCvv, CardExpiry, CardNumber, _sfc_main as Provider, index as default };
