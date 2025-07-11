import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  toDisplayString,
  toRef,
  toRefs,
  toValue,
  unref,
  vModelDynamic,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-6MLDCSDE.js";
import {
  __export
} from "./chunk-HKJ2B2AA.js";

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/index.mjs
var src_exports = {};
__export(src_exports, {
  ABreadcrumb: () => l13,
  ABreadcrumbItem: () => s19,
  AButton: () => l15,
  ACheckbox: () => l9,
  ACheckboxGroup: () => s14,
  ACollapse: () => o2,
  ACollapseItem: () => o3,
  ADatePicker: () => i9,
  ADialog: () => s23,
  ADrawer: () => l8,
  ADropdown: () => s25,
  ADropdownItem: () => s24,
  ADropdownMenu: () => s20,
  AForm: () => s7,
  AFormItem: () => m2,
  AIcon: () => l,
  AInput: () => o6,
  AInputNumber: () => u2,
  ALoading: () => i4,
  AMenu: () => o11,
  AMenuItem: () => m3,
  APagination: () => s18,
  APopover: () => s6,
  AProgress: () => a16,
  ARadio: () => i5,
  ARadioGroup: () => s17,
  ARate: () => l2,
  ARotation: () => i7,
  ARotationItem: () => i8,
  AScrollbar: () => s5,
  ASelect: () => o10,
  ASlider: () => a15,
  ASpace: () => o14,
  ASubMenu: () => l7,
  ASwitch: () => l10,
  ATable: () => o16,
  ATabs: () => o4,
  ATabsPanel: () => o5,
  ATag: () => o12,
  ATree: () => l11,
  Tooltip: () => d7
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/icon/icon.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/icon/style/index.css";
var m = defineComponent({
  name: "AIcon",
  props: {
    name: {
      type: String,
      defalut: "amu-amudesign"
    }
  },
  setup(n3) {
    return () => createVNode("span", {
      class: `iconfont icon-${n3.name}`
    }, null);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/icon/index.mjs
var e = (n3) => (n3.install = (t2) => {
  const o18 = n3.name;
  t2.component(o18, n3);
}, n3);
var l = e(m);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/bus/bus.mjs
var o = class {
  constructor() {
    this.state = {};
  }
  $on(t2, s27) {
    this.state[t2] = s27;
  }
  $emit(t2, ...s27) {
    const e13 = this.state[t2];
    typeof e13 == "function" ? e13(...s27) : console.error("callback is not a function eventName：" + t2);
  }
  $off(t2) {
    t2 && this.state[t2] ? delete this.state[t2] : this.state = {};
  }
};
var c = new o();

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/collapse/collapse.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/collapse/style/index.css";
var c2 = function(e13) {
  return e13.OPEN = "open", e13.CLOSE = "close", e13;
}({});
var d = function(e13) {
  return e13.UPDATE_MODEL_VALUE = "update-modelValue", e13;
}({});
var N = defineComponent({
  name: "ACollapse",
  props: {
    modelValue: {
      type: [Array, String],
      default: []
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(e13, {
    emit: m14,
    slots: i10
  }) {
    const s27 = i10.default(), l17 = ref("");
    onBeforeMount(() => {
      f11();
    }), onBeforeUnmount(() => {
      c.$off(d.UPDATE_MODEL_VALUE);
    });
    const f11 = () => {
      c.$on(d.UPDATE_MODEL_VALUE, E3);
    }, E3 = (t2, a20) => {
      let o18 = [];
      if (Array.isArray(e13.modelValue))
        switch (t2) {
          case c2.OPEN:
            o18 = [.../* @__PURE__ */ new Set([...e13.modelValue, ...a20])];
            break;
          case c2.CLOSE:
            o18 = e13.modelValue, o18.forEach((V3, p11) => {
              V3 === a20 && o18.splice(p11, 1);
            });
            break;
        }
      else
        o18 = a20, e13.accordion && (l17.value = a20);
      m14("update:modelValue", o18);
    };
    return provide("model-value", e13.modelValue), provide("accordion", e13.accordion), () => createVNode("div", {
      class: "a-collapse-content"
    }, [s27.map((t2) => createVNode(t2, {
      currentName: l17.value
    }, null))]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/collapse/index.mjs
var e2 = (t2) => (t2.install = (n3) => {
  const l17 = t2.name;
  n3.component(l17, t2);
}, t2);
var o2 = e2(N);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/collape-item/collape-item.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/collape-item/style/index.css";
var w = defineComponent({
  name: "ACollapseItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    name: {
      type: String
    },
    currentName: String
  },
  emits: [],
  setup(e13, {
    slots: c14
  }) {
    let o18;
    const a20 = inject("model-value"), m14 = ref(null), l17 = ref(null), u9 = ref(0);
    onMounted(() => {
      u9.value = l17.value.offsetHeight, o18 = m14.value.querySelector(".a-collapse-item-head-icon"), l17.value.style.height = "0px", Array.isArray(a20) ? a20.includes(e13.name) && i10() : a20 && a20 === e13.name && i10();
    }), watch(() => e13.currentName, (n3) => {
      n3 !== e13.name && r12();
    });
    const g3 = () => {
      Number(l17.value.style.height.split("p")[0]) === 0 ? (i10(), c.$emit(d.UPDATE_MODEL_VALUE, c2.OPEN, e13.name)) : (r12(), c.$emit(d.UPDATE_MODEL_VALUE, c2.CLOSE, e13.name));
    }, i10 = () => {
      l17.value.style.height = u9.value + "px", o18.style.transform = "rotate(90deg)";
    }, r12 = () => {
      o18.style.transform = "rotate(0deg)", l17.value.style.height = "0px";
    };
    return () => createVNode(Fragment, null, [createVNode("div", {
      class: "a-collapse-item"
    }, [createVNode("div", {
      ref: m14,
      onClick: () => g3(),
      class: "a-collapse-item-head"
    }, [createVNode("div", {
      class: "a-collapse-item-head-title"
    }, [e13.title]), createVNode("div", {
      class: "a-collapse-item-head-icon iconfont icon-right"
    }, null)]), createVNode("div", {
      ref: l17,
      class: "a-collapse-item-content"
    }, [c14.default ? c14.default() : "", createVNode("div", {
      style: "height:15px"
    }, null)])])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/collape-item/index.mjs
var a = (t2) => (t2.install = (e13) => {
  const n3 = t2.name;
  e13.component(n3, t2);
}, t2);
var o3 = a(w);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tabs/tabs.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tabs/style/index.css";
var K = defineComponent({
  name: "ATabs",
  props: {
    defaultActiveKey: [String, Number],
    position: {
      type: String,
      default: () => "top"
    }
  },
  emits: ["change"],
  setup(i10, f11) {
    const n3 = reactive({
      barWidth: 0,
      barOffset: 0
    }), d8 = ref(), b2 = f11.slots.default(), p11 = b2.map((t2) => {
      const {
        props: e13 = {}
      } = t2, {
        key: s27,
        title: r12
      } = e13;
      return {
        key: s27,
        title: r12
      };
    }), l17 = ref(i10.defaultActiveKey), o18 = i10.position === "top" || i10.position !== "left", x2 = computed(() => {
      const t2 = o18 ? `translate3d(${n3.barOffset}px,0px,0px)` : `translate3d(0px,${n3.barOffset}px,0px)`;
      return {
        width: `${n3.barWidth}px`,
        transform: t2
      };
    });
    onMounted(() => {
      u9();
    });
    const u9 = () => {
      nextTick(() => {
        const t2 = p11.findIndex((r12) => r12.key === l17.value), e13 = d8.value.querySelectorAll(".tabs-tab"), s27 = e13[t2];
        if (n3.barWidth = s27 ? o18 ? s27.offsetWidth : s27.offsetHeight : 0, t2 > 0) {
          let r12 = 0;
          for (let c14 = 0; c14 < t2; c14++) {
            const v3 = e13[c14];
            r12 += o18 ? v3.offsetWidth : v3.offsetHeight;
          }
          n3.barOffset = r12;
        } else
          n3.barOffset = 0;
      });
    }, y3 = (t2) => {
      l17.value = t2, u9(), f11.emit("change", t2);
    };
    return () => createVNode("div", {
      class: "tabs-content",
      style: o18 ? {
        flexDirection: "column"
      } : ""
    }, [createVNode("div", {
      class: "tabs"
    }, [createVNode("div", {
      ref: d8,
      class: "tabs-nav-wrap",
      style: o18 ? {
        borderBottom: "1px solid var(--a-border-color)"
      } : {
        borderRight: "1px solid var(--a-border-color)"
      }
    }, [createVNode("div", {
      class: o18 ? "tabs-inv-bar-top" : "tabs-inv-bar-left",
      style: x2.value
    }, null), createVNode("div", {
      class: "tab-list",
      style: o18 ? "" : {
        flexDirection: "column",
        alignItems: "flex-end"
      }
    }, [p11.map((t2) => {
      const {
        key: e13,
        title: s27
      } = t2;
      return createVNode("div", {
        class: `tabs-tab ${e13 === l17.value ? "tabs-tab-active" : ""}`,
        key: e13,
        onClick: () => y3(e13)
      }, [s27]);
    })])])]), createVNode("div", {
      class: "pane-content"
    }, [b2.filter((t2) => {
      const {
        props: e13
      } = t2, {
        key: s27
      } = e13;
      return l17.value === s27 && createVNode(t2, null, null);
    })])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tabs/index.mjs
var e3 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var o4 = e3(K);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tabs-panel/tabs-panel.mjs
var p = defineComponent({
  name: "ATabsPanel",
  props: ["key", "title"],
  setup(n3, {
    slots: e13
  }) {
    return () => createVNode("div", null, [e13.default ? e13.default() : ""]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tabs-panel/index.mjs
var s = (n3) => (n3.install = (t2) => {
  const a20 = n3.name;
  t2.component(a20, n3);
}, n3);
var o5 = s(p);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rate/rate.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rate/style/index.css";
var i = function(e13) {
  return e13.ENTER = "enter", e13.CLICK = "click", e13;
}({});
var r = function(e13) {
  return e13.STAR_ON = "iconfont icon-xingxing", e13.STAR_OFF = "iconfont icon-xingxing1", e13;
}({});
var L = defineComponent({
  name: "ARate",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    color: {
      type: String,
      default: "#f7ba2a"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(e13, {
    emit: N2
  }) {
    const s27 = ref(null), c14 = ref([]);
    onMounted(() => {
      A(), f11();
    });
    const A = () => {
      for (let o18 = 0; o18 < e13.modelValue; o18++)
        c14.value.push(o18);
    }, m14 = (o18, n3 = i.ENTER) => {
      var l17;
      if (e13.disabled)
        return;
      const t2 = o18.target.getAttribute("index"), a20 = (l17 = s27.value) == null ? void 0 : l17.querySelectorAll(".a-rate-item");
      S3(n3, a20, Number(t2)), n3 === i.CLICK && N2("update:modelValue", Number(t2));
    }, S3 = (o18, n3, t2) => {
      o18 === i.CLICK && (c14.value = []);
      for (let a20 = 0; a20 < n3.length; a20++) {
        const l17 = n3[a20], u9 = Number(l17.getAttribute("index")), x2 = l17.querySelector(".iconfont");
        switch (o18) {
          case i.CLICK:
            u9 <= t2 && c14.value.push(u9);
            break;
          case i.ENTER:
            x2.className = u9 <= t2 ? r.STAR_ON : r.STAR_OFF;
            break;
        }
      }
    }, f11 = () => {
      s27.value.querySelectorAll(".a-rate-item").forEach((n3) => {
        const t2 = n3.querySelector(".iconfont"), a20 = Number(n3.getAttribute("index"));
        c14.value.includes(a20) ? t2.className = r.STAR_ON : t2.className = r.STAR_OFF;
      });
    };
    return () => createVNode("div", {
      class: "a-rate-content",
      style: `cursor:${e13.disabled ? "not-allowed" : "pointer"}`,
      ref: s27,
      onMouseleave: () => f11()
    }, [new Array(e13.max).fill("").map((o18, n3) => createVNode("div", {
      class: "a-rate-item",
      index: n3,
      onMouseenter: (t2) => m14(t2),
      onClick: (t2) => m14(t2, i.CLICK)
    }, [createVNode("div", {
      index: n3,
      style: {
        color: e13.disabled ? "#c8c9cc" : e13.color
      },
      class: `iconfont ${r.STAR_OFF}`
    }, null)]))]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rate/index.mjs
var r2 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var l2 = r2(L);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/input/input.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/input/style/index.css";
var re = defineComponent({
  name: "AInput",
  props: {
    modelValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number],
      default: ""
    },
    textCenter: {
      type: Boolean,
      default: false
    },
    width: [Number, String],
    height: [Number, String],
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Please input"
    },
    isSearch: {
      type: Boolean,
      default: false
    },
    isSelector: {
      type: Boolean,
      default: false
    },
    isDate: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus", "resetValue", "enter"],
  setup(e13, {
    emit: s27,
    slots: le,
    expose: R5
  }) {
    const t2 = ref(e13.modelValue === void 0 ? e13.value : e13.modelValue), i10 = inject("prop", ""), m14 = ref(e13.type), d8 = ref(false), b2 = ref(false), h12 = ref(false), S3 = ref("var(--a-primary-color)"), p11 = ref("var(--a-border-color)"), B5 = ref("var(--a-primary-color)"), x2 = ref("var(--a-primary-color)"), $3 = ref(null), F3 = ref(null), v3 = ref(null), I4 = inject("uniKey", null), y3 = inject("rules", null), M2 = inject("model", null), U2 = inject("changeErrorMessage", null), k7 = inject("shrinkFormErrorSwitchFn", null), C5 = inject("shrinkSelectMenuSwitchFn", null), j4 = computed(() => ({
      width: e13.width ? e13.width + "px" : "100%",
      height: e13.height ? e13.height + "px" : "34px",
      textAlign: e13.textCenter ? "center" : "",
      backgroundColor: e13.disabled ? "var(--a-bg-grey-color)" : "",
      "--input-text-color": e13.disabled ? "var(--a-text-disable-color)" : "var(--a-text-color)"
    })), q3 = computed(() => e13.clearable || e13.isDate || e13.isSearch || e13.isSelector || e13.type === "password");
    watch(() => [e13.width, e13.height], () => {
      E3();
    }, {
      deep: true
    }), watch(() => e13.modelValue, (l17) => {
      t2.value = l17;
    }), watch(() => e13.value, (l17) => {
      t2.value = l17;
    }), onMounted(() => {
      E3();
    });
    const E3 = () => {
      $3.value.style.flexGrow = e13.width ? "0" : "1";
    }, f11 = () => {
      e13.type === "password" && e13.showPassword ? (m14.value = m14.value === "password" ? "text" : "password", b2.value = !b2.value) : (t2.value = "", s27("update:modelValue", t2.value)), setTimeout(() => {
        F3.value.focus();
      });
    };
    watch(() => t2.value, () => {
      t2.value === "" ? d8.value = false : d8.value = true;
    });
    const G4 = (l17) => {
      const o18 = l17.target, n3 = e13.type === "number" ? o18.value === "" ? o18.value : Number(o18.value) : o18.value;
      t2.value = n3, s27("update:modelValue", t2.value), s27("change", t2.value), A("change");
    }, H3 = (l17) => {
      h12.value = false, s27("blur", l17), A("blur"), v3.value && (v3.value.$el.style.transform = "rotate(0deg)");
    }, T2 = (l17) => {
      h12.value = true, t2.value.toString().length > 0 && (d8.value = true), v3.value && (v3.value.$el.style.transform = "rotate(-180deg)"), C5 && C5.value(1, 0.2), s27("focus", l17);
    }, W2 = () => createVNode("div", null, [d8.value && createVNode("span", {
      onMousedown: () => f11(),
      class: "iconfont icon-guanbi"
    }, null)]), N2 = () => createVNode("div", null, [d8.value && createVNode("div", {
      onMousedown: () => f11()
    }, [createVNode(l, {
      name: b2.value ? "select" : "hide"
    }, null)])]), _5 = () => createVNode("div", {
      onMousedown: () => f11()
    }, [createVNode(l, {
      name: "calendar"
    }, null)]), z = () => createVNode("div", {
      onMousedown: () => f11()
    }, [createVNode(l, {
      name: "search"
    }, null)]), J = () => createVNode("div", {
      onMousedown: () => f11()
    }, [createVNode(l, {
      name: "arrow-down",
      ref: v3
    }, null)]), L2 = () => {
      if (e13.clearable)
        return e13.type === "password" && e13.showPassword ? N2() : W2();
      if (e13.isDate)
        return _5();
      if (e13.isSelector)
        return e13.isSearch ? z() : J();
      if (e13.type === "password" && e13.showPassword)
        return N2();
    }, A = (l17) => {
      if (d8.value = false, y3 && y3[i10])
        for (let o18 = 0; o18 < y3[i10].length; o18++) {
          const n3 = y3[i10][o18];
          if (n3.trigger === l17) {
            if (n3.required === true) {
              if (t2.value === "") {
                u9("error", n3.message);
                return;
              }
              u9();
            }
            if (t2.value.toString().length < n3.min || t2.value.toString().length > n3.max) {
              u9("error", n3.message);
              return;
            } else
              u9();
            n3.validator && typeof n3.validator == "function" && n3.validator(n3, t2.value, (D5) => {
              D5 ? u9("error", D5.message) : u9();
            });
          }
        }
    }, O = (l17) => {
      l17.key === "Enter" && s27("enter", t2.value);
    }, u9 = (l17 = "right", o18 = "") => {
      l17 === "error" ? (S3.value = "var(--a-error-color)", p11.value = "var(--a-error-color)", B5.value = "var(--a-error-color)", x2.value = "var(--a-error-color)", U2(o18), k7.value(1, 0.2)) : (S3.value = "var(--a-primary-color)", p11.value = "var(--a-border-color)", B5.value = "var(--a-primary-color)", x2.value = "var(--a-primary-color)", k7.value(0, 0.2));
    };
    return c.$on(`change-input-style-${I4}-${i10}`, (l17 = "right", o18 = "") => {
      u9(l17, o18);
    }), c.$on(`reset-input-value-${I4}-${i10}`, () => {
      e13.isSelector || (t2.value = M2[i10], s27("update:modelValue", t2.value)), s27("resetValue", M2[i10]), u9();
    }), onBeforeUnmount(() => {
      c.$off(`reset-input-value-${I4}-${i10}`);
    }), R5({
      setInputStatusStyle: u9
    }), () => createVNode("div", {
      class: "a-input-content",
      style: {
        "--border-focus-shadow": h12.value ? x2.value : "",
        "--input-focus-opacity": h12.value ? 0.2 : 1,
        cursor: e13.disabled ? "no-drop" : ""
      }
    }, [createVNode("div", {
      class: "a-input-wrapper",
      style: {
        backgroundColor: e13.disabled ? "var(--a-bg-grey-color)" : "",
        pointerEvents: e13.disabled ? "none" : "auto",
        "--border-focus-color": S3.value,
        "--border-color": p11.value,
        "--border-hover-color": B5.value
      },
      ref: $3
    }, [withDirectives(createVNode("input", {
      style: j4.value,
      placeholder: e13.placeholder,
      class: "input",
      onInput: G4,
      readonly: e13.readonly,
      onFocus: (l17) => T2(l17),
      onBlur: (l17) => H3(l17),
      onKeydown: (l17) => O(l17),
      disabled: e13.disabled,
      type: m14.value,
      "onUpdate:modelValue": (l17) => t2.value = l17,
      ref: F3
    }, null), [[vModelDynamic, t2.value]])]), withDirectives(createVNode("div", {
      class: "a-input-slot",
      style: {
        backgroundColor: e13.disabled ? "var(--a-bg-grey-color)" : ""
      }
    }, [L2()]), [[vShow, q3.value]])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/input/index.mjs
var s2 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var o6 = s2(re);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-input/date-input.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-input/style/index.css";
var p2 = defineComponent({
  name: "ADateInput",
  props: {
    value: {
      type: String,
      default: ""
    },
    showDateSelect: {
      type: Boolean,
      default: false
    },
    shrinkCalendarSwitchFn: Function,
    showDateSelectFn: Function
  },
  emits: ["inputBlur", "inputFoucs", "resetValue"],
  components: {},
  setup(e13, {
    emit: t2
  }) {
    const a20 = () => {
      e13.shrinkCalendarSwitchFn(1, 0.18);
    };
    return () => createVNode("div", {
      class: "a-date-selector-input"
    }, [createVNode(o6, {
      width: "200",
      readonly: true,
      isDate: true,
      modelValue: e13.value,
      onResetValue: (u9) => t2("resetValue", u9),
      onFocus: () => a20(),
      onBlur: () => t2("inputBlur")
    }, null)]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-input/index.mjs
var s3 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var o7 = s3(p2);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/shared/utils.mjs
var a2 = (e13, r12) => e13.findIndex((t2) => t2 === r12);
var f = (e13, r12) => {
  let t2 = [], l17 = [];
  return e13.forEach((n3) => {
    l17.length === 0 && t2.push(l17), l17.push(n3), l17.length === r12 && (l17 = []);
  }), t2;
};
var o8 = (e13, r12) => {
  let t2 = null;
  return (l17) => {
    t2 !== null && clearTimeout(t2), t2 = setTimeout(() => {
      e13.call(l17), t2 = null;
    }, r12);
  };
};
var i2 = () => {
  function e13() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return e13() + e13() + "-" + e13() + "-" + e13() + "-" + e13() + "-" + e13() + e13() + e13() + Date.now();
};
var c3 = (e13, r12 = /* @__PURE__ */ new Map()) => {
  if (typeof e13 == "object" && e13 !== null) {
    const t2 = r12.get(e13);
    if (t2)
      return t2;
    const l17 = Array.isArray(e13), n3 = l17 ? [] : {};
    return r12.set(e13, n3), l17 ? e13.forEach((u9, s27) => {
      n3[s27] = c3(e13[s27], r12);
    }) : Object.keys(e13).forEach((u9) => {
      n3[u9] = c3(e13[u9], r12);
    }), n3;
  } else
    return e13;
};
var h2 = (e13, r12) => {
  let t2 = [];
  for (let l17 = 0; l17 < r12; l17++)
    t2.push(e13), e13 += 1;
  return t2;
};
var d2 = (e13, r12) => {
  const t2 = window.getComputedStyle(e13, null);
  return parseFloat(t2.getPropertyValue(r12));
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/tool/index.mjs
function D(e13, t2) {
  return new Date(e13, t2 - 1, 1).getDay();
}
function u(e13, t2) {
  return new Date(e13, t2, 0).getDate();
}
function c4(e13, t2) {
  const o18 = D(e13, t2);
  let a20 = u(e13, t2 - 1), n3 = [];
  for (; n3.length < o18; )
    n3.push(a20), a20 = a20 - 1;
  return n3.reverse();
}
function g(e13, t2) {
  const o18 = c4(e13, t2), n3 = 42 - (u(e13, t2) + o18.length);
  let s27 = [];
  for (let r12 = 1; r12 <= n3; r12++)
    s27.push(r12);
  return s27;
}
function l3(e13) {
  const t2 = e13 ? new Date(e13) : /* @__PURE__ */ new Date();
  return [t2.getFullYear(), t2.getMonth() + 1, t2.getDate()];
}
function h3(e13, t2, o18) {
  const a20 = [e13, t2, o18];
  for (let n3 = 1; n3 < a20.length; n3++)
    a20[n3] < 10 && (a20[n3] = "0" + a20[n3]);
  return a20.join("-");
}

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/hooks/useCalendar.mjs
var h4 = ["日", "一", "二", "三", "四", "五", "六"];
var C = (t2, e13) => {
  const r12 = c4(t2, e13), n3 = u(t2, e13), a20 = g(t2, e13), o18 = [], [s27, l17, y3] = l3();
  for (let c14 = 1; c14 <= n3; c14++) {
    const d8 = s27 === t2 && l17 === e13 && y3 === c14;
    o18.push({
      day: c14,
      style: d8 ? "day current-day current" : "day current-day",
      isRestDay: false,
      year: t2,
      month: e13
    });
  }
  const u9 = [
    ...D2("last", r12, t2, e13),
    ...o18,
    ...D2("next", a20, t2, e13)
  ];
  return [
    h4,
    u9,
    f(u9, 7)
  ];
};
var D2 = (t2, e13, r12, n3) => {
  let a20 = [];
  return e13.forEach((o18) => {
    const s27 = {
      day: o18,
      style: "day rest-day",
      isRestDay: true,
      year: r12,
      month: n3
    };
    if (t2 === "last") {
      if (n3 === 1) {
        s27.year = r12 - 1;
        return;
      }
      s27.month--;
    } else {
      if (n3 === 12) {
        s27.year = r12 + 1;
        return;
      }
      s27.month++;
    }
    a20.push(s27);
  }), a20;
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-calendar/date-calendar.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-calendar/style/index.css";
var j = defineComponent({
  name: "ACalendar",
  props: {
    dateValue: {
      type: String,
      default: ""
    }
  },
  setup(o18, {
    emit: I4
  }) {
    const s27 = inject("dateState"), m14 = inject("update-modelValue"), r12 = reactive({
      weekDays: [],
      CalendarItemChunkArr: [],
      CalendarItemObjArr: []
    });
    watch(() => s27, () => {
      c14();
    }, {
      deep: true
    }), onBeforeMount(() => {
      c14();
    });
    const c14 = () => {
      const {
        currentYear: e13,
        currentMonth: t2
      } = s27, [n3, l17, d8] = C(e13, t2);
      r12.weekDays = n3, r12.CalendarItemChunkArr = d8, r12.CalendarItemObjArr = l17;
    }, i10 = (e13) => {
      let t2;
      if (o18.dateValue !== "") {
        const [n3, l17, d8] = l3(o18.dateValue);
        n3 === e13.year && l17 === e13.month && d8 === e13.day && (t2 = true);
      } else
        t2 = false;
      return t2;
    }, C5 = (e13) => e13.map((t2) => {
      const {
        day: n3,
        style: l17
      } = t2, d8 = i10(t2);
      return createVNode("td", {
        onClick: () => m14(t2),
        class: l17
      }, [createVNode("div", {
        class: d8 && "checked-day"
      }, [n3])]);
    });
    return () => createVNode("div", {
      class: "a-calendar-content"
    }, [createVNode("table", null, [createVNode("thead", null, [createVNode("tr", null, [r12.weekDays.map((e13) => createVNode("th", null, [e13]))])]), createVNode("tbody", null, [r12.CalendarItemChunkArr.map((e13) => createVNode("tr", null, [C5(e13)]))])])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-calendar/index.mjs
var l4 = (n3) => (n3.install = (t2) => {
  const a20 = n3.name;
  t2.component(a20, n3);
}, n3);
var s4 = l4(j);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/scrollbar/scrollbar.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/scrollbar/style/index.css";
var F = defineComponent({
  name: "AScrollbar",
  emits: [],
  props: {
    trigger: {
      type: String,
      default: "hover"
    },
    xScrollable: {
      type: Boolean,
      default: false
    },
    onScroll: {
      type: Function
    },
    size: Number
  },
  setup(o18, {
    emit: U2,
    slots: M2
  }) {
    const v3 = ref(), c14 = ref(), f11 = ref(), u9 = ref(), m14 = ref(), h12 = ref(false), x2 = ref(false), y3 = ref(true), H3 = ref(true), W2 = ref(0), w7 = ref(0), R5 = ref(0), L2 = ref(0), p11 = ref("vertical");
    onMounted(() => {
      V3(), document.addEventListener("mousemove", C5), document.addEventListener("mouseup", T2);
    }), onUnmounted(() => {
      document.removeEventListener("mousemove", C5), document.removeEventListener("mouseup", T2);
    });
    const V3 = () => {
      nextTick(() => {
        X(), Y();
      });
    }, X = () => {
      const {
        clientHeight: e13,
        scrollHeight: l17
      } = v3.value;
      if (e13 === l17) {
        y3.value = false;
        return;
      }
      const r12 = e13 / l17 * 100 + "%";
      f11.value.style.height = r12, o18.trigger === "hover" && (c14.value.style.opacity = "0");
    }, Y = () => {
      if (o18.xScrollable) {
        const {
          clientWidth: e13,
          scrollWidth: l17
        } = v3.value;
        if (e13 === l17) {
          H3.value = false;
          return;
        }
        const r12 = e13 / l17 * 100 + "%";
        m14.value.style.width = r12, o18.trigger === "hover" && (u9.value.style.opacity = "0");
      }
    }, B5 = (e13) => {
      const l17 = v3.value, r12 = c14.value, a20 = f11.value;
      if (o18.onScroll && o18.onScroll(e13), !l17 || !r12 || !a20)
        return;
      const d8 = l17.scrollTop / (l17.scrollHeight - l17.clientHeight), b2 = r12.clientHeight, n3 = a20.clientHeight, i10 = d8 * (b2 - n3);
      a20.style.top = `${i10}px`;
    }, z = (e13, l17) => {
      p11.value = l17, h12.value = true, l17 === "vertical" ? (W2.value = e13.clientY, w7.value = f11.value.offsetTop) : (R5.value = e13.clientX, L2.value = m14.value.offsetLeft);
    }, C5 = (e13) => {
      if (!h12.value)
        return;
      const l17 = v3.value;
      if (p11.value === "vertical") {
        const r12 = c14.value, a20 = f11.value, d8 = l17.clientHeight, b2 = e13.clientY - W2.value, n3 = r12.clientHeight, i10 = Math.min(Math.max(0, w7.value + b2), n3 - a20.clientHeight), g3 = i10 / (n3 - a20.clientHeight), S3 = l17.scrollHeight - d8;
        l17.scrollTop !== g3 * S3 && (l17.scrollTop = g3 * S3), a20.style.top = `${i10}px`;
      } else {
        const r12 = u9.value, a20 = m14.value, d8 = l17.clientWidth, b2 = e13.clientX - R5.value, n3 = r12.clientWidth, i10 = Math.min(Math.max(0, L2.value + b2), n3 - a20.clientWidth), g3 = i10 / (n3 - a20.clientWidth), S3 = l17.scrollWidth - d8;
        l17.scrollLeft !== g3 * S3 && (l17.scrollLeft = g3 * S3), a20.style.left = `${i10}px`;
      }
    }, T2 = () => {
      h12.value !== false && (h12.value = false, c14.value && !x2.value && o18.trigger !== "none" && (o18.xScrollable ? u9.value.style.opacity = "0" : c14.value.style.opacity = "0"));
    }, _5 = () => {
      o18.trigger !== "none" && (x2.value = true, y3.value && (c14.value.style.opacity = "1"), H3.value && o18.xScrollable && (u9.value.style.opacity = "1"));
    }, E3 = () => {
      o18.trigger !== "none" && (x2.value = false, h12.value || (y3.value && (c14.value.style.opacity = "0"), H3.value && o18.xScrollable && (u9.value.style.opacity = "0")));
    };
    return () => createVNode("div", {
      class: "a-scrollbar",
      onMouseenter: _5,
      onMouseleave: E3
    }, [createVNode("div", {
      class: "a-scrollbar-container",
      ref: v3,
      onScroll: (e13) => B5(e13)
    }, [createVNode("div", {
      class: "a-scrollbar-content",
      style: {
        width: o18.xScrollable ? "fit-content" : "none"
      }
    }, [M2.default && M2.default()])]), y3.value && createVNode("div", {
      ref: c14,
      class: ["a-scrollbar-rail", "a-scrollbar-rail--vertical"]
    }, [createVNode("div", {
      class: "a-scrollbar-rail__scrollbar",
      ref: f11,
      onMousedown: (e13) => z(e13, "vertical")
    }, null)]), o18.xScrollable && H3.value && createVNode("div", {
      ref: u9,
      class: ["a-scrollbar-rail", "a-scrollbar-rail--horizontal"]
    }, [createVNode("div", {
      class: "a-scrollbar-rail__scrollbar",
      ref: m14,
      onMousedown: (e13) => z(e13, "horizontal")
    }, null)])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/scrollbar/index.mjs
var a3 = (t2) => (t2.install = (n3) => {
  const l17 = t2.name;
  n3.component(l17, t2);
}, t2);
var s5 = a3(F);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-select/date-select.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-select/style/index.css";
var q = defineComponent({
  name: "ADateSelect",
  props: {
    dateValue: {
      type: String,
      default: ""
    },
    currentYear: Number,
    currentMonth: Number,
    updateYearOrMonthFn: Function
  },
  setup(n3, {
    emit: x2
  }) {
    const h12 = inject("dateSelectContentKey"), o18 = ref(), c14 = ref(), l17 = reactive({
      selectYear: h2(1901, 200),
      selectMonth: h2(1, 12)
    }), a20 = (e13, t2) => {
      const p11 = o18.value.$el.querySelector(".a-scrollbar-container"), y3 = c14.value.$el.querySelector(".a-scrollbar-container"), v3 = o18.value.$el.querySelector(`.select-year-index-${e13}`), S3 = c14.value.$el.querySelector(`.select-month-index-${t2}`);
      p11.scrollTo({
        behavior: "smooth",
        top: v3.offsetTop
      }), y3.scrollTo({
        behavior: "smooth",
        top: S3.offsetTop
      });
    }, m14 = (e13) => {
      n3.updateYearOrMonthFn("year", e13), a20(e13, n3.currentMonth);
    }, f11 = (e13) => {
      n3.updateYearOrMonthFn("month", e13), a20(n3.currentYear, e13);
    }, s27 = (e13, t2) => e13 === "year" ? n3.currentYear === t2 : n3.currentMonth === t2;
    return () => createVNode("div", {
      class: "a-date-select-content",
      id: h12
    }, [createVNode(s5, {
      style: {
        height: "248px"
      },
      ref: o18
    }, {
      default: () => [createVNode("div", {
        class: "select-year"
      }, [l17.selectYear.map((e13, t2) => createVNode("div", {
        onClick: () => m14(e13),
        key: t2,
        class: `year select-year-index-${e13} ${s27("year", e13) && "current"}`
      }, [e13]))])]
    }), createVNode(s5, {
      style: {
        height: "248px"
      },
      ref: c14
    }, {
      default: () => [createVNode("div", {
        class: "select-month"
      }, [l17.selectMonth.map((e13, t2) => createVNode("div", {
        onClick: () => f11(e13),
        key: t2,
        class: `month select-month-index-${e13} ${s27("month", e13) && "current"}`
      }, [e13])), createVNode("div", {
        style: "height:212px"
      }, null)])]
    })]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-select/index.mjs
var l5 = (t2) => (t2.install = (e13) => {
  const n3 = t2.name;
  e13.component(n3, t2);
}, t2);
var o9 = l5(q);

// node_modules/.pnpm/@vueuse+shared@12.8.2/node_modules/@vueuse/shared/index.mjs
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isWorker = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var toString = Object.prototype.toString;
var isObject = (val) => toString.call(val) === "[object Object]";
var noop = () => {
};
var isIOS = getIsIOS();
function getIsIOS() {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function cacheStringFunction(fn) {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_5, c14) => c14 ? c14.toUpperCase() : "");
});
function identity(arg) {
  return arg;
}
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
function watchImmediate(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      immediate: true
    }
  );
}

// node_modules/.pnpm/@vueuse+core@12.8.2/node_modules/@vueuse/core/index.mjs
var defaultWindow = isClient ? window : void 0;
var defaultDocument = isClient ? window.document : void 0;
var defaultNavigator = isClient ? window.navigator : void 0;
var defaultLocation = isClient ? window.location : void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options);
    return () => el.removeEventListener(event, listener, options);
  };
  const firstParamTargets = computed(() => {
    const test = toArray(toValue(args[0])).filter((e13) => e13 != null);
    return test.every((e13) => typeof e13 !== "string") ? test : void 0;
  });
  const stopWatch = watchImmediate(
    () => {
      var _a, _b;
      return [
        (_b = (_a = firstParamTargets.value) == null ? void 0 : _a.map((e13) => unrefElement(e13))) != null ? _b : [defaultWindow].filter((e13) => e13 != null),
        toArray(toValue(firstParamTargets.value ? args[1] : args[0])),
        toArray(unref(firstParamTargets.value ? args[2] : args[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        toValue(firstParamTargets.value ? args[3] : args[2])
      ];
    },
    ([raw_targets, raw_events, raw_listeners, raw_options]) => {
      cleanup();
      if (!(raw_targets == null ? void 0 : raw_targets.length) || !(raw_events == null ? void 0 : raw_events.length) || !(raw_listeners == null ? void 0 : raw_listeners.length))
        return;
      const optionsClone = isObject(raw_options) ? { ...raw_options } : raw_options;
      cleanups.push(
        ...raw_targets.flatMap(
          (el) => raw_events.flatMap(
            (event) => raw_listeners.map((listener) => register(el, event, listener, optionsClone))
          )
        )
      );
    },
    { flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(cleanup);
  return stop;
}
var _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!window2) {
    return controls ? { stop: noop, cancel: noop, trigger: noop } : noop;
  }
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    const listenerOptions = { passive: true };
    Array.from(window2.document.body.children).forEach((el) => useEventListener(el, "click", noop, listenerOptions));
    useEventListener(window2.document.documentElement, "click", noop, listenerOptions);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children))
      return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const el = unrefElement(target);
    if (event.target == null)
      return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event))
      return;
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if ("detail" in event && event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(window2, "click", (event) => {
      if (!isProcessingClick) {
        isProcessingClick = true;
        setTimeout(() => {
          isProcessingClick = false;
        }, 0);
        listener(event);
      }
    }, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e13) => {
      const el = unrefElement(target);
      shouldListen = !shouldIgnore(e13) && !!(el && !e13.composedPath().includes(el));
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      setTimeout(() => {
        var _a;
        const el = unrefElement(target);
        if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement))) {
          handler(event);
        }
      }, 0);
    }, { passive: true })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false;
      },
      trigger: (event) => {
        shouldListen = true;
        listener(event);
        shouldListen = false;
      }
    };
  }
  return stop;
}
var ssrWidthSymbol = Symbol("vueuse-ssr-width");
var _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var globalKey = "__vueuse_ssr_handlers__";
var handlers = getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
var defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
var keys = Object.keys(defaultState);
var DEFAULT_UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
];
var _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
var TransitionPresets = Object.assign({}, { linear: identity }, _TransitionPresets);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/popover/hooks/useElementPosition.mjs
var n = (h12, a20, s27) => {
  let o18 = 0, f11 = 0, i10 = s27;
  if (!h12)
    return {
      placement: i10,
      top: o18,
      left: f11
    };
  const e13 = a20, t2 = h12.getBoundingClientRect();
  switch (i10) {
    case "top":
      t2.top < e13.clientHeight && (i10 = "bottom");
      break;
    case "bottom":
      window.innerHeight - t2.bottom < e13.clientHeight && (i10 = "top");
      break;
    case "left":
      t2.left < e13.clientWidth && (i10 = "right");
      break;
    case "right":
      window.innerWidth - t2.right < e13.clientWidth && (i10 = "left");
      break;
    default:
      i10 = s27;
  }
  switch (i10) {
    case "top":
      o18 = t2.top - e13.offsetHeight - 5, f11 = t2.left + (t2.width - e13.offsetWidth) / 2;
      break;
    case "bottom":
      o18 = t2.bottom + 5, f11 = t2.left + (t2.width - e13.offsetWidth) / 2;
      break;
    case "left":
      o18 = t2.top + (t2.height - e13.offsetHeight) / 2, f11 = t2.left - e13.offsetWidth - 5;
      break;
    case "right":
      o18 = t2.top + (t2.height - e13.offsetHeight) / 2, f11 = t2.right + 5;
      break;
    default:
      f11 = 0, o18 = 0;
  }
  return {
    placement: i10,
    top: o18,
    left: f11
  };
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/popover/popover.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/popover/style/index.css";

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/shared/hooks/useZIndex.mjs
var r3 = () => {
  let t2 = 2e3, e13 = [];
  const n3 = document.querySelectorAll(".a-popover");
  return n3.length > 0 && (n3.forEach((o18) => {
    const l17 = Number(o18.style.zIndex);
    e13.push(l17);
  }), e13.length > 0 && (t2 = Math.max(...e13) + 1)), t2;
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/popover/popover.mjs
var j2 = defineComponent({
  name: "APopover",
  props: {
    visible: {
      type: Boolean,
      default: null
    },
    trigger: {
      type: String,
      default: "hover"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: "bottom"
    },
    width: {
      type: String,
      default: "150px"
    },
    padding: {
      type: String,
      default: "12px"
    }
  },
  emits: ["isClickElementInPopover"],
  setup(t2, {
    emit: k7,
    slots: v3,
    expose: S3
  }) {
    let u9 = null;
    const l17 = ref(null), r12 = ref(null), b2 = ref(2e3), y3 = ref("var(--a-bg-color)"), w7 = ref("bottom"), m14 = ref(false), d8 = ref(t2.visible), g3 = ref({
      left: 0,
      top: 0
    });
    watch(() => t2.visible, (e13) => {
      f11(r12.value.firstElementChild, t2.placement), setTimeout(() => {
        d8.value = e13;
      }, e13 ? 120 : 0);
    });
    const x2 = computed(() => {
      let e13 = "", n3 = "";
      switch (w7.value) {
        case "bottom":
          e13 = "scaleY", n3 = "center top";
          break;
        case "left":
          e13 = "scaleX", n3 = "right";
          break;
        case "top":
          e13 = "scaleY", n3 = "center bottom";
          break;
        case "right":
          e13 = "scaleX", n3 = "left";
          break;
      }
      let a20 = d8.value === null ? m14.value : d8.value;
      return {
        zIndex: b2.value,
        left: g3.value.left + "px",
        top: g3.value.top + "px",
        backgroundColor: y3.value,
        transition: `transform ${a20 ? 0.18 : 0.1}s ease`,
        transform: `${e13}(${a20 ? 1 : 0})`,
        // 面板收起
        transformOrigin: n3,
        width: t2.width,
        minWidth: t2.width || "150px",
        padding: t2.padding
      };
    }), f11 = (e13, n3) => {
      const {
        top: a20,
        left: p11,
        placement: E3
      } = n(e13, l17.value, n3);
      w7.value = E3, g3.value = {
        top: a20,
        left: p11
      };
    }, h12 = o8(() => f11(r12.value.firstElementChild, t2.placement), 0);
    onMounted(() => {
      setTimeout(() => {
        b2.value = r3();
      });
      const e13 = r12.value.firstElementChild;
      t2.trigger === "click" ? (e13.addEventListener("click", i10), onClickOutside(e13, (n3) => {
        var E3;
        const a20 = n3.target, p11 = (E3 = l17.value) == null ? void 0 : E3.contains(a20);
        k7("isClickElementInPopover", p11), a20.className === "a-popover" || p11 || c14();
      })) : t2.trigger === "hover" && (e13.addEventListener("mouseenter", i10), e13.addEventListener("mouseleave", c14), l17.value.addEventListener("mouseenter", i10), l17.value.addEventListener("mouseleave", c14)), f11(r12.value.firstElementChild, t2.placement), window.addEventListener("resize", h12), window.addEventListener("scroll", h12);
    }), onBeforeUnmount(() => {
      const e13 = r12.value.firstElementChild;
      window.removeEventListener("scroll", h12), e13.removeEventListener("mouseenter", i10), e13.removeEventListener("mouseleave", c14), e13.removeEventListener("click", i10), l17.value.removeEventListener("mouseenter", i10), l17.value.removeEventListener("mouseleave", c14);
    });
    const i10 = () => {
      d8.value === null && u9 && (clearTimeout(u9), u9 = null), f11(r12.value.firstElementChild, t2.placement), m14.value = true;
    }, c14 = () => {
      d8.value === null ? u9 = setTimeout(() => {
        m14.value = false, u9 = null;
      }, 250) : m14.value = false;
    }, P = () => v3.reference ? v3.reference() : "", I4 = () => createVNode("div", {
      class: "a-popover-inner-content"
    }, [withDirectives(createVNode("div", {
      class: "title"
    }, [t2.title]), [[vShow, t2.title]]), withDirectives(createVNode("div", {
      class: "content"
    }, [v3.default && v3.default() || t2.content]), [[vShow, v3.default || t2.content]])]);
    return S3({
      showPopover: i10,
      hiddenPopover: c14,
      popoverRef: l17
    }), () => createVNode("div", {
      class: "a-popover-content"
    }, [createVNode("div", {
      class: "a-reference",
      ref: r12
    }, [P()]), createVNode(Teleport, {
      to: "body"
    }, {
      default: () => [createVNode("div", {
        ref: l17,
        class: "a-popover",
        style: x2.value
      }, [I4()])]
    })]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/popover/index.mjs
var r4 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var s6 = r4(j2);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-menu/date-menu.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/component/date-menu/style/index.css";
var a4 = function(t2) {
  return t2.TYPE_YEAR = "year", t2.TYPE_MONTH = "month", t2;
}({});
var c5 = function(t2) {
  return t2.FLAG_ADD = "add", t2.FLAG_DECREASE = "decrease", t2;
}({});
var G = defineComponent({
  name: "ADateMenu",
  props: {
    dateValue: {
      type: String,
      default: ""
    },
    showDateSelect: {
      type: Boolean,
      default: false
    },
    isInputBlur: Boolean,
    showDateSelectFn: Function
  },
  emits: [],
  setup(t2, {
    emit: C5
  }) {
    inject("dateSelectContentKey");
    const D5 = ref(null), d8 = ref(), e13 = reactive({
      currentYear: 0,
      currentMonth: 0,
      currentDate: 0
    });
    watch(() => t2.dateValue, () => {
      u9();
    }), watch(() => t2.isInputBlur, (r12) => {
      u9();
    });
    const u9 = () => {
      const [r12, o18, s27] = l3(t2.dateValue);
      e13.currentYear = r12, e13.currentMonth = o18, e13.currentDate = s27;
    };
    u9();
    const l17 = (r12, o18) => {
      switch (r12) {
        case a4.TYPE_YEAR:
          o18 === c5.FLAG_ADD ? e13.currentYear++ : e13.currentYear--;
          break;
        case a4.TYPE_MONTH:
          if (o18 === c5.FLAG_ADD) {
            if (e13.currentMonth === 12) {
              e13.currentMonth = 1, e13.currentYear++;
              return;
            }
            e13.currentMonth++;
          } else {
            if (e13.currentMonth === 1) {
              e13.currentMonth = 12, e13.currentYear--;
              return;
            }
            e13.currentMonth--;
          }
          break;
      }
    }, Y = () => {
      if (t2.showDateSelect) {
        t2.showDateSelectFn(false);
        return;
      } else
        t2.showDateSelectFn(true);
      const {
        popoverRef: r12
      } = d8.value, o18 = r12.querySelectorAll(".a-scrollbar-container"), s27 = o18[0].querySelector(`.select-year-index-${e13.currentYear}`), v3 = o18[1].querySelector(`.select-month-index-${e13.currentMonth}`);
      o18[0].scrollTo({
        top: s27.offsetTop
      }), o18[1].scrollTo({
        top: v3.offsetTop
      });
    }, M2 = (r12, o18) => {
      r12 === "year" ? e13.currentYear = o18 : e13.currentMonth = o18;
    }, A = (r12) => {
      r12 || t2.showDateSelectFn(false);
    }, h12 = ref(false);
    return setTimeout(() => {
      h12.value = true;
    }), provide("dateState", e13), () => createVNode("div", {
      class: "a-date-menu",
      ref: D5
    }, [createVNode("div", {
      class: "a-date-menu-head"
    }, [createVNode("div", {
      class: "head-left"
    }, [createVNode("span", {
      onClick: () => l17(a4.TYPE_YEAR, c5.FLAG_DECREASE),
      class: "two iconfont icon-doubleleft"
    }, null), createVNode("span", {
      onClick: () => l17(a4.TYPE_MONTH, c5.FLAG_DECREASE),
      class: "one iconfont icon-left1"
    }, null)]), createVNode("div", {
      class: "head-center"
    }, [h12.value && createVNode(s6, {
      onIsClickElementInPopover: (r12) => A(r12),
      ref: d8,
      trigger: "click",
      visible: t2.showDateSelect,
      width: "max-content",
      padding: "0"
    }, {
      reference: () => createVNode("div", {
        onClick: () => Y(),
        tabindex: "1",
        style: {
          backgroundColor: t2.showDateSelect ? "var(--a-bg-hover-color)" : ""
        },
        class: "year-month"
      }, [e13.currentYear, createTextVNode(" "), e13.currentMonth, createTextVNode("月")]),
      default: () => createVNode(o9, {
        updateYearOrMonthFn: M2,
        currentYear: e13.currentYear,
        currentMonth: e13.currentMonth,
        dateValue: t2.dateValue
      }, null)
    })]), createVNode("div", {
      class: "head-right"
    }, [createVNode("span", {
      onClick: () => l17(a4.TYPE_MONTH, c5.FLAG_ADD),
      class: "one iconfont icon-right-copy"
    }, null), createVNode("span", {
      onClick: () => l17(a4.TYPE_YEAR, c5.FLAG_ADD),
      class: "two iconfont icon-doubleright-copy"
    }, null)])]), createVNode("div", {
      class: "a-date-menu-body"
    }, [createVNode(s4, {
      dateValue: t2.dateValue
    }, null)])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/form/form.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/form/style/index.css";
var R = defineComponent({
  name: "AForm",
  props: {
    model: {
      type: Object,
      default: {}
    },
    rules: {
      type: Object,
      default: {}
    }
  },
  emits: ["submit"],
  setup(r12, {
    emit: N2,
    slots: b2,
    expose: v3
  }) {
    let a20 = null;
    const u9 = i2(), f11 = ref(null), g3 = JSON.parse(JSON.stringify(r12.model));
    provide("model", g3), provide("rules", r12.rules), provide("uniKey", u9), onMounted(() => {
      a20 = new IntersectionObserver((n3) => {
        n3[0].isIntersecting && E3();
      }), a20.observe(f11.value);
    }), onUnmounted(() => {
      a20 == null || a20.disconnect(), a20 = null;
    });
    const E3 = () => {
      const n3 = f11.value.querySelectorAll(".a-form-item-label");
      let t2 = 0;
      n3.forEach((l17) => {
        const i10 = d2(l17, "width");
        i10 > t2 && (t2 = i10);
      }), n3.forEach((l17) => {
        l17.style.width = t2 + "px";
      });
    };
    return v3({
      validate: () => new Promise((n3, t2) => {
        let l17 = true;
        const i10 = `change-input-style-${u9}-`;
        Object.keys(r12.rules).forEach((s27) => {
          for (let d8 = 0; d8 < r12.rules[s27].length; d8++) {
            const e13 = r12.rules[s27][d8], m14 = r12.model[s27] + "";
            if (e13.required === true)
              if (m14 === "") {
                c.$emit(i10 + s27, "error", e13.message), t2(e13.message), l17 = false;
                return;
              } else
                c.$emit(i10 + s27);
            if (e13.min || e13.max)
              if (m14.length < e13.min || m14.length > e13.max) {
                c.$emit(i10 + s27, "error", e13.message), t2(e13.message), l17 = false;
                return;
              } else
                c.$emit(i10 + s27);
            e13.validator && typeof e13.validator == "function" && e13.validator(e13, m14, (c14) => {
              if (c14) {
                c.$emit(i10 + s27, "error", c14.message), t2(c14.message), l17 = false;
                return;
              } else
                c.$emit(i10 + s27);
            });
          }
        }), l17 && n3(l17);
      }),
      resetFields: () => {
        const n3 = `reset-input-value-${u9}-`;
        Object.keys(r12.model).forEach((t2) => {
          c.$emit(n3 + t2);
        });
      }
    }), () => createVNode("div", {
      class: "a-form-content",
      ref: f11
    }, [b2.default()]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/form/index.mjs
var a5 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var s7 = a5(R);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/shrink-box/shrink-box.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/shrink-box/style/index.css";
var k = defineComponent({
  name: "AShrinkBox",
  props: {
    shrinkViewSwitch: Function,
    contentID: String,
    zIndex: {
      type: String,
      default: "9999"
    }
  },
  emits: ["shrink"],
  setup(e13, { emit: s27, slots: m14 }) {
    const n3 = ref(null);
    onMounted(() => {
      o18(), e13.shrinkViewSwitch(i10);
    });
    const o18 = () => {
      const t2 = document.getElementById(
        `${e13.contentID}`
      );
      t2 && onClickOutside(t2, () => {
        i10(
          0
          /* COLSE */
        );
      });
    }, i10 = (t2, u9) => {
      n3.value.style.transition = "all 0.2s ease", n3.value.style.transform = `scaleY(${t2})`, s27("shrink", t2);
    };
    return {
      shrinkRef: n3
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/_virtual/_plugin-vue_export-helper.mjs
var s8 = (t2, e13) => {
  const o18 = t2.__vccOpts || t2;
  for (const [r12, c14] of e13)
    o18[r12] = c14;
  return o18;
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/shrink-box/shrink-box.vue.mjs
function a6(e13, f11, l17, c14, p11, d8) {
  return openBlock(), createElementBlock("div", {
    ref: "shrinkRef",
    class: "a-shrink-box",
    style: normalizeStyle(`z-index:${e13.zIndex}`)
  }, [
    renderSlot(e13.$slots, "default")
  ], 4);
}
var k2 = s8(k, [["render", a6]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/shrink-box/index.mjs
var a7 = (n3) => (n3.install = (t2) => {
  const o18 = n3.name;
  t2.component(o18, n3);
}, n3);
var s9 = a7(k2);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/form-item/form-item.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/form-item/style/index.css";
var w2 = defineComponent({
  name: "AFormItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: null
    }
  },
  emits: [],
  setup(t2, {
    emit: S3,
    slots: s27
  }) {
    provide("prop", t2.prop);
    const a20 = inject("model"), l17 = ref("Please enter the content first"), c14 = ref(null), i10 = ref();
    provide("shrinkFormErrorSwitchFn", i10), provide("changeErrorMessage", (r12) => {
      l17.value = r12;
    }), onMounted(() => {
    });
    const m14 = computed(() => Object.keys(a20).includes(t2.prop)), u9 = (r12) => {
      i10.value = r12;
    };
    return () => createVNode("div", {
      class: "a-form-item-content"
    }, [createVNode("label", {
      class: "a-form-item-label",
      ref: c14
    }, [m14.value && createVNode("span", {
      class: "iconfont icon-bitian"
    }, null), t2.label]), createVNode("div", {
      class: "a-form-item-slot"
    }, [s27.default(), createVNode(s9, {
      shrinkViewSwitch: u9,
      zIndex: "0"
    }, {
      default: () => [createVNode("div", {
        class: "a-form-item-error"
      }, [l17.value])]
    })])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/form-item/index.mjs
var r5 = (t2) => (t2.install = (n3) => {
  const e13 = t2.name;
  n3.component(e13, t2);
}, t2);
var m2 = r5(w2);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-input/select-input.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-input/style/index.css";
var y = defineComponent({
  name: "SelectInput",
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    inputValue: {
      type: String
    },
    isSearch: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ""
    }
  },
  emits: ["searchOptions", "blurInitValue", "resetValue"],
  components: {
    AInput: o6
  },
  setup(n3, { emit: t2 }) {
    const u9 = ref(n3.inputValue), s27 = inject("shrinkSelectMenuFn", () => {
    }), r12 = inject("updateInputValue", () => {
    }), l17 = inject("updateLocalValue", () => {
    }), o18 = (e13) => {
      const c14 = e13.target.value;
      t2("searchOptions", c14);
    };
    return watch(
      () => n3.inputValue,
      (e13) => {
        u9.value = e13;
      }
    ), {
      value: u9,
      setValue: () => {
        l17();
      },
      resetValue: (e13) => {
        t2("resetValue", e13);
      },
      searchOptions: o18,
      updateInputValue: r12,
      firstBurlSearch: () => {
        s27(true), t2("searchOptions", "");
      }
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-input/select-input.vue.mjs
var d3 = { class: "a-selector-input" };
function i3(e13, o18, m14, f11, h12, V3) {
  const r12 = resolveComponent("AInput");
  return openBlock(), createElementBlock("div", d3, [
    createVNode(r12, {
      modelValue: e13.value,
      "onUpdate:modelValue": o18[0] || (o18[0] = (n3) => e13.value = n3),
      isSelector: "",
      isSearch: e13.isSearch,
      readonly: !e13.isSearch,
      placeholder: e13.placeholder,
      width: e13.width,
      onInput: e13.searchOptions,
      onFocus: e13.firstBurlSearch,
      onBlur: o18[1] || (o18[1] = (n3) => e13.setValue()),
      onResetValue: e13.resetValue,
      onChange: o18[2] || (o18[2] = (n3) => e13.updateInputValue(n3))
    }, null, 8, ["modelValue", "isSearch", "readonly", "placeholder", "width", "onInput", "onFocus", "onResetValue"])
  ]);
}
var v = s8(y, [["render", i3]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-tip/select-tip.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-tip/style/index.css";
var n2 = defineComponent({
  name: "DataTip",
  components: {},
  directives: {},
  emits: [],
  setup(t2, { emit: o18 }) {
    return {};
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-tip/select-tip.vue.mjs
var c6 = { class: "no-data-tip" };
function a8(n3, p11, s27, u9, i10, _5) {
  return openBlock(), createElementBlock("div", c6, "未找到匹配的内容");
}
var l6 = s8(n2, [["render", a8]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-menu/select-menu.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-menu/style/index.css";
var V = defineComponent({
  name: "SelectorMenu",
  components: {
    NoDataTip: l6
  },
  props: {
    inputValue: String,
    options: {
      type: Array,
      default: () => [
        {
          value: "1",
          text: "选项一"
        },
        {
          value: "2",
          text: "选项二"
        },
        {
          value: "3",
          text: "选项三"
        }
      ]
    },
    localValue: {
      type: String,
      defualt: ""
    },
    searchValue: {
      type: String,
      default: ""
    },
    isSearch: {
      type: Boolean
    }
  },
  emits: ["setItemValue"],
  setup(t2, { emit: n3 }) {
    const a20 = ref([]), o18 = inject("shrinkSelectMenuFn", () => {
    });
    onMounted(() => {
      a20.value = t2.options;
    }), watch(
      () => t2.searchValue,
      (e13) => {
        t2.isSearch && r12(e13);
      },
      { deep: true }
    );
    const r12 = (e13) => {
      if (e13.length === 0) {
        a20.value = t2.options;
        return;
      }
      a20.value = t2.options.filter((u9) => u9.text.toLowerCase().includes(e13.trim().toLowerCase()));
    };
    return {
      setItemValue: (e13) => {
        n3("setItemValue", e13), o18(false);
      },
      searchData: a20
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/component/select-menu/select-menu.vue.mjs
var w3 = { class: "selector-menu" };
var y2 = ["onClick"];
var C2 = { class: "label" };
function V2(e13, a20, b2, g3, A, N2) {
  const c14 = resolveComponent("AIcon"), i10 = resolveComponent("NoDataTip"), m14 = resolveComponent("AScrollbar");
  return openBlock(), createBlock(m14, { style: { "max-height": "215px", "max-width": "223px" } }, {
    default: withCtx(() => [
      createBaseVNode("div", w3, [
        e13.searchData.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e13.searchData, (o18, p11) => (openBlock(), createElementBlock("div", {
          class: normalizeClass(`menu-item ${e13.localValue === o18.text ? "menu-checked" : ""}`),
          onClick: (S3) => e13.setItemValue(o18),
          onMousedown: a20[0] || (a20[0] = () => {
          }),
          key: p11
        }, [
          createBaseVNode("div", C2, toDisplayString(o18 && o18.text), 1),
          withDirectives(createVNode(c14, { name: "select-bold" }, null, 512), [
            [vShow, e13.localValue === o18.text]
          ])
        ], 42, y2))), 128)) : (openBlock(), createBlock(i10, { key: 1 }))
      ])
    ]),
    _: 1
  });
}
var M = s8(V, [["render", V2]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/select.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/style/index.css";
var E = defineComponent({
  name: "ASelect",
  components: {
    SelectorInput: v,
    Menu: M,
    ShrinkBox: s9,
    Popover: j2
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String
    },
    options: {
      type: Array
    },
    isSearch: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "200"
    }
  },
  emits: ["setItemValue", "update:modelValue"],
  setup(l17, { emit: n3 }) {
    const m14 = i2(), V3 = ref(), o18 = ref(false), t2 = reactive({
      inputValue: "",
      searchValue: "",
      localValue: ""
    });
    onBeforeMount(() => {
      i10();
    });
    const f11 = (e13) => {
      var r12;
      const a20 = (r12 = l17.options) == null ? void 0 : r12.find((S3) => S3.value == e13);
      s27(a20);
    }, i10 = () => {
      const e13 = l17.options.find(
        (a20) => a20.value === l17.modelValue
      );
      e13 && (t2.inputValue = e13.text, t2.localValue = e13.text);
    }, d8 = (e13) => {
      o18.value = e13;
    };
    watch(
      () => l17.modelValue,
      () => {
        i10();
      }
    );
    const s27 = (e13) => {
      t2.inputValue = e13.text, t2.localValue = e13.text, n3("update:modelValue", e13.value), n3("setItemValue", e13);
    };
    watch(
      () => t2.inputValue,
      (e13) => {
        e13 === "" && t2.localValue !== "" && setTimeout(() => {
          t2.searchValue = "";
        });
      }
    );
    const h12 = (e13) => {
      t2.searchValue = e13;
    }, v3 = (e13) => {
      e13 || (o18.value = false);
    };
    return provide("shrinkSelectMenuFn", d8), provide("updateInputValue", (e13) => {
      t2.inputValue = e13;
    }), provide("updateLocalValue", async (e13) => {
      t2.inputValue = t2.localValue;
    }), {
      key: m14,
      selectRef: V3,
      setItemValue: s27,
      searchOptions: h12,
      resetValue: f11,
      popoverVisible: o18,
      isClickElementInPopover: v3,
      ...toRefs(t2)
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/select.vue.mjs
var c7 = ["id"];
function h5(e13, V3, d8, m14, f11, S3) {
  const a20 = resolveComponent("SelectorInput"), r12 = resolveComponent("Menu"), t2 = resolveComponent("Popover");
  return openBlock(), createElementBlock("div", {
    class: "a-selector",
    id: e13.key,
    ref: "selectRef"
  }, [
    createVNode(t2, {
      visible: e13.popoverVisible,
      padding: "0",
      trigger: "click",
      width: Number(e13.width) + 25 + "px",
      onIsClickElementInPopover: e13.isClickElementInPopover
    }, {
      reference: withCtx(() => [
        createVNode(a20, {
          placeholder: e13.placeholder,
          inputValue: e13.inputValue,
          localValue: e13.localValue,
          isSearch: e13.isSearch,
          width: e13.width,
          onSearchOptions: e13.searchOptions,
          onResetValue: e13.resetValue
        }, null, 8, ["placeholder", "inputValue", "localValue", "isSearch", "width", "onSearchOptions", "onResetValue"])
      ]),
      default: withCtx(() => [
        createVNode(r12, {
          onSetItemValue: e13.setItemValue,
          options: e13.options,
          searchValue: e13.searchValue,
          inputValue: e13.inputValue,
          localValue: e13.localValue,
          isSearch: e13.isSearch
        }, null, 8, ["onSetItemValue", "options", "searchValue", "inputValue", "localValue", "isSearch"])
      ]),
      _: 1
    }, 8, ["visible", "width", "onIsClickElementInPopover"])
  ], 8, c7);
}
var w4 = s8(E, [["render", h5]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/select/index.mjs
var s10 = (t2) => (t2.install = (e13) => {
  const n3 = t2.name;
  e13.component(n3, t2);
}, t2);
var o10 = s10(w4);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/menu/menu.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/menu/style/index.css";
var p3 = defineComponent({
  name: "AMenu",
  props: {
    defaultActive: {
      type: String,
      default: ""
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup(e13, {
    emit: s27,
    slots: r12
  }) {
    const t2 = ref(e13.defaultActive), n3 = ref(true), d8 = (u9) => {
      u9 !== t2.value && (t2.value = u9);
    }, c14 = computed(() => ({
      backgroundColor: e13.dark ? "#001428" : "var(--a-bg-color)",
      overflow: (n3.value, "overlay")
    }));
    return provide("default-active", t2), provide("dark", e13.dark), provide("updateDefaultValue", d8), () => createVNode("nav", {
      class: "a-menu-content",
      style: c14.value
    }, [createVNode("div", {
      class: "a-menu-item-list"
    }, [r12.default()])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/menu/index.mjs
var s11 = (n3) => (n3.install = (t2) => {
  const e13 = n3.name;
  t2.component(e13, n3);
}, n3);
var o11 = s11(p3);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/menu-item/menu-item.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/menu-item/style/index.css";
var E2 = defineComponent({
  name: "AMenuItem",
  props: {
    index: {
      type: String,
      default: null
    },
    disable: {
      type: Boolean,
      default: false
    },
    route: Object
  },
  setup(l17, {
    emit: I4,
    slots: n3
  }) {
    const r12 = inject("default-active"), s27 = inject("dark"), o18 = inject("updateDefaultValue"), d8 = computed(() => r12.value === l17.index), a20 = ref(null), m14 = ref(false);
    onMounted(() => {
      nextTick(() => {
        f11();
      });
    }), watch(() => r12.value, (e13) => {
    }, {
      deep: true
    });
    const f11 = () => {
      var t2;
      const e13 = a20.value.parentElement;
      if (p11()) {
        m14.value = true;
        const g3 = (t2 = e13 == null ? void 0 : e13.parentElement) == null ? void 0 : t2.querySelector(".a-sub-item");
        a20.value.style.paddingLeft = d2(g3, "padding-left") + 22 + "px";
      }
    }, p11 = () => {
      const t2 = a20.value.parentElement.getAttribute("slot");
      return !!(t2 && t2 === "sub");
    }, v3 = () => d8.value ? s27 ? "active-dark" : "active-light" : "", b2 = () => s27 ? "a-menu-item-dark" : "a-menu-item-light";
    return () => createVNode("div", {
      ref: a20,
      class: `a-menu-item ${b2()} ${v3()}`,
      onClick: () => o18(l17.index)
    }, [createVNode("div", {
      class: "item-icon"
    }, [n3.icon && n3.icon()]), createVNode("div", {
      class: "item-title"
    }, [n3.default && n3.default()])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/menu-item/index.mjs
var s12 = (t2) => (t2.install = (n3) => {
  const e13 = t2.name;
  n3.component(e13, t2);
}, t2);
var m3 = s12(E2);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/sub-menu/sub-menu.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/sub-menu/style/index.css";
var T = defineComponent({
  name: "ASubMenu",
  props: {
    index: {
      type: String,
      default: ""
    }
  },
  setup(R5, {
    emit: D5,
    slots: n3
  }) {
    const g3 = getCurrentInstance(), c14 = inject("dark"), v3 = inject("default-active"), f11 = ref(null), t2 = ref(null), s27 = ref(null), p11 = ref(null), a20 = ref(0), r12 = ref(false);
    onMounted(() => {
      a20.value = t2.value.offsetHeight, t2.value.style.height = "0px", y3(), x2();
    }), watch(() => v3.value, () => {
      d8() ? s27.value.style.color = c14 ? "#FFFFFF" : "var(--a-primary-color)" : s27.value.style.color = "";
    });
    const y3 = () => {
      var l17;
      const e13 = f11.value.parentElement, o18 = e13.getAttribute("slot");
      if (o18 && o18 === "sub") {
        const S3 = (l17 = e13 == null ? void 0 : e13.parentElement) == null ? void 0 : l17.querySelector(".a-sub-item");
        s27.value.style.paddingLeft = d2(S3, "padding-left") + 22 + "px";
      }
    }, b2 = () => {
      const e13 = f11.value.parentElement;
      e13.style.transition = "height 0.25s ease", t2.value.style.height === "0px" ? (t2.value.style.height = a20.value + "px", e13.style.height = e13.offsetHeight + a20.value + "px", r12.value = true) : (a20.value = t2.value.scrollHeight, t2.value.style.height = "0px", e13.style.height = e13.offsetHeight - a20.value + "px", r12.value = false);
    }, d8 = () => {
      const e13 = [];
      return h12(e13, g3.slots.default), e13.includes(v3.value);
    }, h12 = (e13, o18) => {
      o18 && o18().forEach((l17) => {
        l17.children.default && h12(e13, l17.children.default), l17.props && e13.push(l17.props.index);
      });
    }, x2 = () => {
      d8() && (s27.value.style.color = c14 ? "#FFFFFF" : "var(--a-primary-color)", r12.value = true, t2.value.style.height = a20.value + "px"), nextTick(() => {
        p11.value.style.transition = "transform 0.2s ease", s27.value.style.transition = "color 0.2s ease";
      });
    }, F3 = () => c14 ? "a-sub-item-dark" : "a-sub-item-light";
    return () => createVNode("div", {
      class: "a-sub-menu-content",
      ref: f11
    }, [createVNode("div", {
      ref: s27,
      class: `a-sub-item ${F3()}`,
      onClick: () => b2()
    }, [createVNode("div", {
      class: "item-icon"
    }, [n3.icon && n3.icon()]), createVNode("div", {
      class: "item-title"
    }, [n3.title && n3.title()]), createVNode("div", {
      ref: p11,
      class: `item-right-icon iconfont icon-right ${r12.value ? "open" : "close"}`
    }, null)]), createVNode("div", {
      ref: t2,
      class: "a-sub-slot",
      slot: "sub"
    }, [n3.default && n3.default()])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/sub-menu/index.mjs
var a9 = (n3) => (n3.install = (t2) => {
  const e13 = n3.name;
  t2.component(e13, n3);
}, n3);
var l7 = a9(T);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/transition/transition.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/transition/style/index.css";
var s13 = defineComponent({
  name: "ATransition",
  setup(i10, {
    slots: n3
  }) {
    return () => createVNode(Transition, {
      name: "a-transition-fade"
    }, {
      default: () => [n3.default && n3.default()]
    });
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/drawer/drawer.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/drawer/style/index.css";
var H = defineComponent({
  name: "ADrawer",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    size: {
      type: [Number, String],
      default: "30%"
    },
    title: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "right"
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    beforeClose: {
      type: Function
    }
  },
  emits: ["update:modelValue", "opened", "closed"],
  setup(e13, {
    emit: r12,
    slots: a20
  }) {
    const u9 = ref(2e3), m14 = ["top", "bottom", "left", "right"], d8 = computed(() => typeof e13.size == "number" ? e13.size + "px" : e13.size), l17 = ref(e13.modelValue ? "0" : `-${d8.value}`), v3 = computed(() => m14.find((o18) => o18 === e13.direction) || "right"), i10 = computed(() => e13.direction === "left" || e13.direction === "right" ? "width" : "height");
    onMounted(() => {
      setTimeout(() => {
        u9.value = r3();
      });
    }), watch(() => e13.modelValue, (o18) => {
      const C5 = l17.value;
      o18 ? (document.body.style.overflow = "hidden", setTimeout(() => {
        l17.value = "0", r12("opened");
      }, 50)) : (l17.value = C5, r12("closed"), document.body.style.removeProperty("overflow"));
    });
    const c14 = () => {
      l17.value = "-" + d8.value, setTimeout(() => {
        r12("update:modelValue", !e13.modelValue);
      }, 180);
    }, s27 = () => {
      if (typeof e13.beforeClose == "function") {
        e13.beforeClose(c14);
        return;
      } else
        c14();
    }, h12 = () => {
      e13.closeOnClickModal && s27();
    }, w7 = () => a20.header ? a20.header() : createVNode("span", null, [e13.title]), y3 = () => createVNode("div", {
      class: "a-drawer-header"
    }, [createVNode("div", {
      class: "a-drawer-header-content"
    }, [createVNode("div", {
      class: "header-slot"
    }, [w7()]), createVNode("span", {
      onClick: () => s27(),
      class: "iconfont icon-close"
    }, null)])]), g3 = computed(() => {
      const o18 = i10.value === "height" ? "width" : "height";
      return {
        [i10.value]: d8.value,
        [v3.value]: l17.value,
        [`min-${o18}`]: `100v${i10.value === "height" ? "w" : "h"}`
      };
    });
    return () => createVNode(Teleport, {
      to: "body"
    }, {
      default: () => [createVNode(s13, null, {
        default: () => [e13.modelValue && createVNode("div", {
          class: "a-drawer-mantle",
          style: {
            zIndex: u9.value
          },
          onClick: () => h12()
        }, [createVNode("div", {
          onClick: (o18) => o18.stopPropagation(),
          class: "a-drawer-content",
          style: g3.value
        }, [y3(), createVNode("div", {
          class: "a-drawer-body"
        }, [a20.default && a20.default()]), a20.footer && createVNode("div", {
          class: "a-drawer-footer"
        }, [a20.footer()])])])]
      })]
    });
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/drawer/index.mjs
var e4 = (t2) => (t2.install = (n3) => {
  const r12 = t2.name;
  n3.component(r12, t2);
}, t2);
var l8 = e4(H);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox/checkbox.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox/style/index.css";
var k3 = defineComponent({
  name: "ACheckbox",
  props: {
    modelValue: {
      type: [Array, Boolean],
      default: []
    },
    defaultValue: {
      type: [Array, Boolean]
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    stopLabelTrigger: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "update:modelValue",
    "updateCheckedGroup",
    "tree-checked",
    "updateDefaultValue",
    "label-click"
  ],
  setup(e13, { emit: a20 }) {
    const d8 = getCurrentInstance(), n3 = ref(""), l17 = ref(false);
    return onBeforeMount(() => {
      if (d8.slots.default && (n3.value = d8.slots.default()[0].children), e13.defaultValue) {
        l17.value = e13.defaultValue;
        return;
      }
      Array.isArray(e13.modelValue) ? l17.value = e13.modelValue.indexOf(e13.value) !== -1 : l17.value = e13.modelValue;
    }), watch(
      () => e13.defaultValue,
      (u9) => {
        l17.value = u9;
      }
    ), {
      valueSlot: n3,
      checked: l17,
      changeChecked: (u9) => {
        if (l17.value = !l17.value, a20("tree-checked"), a20("updateDefaultValue", l17.value), typeof e13.modelValue == "boolean")
          a20("update:modelValue", l17.value);
        else {
          let t2 = [];
          l17.value ? t2 = [.../* @__PURE__ */ new Set([...e13.modelValue, e13.value])] : (t2 = e13.modelValue, e13.modelValue.includes(e13.value) && (t2 = t2.filter(
            (o18) => o18 !== e13.value
          ))), a20("updateCheckedGroup", t2);
        }
      },
      handleLabelClick: (u9) => {
        e13.stopLabelTrigger && (a20("label-click", u9.target), u9.preventDefault());
      }
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox/checkbox.vue.mjs
var c8 = { class: "a-checked-main" };
var h6 = ["indeterminate", "id", "checked", "disabled"];
var k4 = ["for"];
function m4(e13, n3, p11, f11, b2, u9) {
  return openBlock(), createElementBlock("div", c8, [
    createBaseVNode("input", {
      indeterminate: e13.indeterminate,
      onChange: n3[0] || (n3[0] = (...o18) => e13.changeChecked && e13.changeChecked(...o18)),
      class: normalizeClass(e13.disabled && e13.checked ? "checked" : ""),
      id: e13.valueSlot,
      type: "checkbox",
      checked: e13.checked,
      disabled: e13.disabled
    }, null, 42, h6),
    createBaseVNode("label", { for: e13.valueSlot }, [
      createBaseVNode("span", {
        onClick: n3[1] || (n3[1] = (...o18) => e13.handleLabelClick && e13.handleLabelClick(...o18)),
        style: { "margin-left": "3px" }
      }, toDisplayString(e13.valueSlot), 1)
    ], 8, k4)
  ]);
}
var S = s8(k3, [["render", m4]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox/index.mjs
var a10 = (t2) => (t2.install = (n3) => {
  const e13 = t2.name;
  n3.component(e13, t2);
}, t2);
var l9 = a10(S);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox-group/checkbox-group.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox-group/style/index.css";
var f2 = defineComponent({
  name: "ACheckboxGroup",
  components: {
    ACheckbox: l9
  },
  props: {
    modelValue: {
      type: Array,
      default: []
    },
    options: {
      type: Array,
      default: []
    }
  },
  emits: ["update:modelValue", "change"],
  setup(u9, { emit: o18 }) {
    return {
      ChangeValue: (e13) => {
        let a20 = [...u9.modelValue];
        a20.indexOf(e13.value) === -1 ? a20.push(e13.value) : a20 = a20.filter((l17) => l17 !== e13.value), o18("update:modelValue", a20), o18("change", e13);
      },
      updateCheckedGroup: (e13) => {
        o18("update:modelValue", e13);
      }
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox-group/checkbox-group.vue.mjs
var h7 = { class: "a-checkbox-group" };
function C3(e13, t2, _5, V3, v3, x2) {
  const a20 = resolveComponent("ACheckbox");
  return openBlock(), createElementBlock("div", h7, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(e13.options, (o18, d8) => (openBlock(), createBlock(a20, {
      key: d8,
      value: o18.value,
      disabled: o18.disabled,
      modelValue: e13.modelValue,
      "onUpdate:modelValue": t2[0] || (t2[0] = (n3) => e13.modelValue = n3),
      onUpdateCheckedGroup: e13.updateCheckedGroup
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(o18.label), 1)
      ]),
      _: 2
    }, 1032, ["value", "disabled", "modelValue", "onUpdateCheckedGroup"]))), 128))
  ]);
}
var B = s8(f2, [["render", C3]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/checkbox-group/index.mjs
var r6 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var s14 = r6(B);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/switch/switch.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/switch/style/index.css";
var c9 = defineComponent({
  name: "ASwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    openTitle: {
      type: String,
      default: ""
    },
    offTitle: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(s27, { emit: t2 }) {
    return {
      test: "是",
      uuid: Date.now() + Math.random() + "",
      switchChange: (e13) => {
        const a20 = e13.target;
        t2("update:modelValue", a20.checked);
      },
      getSwitchSize: (e13) => {
        switch (e13) {
          case "small":
            return "size-small";
          case "default":
            return "size-default";
          case "large":
            return "size-large";
          default:
            return "size-default";
        }
      }
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/switch/switch.vue.mjs
var a11 = { class: "switch-content" };
var p4 = ["id", "checked", "disabled"];
var f3 = ["openTitle", "offTitle", "for"];
function c10(e13, o18, u9, h12, m14, b2) {
  return openBlock(), createElementBlock("div", a11, [
    createBaseVNode("input", {
      type: "checkbox",
      onClick: o18[0] || (o18[0] = (...l17) => e13.switchChange && e13.switchChange(...l17)),
      id: e13.uuid,
      checked: e13.modelValue,
      disabled: e13.disabled,
      hidden: ""
    }, null, 8, p4),
    createBaseVNode("label", {
      style: normalizeStyle(`cursor: ${e13.disabled ? "not-allowed" : "pointer"};opacity:${e13.disabled && e13.modelValue ? "0.5" : "1"}`),
      openTitle: e13.openTitle,
      offTitle: e13.offTitle,
      for: e13.uuid
    }, null, 12, f3)
  ]);
}
var w5 = s8(c9, [["render", c10]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/switch/index.mjs
var e5 = (t2) => (t2.install = (n3) => {
  const s27 = t2.name;
  n3.component(s27, t2);
}, t2);
var l10 = e5(w5);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tag/tag.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tag/style/index.css";
var f4 = defineComponent({
  name: "ATag",
  props: {
    type: {
      type: String,
      default: "default"
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["closeEvent"],
  setup(r12, { emit: a20 }) {
    const e13 = ref(false);
    return {
      mouseEnter: ref(false),
      closeTag: () => {
        a20("closeEvent"), e13.value = true;
      },
      getTagType: (s27) => {
        switch (s27) {
          case "success":
            return "tag-success";
          case "info":
            return "tag-info";
          case "danger":
            return "tag-danger";
          case "warning":
            return "tag-warning";
          default:
            return "tag-default";
        }
      },
      Closeable: e13
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tag/tag.vue.mjs
function d4(e13, o18, f11, $3, g3, y3) {
  return e13.Closeable ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
    key: 0,
    style: normalizeStyle(`padding-right:${e13.closeable ? "20px" : "9px"};`),
    class: normalizeClass(`tag ${e13.getTagType(e13.type)}`)
  }, [
    renderSlot(e13.$slots, "default"),
    e13.closeable ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`close-content ${e13.mouseEnter && `close-${e13.type}`}`),
      onMouseleave: o18[1] || (o18[1] = (s27) => e13.mouseEnter = false),
      onMouseenter: o18[2] || (o18[2] = (s27) => e13.mouseEnter = true)
    }, [
      e13.closeable ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: "iconfont icon-close",
        onClick: o18[0] || (o18[0] = withModifiers((...s27) => e13.closeTag && e13.closeTag(...s27), ["stop"]))
      })) : createCommentVNode("", true)
    ], 34)) : createCommentVNode("", true)
  ], 6));
}
var C4 = s8(f4, [["render", d4]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tag/index.mjs
var s15 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var o12 = s15(C4);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/loading/loading.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/loading/style/index.css";
var k5 = defineComponent({
  name: "ALoading",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    global: {
      type: Boolean,
      default: true
    }
  },
  emits: [],
  setup(l17, {
    emit: w7,
    slots: t2
  }) {
    const f11 = new Array(6).fill(NaN), e13 = computed(() => l17.global && (!t2.default || typeof t2.default != "function")), c14 = computed(() => !e13.value && l17.modelValue), n3 = ref(null), r12 = ref(false);
    watch(() => l17.modelValue, (o18) => {
      v3(o18);
    });
    const v3 = (o18) => {
      o18 ? (n3.value.style.opacity = "1", e13.value && (document.body.style.overflow = "hidden")) : (e13.value && (n3.value.style.opacity = "0"), document.body.style.removeProperty("overflow")), setTimeout(() => {
        r12.value = o18;
      }, o18 ? 0 : 500);
    }, m14 = computed(() => ({
      position: e13.value ? "relative" : "absolute",
      left: e13.value ? "0" : "40%",
      zIndex: e13.value ? 9999 : 101
    })), y3 = () => withDirectives(createVNode("div", {
      class: "a-loading-content",
      style: m14.value
    }, [createVNode("div", {
      class: "a-chase"
    }, [f11.map(() => createVNode("div", {
      class: "a-chase-dot"
    }, null))]), createVNode("div", {
      class: "a-title"
    }, [l17.title])]), [[vShow, l17.modelValue]]);
    return () => createVNode(s13, null, {
      default: () => [withDirectives(createVNode("div", {
        ref: n3,
        class: `a-loading ${e13.value && "a-global"}`,
        style: {
          position: e13.value ? "fixed" : "relative"
        }
      }, [y3(), createVNode("div", {
        class: "a-loading-slot"
      }, [t2.default && t2.default()]), c14.value && createVNode("div", {
        class: "a-loading-mask"
      }, null)]), [[vShow, e13.value ? !!l17.modelValue : !!(t2.default && typeof t2.default == "function")]])]
    });
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/loading/index.mjs
var e6 = (n3) => (n3.install = (t2) => {
  const a20 = n3.name;
  t2.component(a20, n3);
}, n3);
var i4 = e6(k5);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/input-number/input-number.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/input-number/style/index.css";
var x = defineComponent({
  name: "AInputNumber",
  props: {
    modelValue: [Number, String],
    min: {
      type: Number,
      default: -1 / 0
    },
    max: {
      type: Number,
      default: 1 / 0
    },
    step: {
      type: Number,
      default: 1
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 150
    }
  },
  emits: ["update:modelValue"],
  setup(e13, {
    emit: i10
  }) {
    const u9 = reactive({
      numberValue: e13.modelValue
    });
    watch(() => e13.modelValue, (n3) => {
      u9.numberValue = n3;
    });
    const l17 = computed(() => ({
      pointerEvents: "none",
      cursor: "not-allowed",
      color: "#e4e5e6"
    })), d8 = () => createVNode(Fragment, null, [createVNode("div", {
      style: e13.disabled ? l17.value : "",
      onClick: () => a20("add"),
      class: "add-button"
    }, [createVNode("span", {
      class: "iconfont icon-jia"
    }, null)]), createVNode("div", {
      style: e13.disabled ? l17.value : "",
      onClick: () => a20("subtract"),
      class: "subtract-button"
    }, [createVNode("span", {
      class: "iconfont icon-jian"
    }, null)])]);
    watch(() => u9.numberValue, (n3) => {
      Number(n3) >= e13.max && e13.max !== 1 / 0 ? u9.numberValue = e13.max : Number(n3) <= e13.min && e13.min !== -1 / 0 && (u9.numberValue = e13.min), i10("update:modelValue", u9.numberValue);
    });
    const a20 = (n3) => {
      if (!e13.readonly)
        if (n3 === "add") {
          if (!u9.numberValue) {
            u9.numberValue = e13.step;
            return;
          }
          u9.numberValue += e13.step;
        } else {
          if (!u9.numberValue) {
            u9.numberValue = -e13.step;
            return;
          }
          u9.numberValue -= e13.step;
        }
    }, r12 = () => {
      Number(u9.numberValue) >= e13.max ? (u9.numberValue = "", setTimeout(() => {
        u9.numberValue = e13.max;
      })) : Number(u9.numberValue) <= e13.min && (u9.numberValue = "", setTimeout(() => {
        u9.numberValue = e13.min;
      }));
    };
    return () => createVNode("div", {
      class: "a-input-number-content"
    }, [d8(), createVNode(o6, {
      onBlur: () => r12(),
      placeholder: e13.placeholder,
      readonly: e13.readonly,
      disabled: e13.disabled,
      textCenter: true,
      width: e13.width,
      modelValue: u9.numberValue,
      "onUpdate:modelValue": (n3) => u9.numberValue = n3,
      type: "number"
    }, null)]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/input-number/index.mjs
var a12 = (t2) => (t2.install = (n3) => {
  const e13 = t2.name;
  n3.component(e13, t2);
}, t2);
var u2 = a12(x);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tree/component/tree-item/tree-item.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tree/component/tree-item/style/index.css";
var $ = { open: "caret-down", close: "caret-right" };
var U = defineComponent({
  name: "ATreeItem",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "title",
        key: "id"
      })
    }
  },
  emits: ["checkedItem"],
  components: {
    ACheckBox: l9
  },
  setup(p11, { emit: b2 }) {
    const a20 = inject("uniKey"), k7 = i2(), y3 = inject("node-key"), g3 = reactive(p11.data), f11 = inject("tree-data"), o18 = reactive({
      carets: $,
      tapScopes: {},
      scopes: {},
      height: 0
    });
    onBeforeMount(() => {
    }), onMounted(() => {
    });
    const S3 = (e13, c14, n3) => {
      r12(e13, c14), c.$emit("checked" + a20, e13, n3);
    }, r12 = (e13, c14) => {
      e13.checked = c14, e13.checked ? e13.children && e13.children.length > 0 && e13.children.forEach((n3) => {
        r12(n3, true);
      }) : e13.children && e13.children.length > 0 && e13.children.forEach((n3) => {
        r12(n3, false);
      }), l17(f11, e13, e13.checked);
    }, l17 = (e13, c14, n3) => {
      e13.forEach((t2) => {
        if (t2.key === c14.pid) {
          let i10 = false;
          t2.children && (i10 = t2.children.some(
            (s27) => s27.checked === false
          )), i10 ? (t2.checked = false, t2.children.some(
            (s27) => s27.checked === true || s27.indeterminate === true
          ) ? t2.indeterminate = true : t2.indeterminate = false) : (t2.checked = n3, t2.indeterminate = false), l17(f11, t2, t2.checked);
        }
        t2.children && l17(t2.children, c14, n3);
      });
    };
    return {
      treeData: g3,
      uniKey: a20,
      nodeKey: y3,
      state: o18,
      operation: (e13, c14) => {
        c.$emit("operation" + a20, { type: e13, treeNode: c14 });
      },
      tap: (e13, c14) => {
        c.$emit("node-click" + a20, e13);
      },
      changeStatus: (e13, c14) => {
        const n3 = e13.target;
        ["LABEL", "INPUT"].includes(n3.nodeName) || (c.$emit("change" + a20, p11.data[c14]), o18.tapScopes[c14] = o18.tapScopes[c14] && o18.tapScopes[c14] === "open" ? "close" : "open", o18.scopes[c14] = !o18.scopes[c14]);
      },
      uid: k7,
      updateDefaultValue: r12,
      checkedTreeItem: S3
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tree/component/tree-item/tree-item.vue.mjs
var $2 = { class: "a-tree-menu" };
var g2 = ["node-key"];
var b = ["onClick"];
var B2 = ["onClick"];
var D3 = ["onClick"];
function w6(e13, L2, N2, T2, V3, z) {
  const p11 = resolveComponent("ACheckBox"), d8 = resolveComponent("a-tree-item");
  return openBlock(), createElementBlock("div", $2, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(e13.treeData, (t2, o18) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`a-tree-list tree-ref-${e13.uid}`),
      ref_for: true,
      ref: "treeRef",
      "node-key": t2[e13.nodeKey],
      key: t2[e13.props.key]
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["a-tree-item", ["treeNode", { "treeNode--select": t2.onSelect }]]),
        onClick: (r12) => e13.changeStatus(r12, o18)
      }, [
        withDirectives(createBaseVNode("i", {
          class: normalizeClass([
            "iconfont icon-tree-retract",
            e13.state.carets[e13.state.tapScopes[o18]]
          ])
        }, null, 2), [
          [vShow, t2[e13.props.children]]
        ]),
        e13.isSelect ? (openBlock(), createBlock(p11, {
          key: 0,
          stopLabelTrigger: true,
          style: { "margin-left": "5px" },
          "default-value": t2.checked,
          indeterminate: t2.indeterminate,
          onUpdateDefaultValue: (r12) => {
            e13.checkedTreeItem(t2, r12, o18);
          },
          onLabelClick: (r12) => e13.tap(t2, o18)
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              onClick: (r12) => e13.tap(t2, o18),
              class: "title"
            }, toDisplayString(t2[e13.props.label]), 9, B2)
          ]),
          _: 2
        }, 1032, ["default-value", "indeterminate", "onUpdateDefaultValue", "onLabelClick"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          onClick: (r12) => e13.tap(t2, o18)
        }, toDisplayString(t2[e13.props.label]), 9, D3))
      ], 10, b),
      createBaseVNode("div", {
        class: "a-tree-item-content",
        style: normalizeStyle({ gridTemplateRows: e13.state.scopes[o18] ? "1fr" : "0fr" })
      }, [
        createVNode(d8, {
          isSelect: e13.isSelect,
          data: t2[e13.props.children]
        }, null, 8, ["isSelect", "data"])
      ], 4)
    ], 10, g2))), 128))
  ]);
}
var R2 = s8(U, [["render", w6]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tree/tree.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tree/style/index.css";
var _ = defineComponent({
  name: "ATree",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "title",
        key: "id"
      })
    },
    nodeKey: {
      type: String,
      default: ""
    },
    defaultCheckedKeys: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TreeItem: R2
  },
  emits: [
    "update:defaultCheckedKeys",
    "operation",
    "node-click",
    "change",
    "checked"
  ],
  setup(c14, { emit: o18 }) {
    const f11 = i2(), i10 = reactive(c3(c14.data)), u9 = c14.data[0].key, s27 = (n3, t2, h12) => {
      n3.forEach((d8) => {
        if (d8.key === t2.pid) {
          let l17 = false;
          d8.children && (l17 = d8.children.some((e13) => e13.checked === false)), l17 ? (d8.checked = false, d8.children.some((e13) => e13.checked === true || e13.indeterminate === true) ? d8.indeterminate = true : d8.indeterminate = false) : (d8.checked = h12, d8.indeterminate = false), s27(i10, d8, d8.checked);
        }
        d8.children && s27(d8.children, t2, h12);
      });
    }, k7 = (n3, t2 = false, h12 = null) => {
      for (let d8 = 0; d8 < n3.length; d8++) {
        let l17 = t2;
        const e13 = n3[d8];
        e13.checked = false, e13.pid = h12, e13.expand = c14.expand, e13.indeterminate = false, l17 ? e13.checked = true : c14.defaultCheckedKeys.includes(e13.key) ? (e13.checked = true, l17 = true) : e13.children && e13.children.some((C5) => c14.defaultCheckedKeys.includes(C5.key)) && (e13.checked = false), e13.children && k7(e13.children, l17, e13.key), s27(i10, e13, e13.checked);
      }
    };
    k7(i10), onBeforeMount(() => {
      y3();
    }), onBeforeUnmount(() => {
      c.$off("operation"), c.$off("node-click"), c.$off("change"), c.$off("checked");
    });
    const y3 = () => {
      c.$on("operation" + f11, ({ type: n3, treeNode: t2 }) => {
        o18("operation", { type: n3, treeNode: t2 });
      }), c.$on("node-click" + f11, (n3) => {
        o18("node-click", n3);
      }), c.$on("change" + f11, (n3) => {
        o18("change", n3);
      }), c.$on("checked" + f11, (n3) => {
        o18("checked", n3);
      });
    }, p11 = (n3) => {
      if (n3[0].key !== u9)
        return;
      let t2 = c14.defaultCheckedKeys;
      k7(n3), o18("update:defaultCheckedKeys", t2);
    };
    return provide("uniKey", f11), provide("default-checked-keys", c14.defaultCheckedKeys), provide("node-key", c14.nodeKey), provide("tree-data", i10), provide("expand", c14.expand), {
      treeData: i10,
      checkedItem: p11
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tree/tree.vue.mjs
function s16(e13, c14, m14, d8, i10, l17) {
  const o18 = resolveComponent("TreeItem");
  return openBlock(), createBlock(o18, {
    data: e13.treeData,
    isSelect: e13.isSelect,
    props: e13.props,
    expand: e13.expand,
    onCheckedItem: e13.checkedItem
  }, null, 8, ["data", "isSelect", "props", "expand", "onCheckedItem"]);
}
var u3 = s8(_, [["render", s16]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tree/index.mjs
var a13 = (t2) => (t2.install = (e13) => {
  const n3 = t2.name;
  e13.component(n3, t2);
}, t2);
var l11 = a13(u3);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio/radio.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio/style/index.css";
var h8 = defineComponent({
  props: {
    modelValue: {
      type: Number
    },
    value: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["updateRadioValue"],
  setup(e13, { emit: u9 }) {
    const n3 = inject("modelValue"), o18 = getCurrentInstance(), t2 = ref(""), a20 = ref(false);
    return onBeforeMount(() => {
      a20.value = n3 === e13.value, t2.value = o18.slots.default()[0].children;
    }), watch(
      () => e13.modelValue,
      () => {
        a20.value = e13.modelValue === e13.value;
      },
      { deep: true }
    ), {
      isChecked: a20,
      valueSlot: t2,
      changeChecked: () => {
        u9("updateRadioValue", e13.value);
      }
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio/radio.vue.mjs
var c11 = { class: "radio-main" };
var p5 = ["id", "checked", "value", "disabled"];
var m5 = ["for"];
var u4 = { style: { "margin-left": "3px" } };
function h9(e13, a20, f11, k7, v3, C5) {
  return openBlock(), createElementBlock("div", c11, [
    createBaseVNode("input", {
      class: normalizeClass(e13.disabled && e13.isChecked ? "checked" : ""),
      type: "radio",
      onClick: a20[0] || (a20[0] = (...l17) => e13.changeChecked && e13.changeChecked(...l17)),
      id: e13.valueSlot,
      name: "radio",
      checked: e13.isChecked,
      value: e13.value,
      disabled: e13.disabled
    }, null, 10, p5),
    createBaseVNode("label", { for: e13.valueSlot }, [
      createBaseVNode("span", u4, toDisplayString(e13.valueSlot && e13.valueSlot), 1)
    ], 8, m5)
  ]);
}
var _2 = s8(h8, [["render", h9]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio/index.mjs
var e7 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var i5 = e7(_2);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio-group/radio-group.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio-group/style/index.css";
var l12 = defineComponent({
  name: "ARadioGroup",
  props: {
    modelValue: {
      type: [Number, String]
    },
    options: {
      type: Array,
      default: []
    }
  },
  components: {
    ARadio: i5
  },
  emits: ["update:modelValue", "change"],
  setup(a20, { emit: e13 }) {
    const t2 = (o18) => {
      e13("update:modelValue", o18), e13("change", o18);
    };
    return provide("modelValue", a20.modelValue), {
      updateRadioValue: t2
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio-group/radio-group.vue.mjs
var m6 = { class: "a-radio-group" };
function R3(a20, v3, b2, k7, V3, $3) {
  const r12 = resolveComponent("ARadio");
  return openBlock(), createElementBlock("div", m6, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(a20.options, (e13, d8) => (openBlock(), createBlock(r12, {
      key: d8,
      value: e13.value,
      disabled: e13.disabled,
      onUpdateRadioValue: a20.updateRadioValue
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(e13.label), 1)
      ]),
      _: 2
    }, 1032, ["value", "disabled", "onUpdateRadioValue"]))), 128))
  ]);
}
var B3 = s8(l12, [["render", R3]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/radio-group/index.mjs
var r7 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var s17 = r7(B3);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/table/table.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/table/style/index.css";

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/component/rotation-dot/rotation-dot.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/component/rotation-dot/style/index.css";
var i6 = defineComponent({
  name: "ADot",
  props: {
    dotLength: {
      type: Number
    },
    currentIndex: {
      type: Number
    },
    dotBgColor: {
      type: String,
      default: "#666"
    },
    hasDot: {
      type: Boolean
    },
    dotPositon: {
      type: String,
      default: "center"
    }
  },
  emits: ["dotClick"],
  setup(n3, { emit: t2 }) {
    return {
      dotClick: (o18) => {
        t2("dotClick", o18);
      }
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/component/rotation-dot/rotation-dot.vue.mjs
var p6 = ["onClick"];
var f5 = createBaseVNode("a", {
  href: "javascript:;",
  class: "dot-link"
}, null, -1);
var u5 = [
  f5
];
function k6(e13, _5, h12, C5, $3, g3) {
  return e13.hasDot ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(`dot-wrapper-${e13.dotPositon}`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(e13.dotLength, (o18) => (openBlock(), createElementBlock("div", {
      class: "dot-item",
      key: o18,
      onClick: (v3) => e13.dotClick(o18 - 1),
      style: normalizeStyle({
        backgroundColor: o18 - 1 === e13.currentIndex ? "#fff" : e13.dotBgColor
      })
    }, u5, 12, p6))), 128))
  ], 2)) : createCommentVNode("", true);
}
var D4 = s8(i6, [["render", k6]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/component/rotation-director/rotation-director.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/component/rotation-director/style/index.css";
var f6 = defineComponent({
  name: "ADirector",
  props: {
    showDirector: {
      type: Boolean,
      default: false
    }
  },
  emits: ["clickDirector"],
  setup(s27, { emit: e13 }) {
    const o18 = ref(null), r12 = (t2) => {
      e13("clickDirector", t2);
    };
    return onMounted(() => {
    }), {
      clickDirector: r12,
      directorRef: o18
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/component/rotation-director/rotation-director.vue.mjs
var p7 = {
  ref: "directorRef",
  class: "director"
};
var _3 = createBaseVNode("span", { class: "iconfont icon-left" }, null, -1);
var m7 = [
  _3
];
var h10 = createBaseVNode("span", { class: "iconfont icon-right" }, null, -1);
var u6 = [
  h10
];
function v2(e13, o18, k7, $3, C5, D5) {
  return openBlock(), createBlock(Transition, { name: "fade" }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", p7, [
        createBaseVNode("div", {
          onClick: o18[0] || (o18[0] = (r12) => e13.clickDirector("pre")),
          class: "directorContent director-left"
        }, m7),
        createBaseVNode("div", {
          onClick: o18[1] || (o18[1] = (r12) => e13.clickDirector("next")),
          class: "directorContent director-right"
        }, u6)
      ], 512), [
        [vShow, e13.showDirector]
      ])
    ]),
    _: 1
  });
}
var B4 = s8(f6, [["render", v2]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/rotation.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/style/index.css";
var F2 = defineComponent({
  name: "ARotation",
  components: {
    Dot: D4,
    Director: B4
  },
  props: {
    dotBgColor: {
      type: String
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3e3
    },
    initial: {
      type: Number,
      default: 1
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotPositon: {
      type: String,
      default: "center"
    }
  },
  emits: [],
  setup(r12, { emit: v3 }) {
    let n3 = null;
    const a20 = getCurrentInstance(), c14 = ref(null), t2 = reactive({
      currentIndex: r12.initial - 1,
      picLength: 0,
      contentHeight: 0,
      contentWidth: 0,
      showDirector: false
    });
    provide("currentIndex", toRef(t2, "currentIndex")), onMounted(() => {
      nextTick(() => {
        s27();
        const e13 = a20.slots.default()[0].children;
        t2.picLength = e13.length, o18();
      });
    }), onBeforeUnmount(() => {
      clearInterval(n3), n3 = null;
    });
    const s27 = () => {
      const e13 = c14.value.children[0] || 250;
      t2.contentHeight = d2(e13, "height"), t2.contentWidth = d2(e13, "width");
    }, o18 = () => {
      clearInterval(n3), r12.autoplay && (n3 = setInterval(() => {
        i10("next");
      }, r12.duration));
    }, i10 = (e13) => {
      switch (e13) {
        case "next":
          t2.currentIndex += 1, t2.currentIndex === t2.picLength && (t2.currentIndex = 0);
          break;
        case "pre":
          t2.currentIndex -= 1, t2.currentIndex === -1 && (t2.currentIndex = t2.picLength - 1);
          break;
      }
    };
    return {
      showDirectorFn: (e13) => {
        e13 ? clearInterval(n3) : o18(), t2.showDirector = e13;
      },
      slotContent: c14,
      dotClick: (e13) => {
        t2.currentIndex = e13, o18();
      },
      clickDirector: (e13) => {
        i10(e13), o18();
      },
      ...toRefs(t2)
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/rotation.vue.mjs
var m8 = { class: "rotation" };
var u7 = { ref: "slotContent" };
function f7(o18, t2, C5, $3, g3, k7) {
  const i10 = resolveComponent("Dot"), s27 = resolveComponent("Director");
  return openBlock(), createElementBlock("div", m8, [
    createBaseVNode("div", {
      class: "inner",
      style: normalizeStyle(`height:${o18.contentHeight + "px"};width:${o18.contentWidth + "px"}`),
      onMouseenter: t2[0] || (t2[0] = (l17) => o18.showDirectorFn(true)),
      onMouseleave: t2[1] || (t2[1] = (l17) => o18.showDirectorFn(false))
    }, [
      createBaseVNode("div", u7, [
        renderSlot(o18.$slots, "default")
      ], 512),
      createVNode(i10, {
        hasDot: o18.hasDot,
        currentIndex: o18.currentIndex,
        dotLength: o18.picLength,
        dotBgColor: o18.dotBgColor,
        dotPositon: o18.dotPositon,
        onDotClick: o18.dotClick
      }, null, 8, ["hasDot", "currentIndex", "dotLength", "dotBgColor", "dotPositon", "onDotClick"]),
      createVNode(s27, {
        showDirector: o18.hasDirector && o18.showDirector,
        onClickDirector: o18.clickDirector
      }, null, 8, ["showDirector", "onClickDirector"])
    ], 36)
  ]);
}
var I = s8(F2, [["render", f7]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation/index.mjs
var e8 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var i7 = e8(I);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation-item/rotation-item.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation-item/style/index.css";
var I2 = defineComponent({
  name: "ARotationItem",
  setup() {
    const t2 = inject("currentIndex", ref(0)), e13 = getCurrentInstance(), n3 = reactive({
      selfIndex: e13 == null ? void 0 : e13.vnode.key,
      currentIndex: t2
    });
    return watch(t2, (r12) => {
      n3.currentIndex = r12;
    }), {
      ...toRefs(n3)
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation-item/rotation-item.vue.mjs
var f8 = { class: "rotation-item" };
function m9(e13, p11, _5, u9, h12, $3) {
  return openBlock(), createBlock(Transition, null, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", f8, [
        renderSlot(e13.$slots, "default")
      ], 512), [
        [vShow, e13.selfIndex === e13.currentIndex]
      ])
    ]),
    _: 3
  });
}
var I3 = s8(I2, [["render", m9]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/rotation-item/index.mjs
var e9 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var i8 = e9(I3);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/pagination/pagination.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/pagination/style/index.css";
var _4 = defineComponent({
  name: "APagination",
  props: {
    total: {
      type: [Number, String],
      default: 0
    },
    // 总数 The total number of
    currentPage: {
      type: [Number, String],
      default: 1
    },
    // 当前页数 The current number of pages
    pageSize: {
      type: [Number, String],
      default: () => 10
    },
    // 每页显示条数 Size of entries per page
    sizesList: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    // 每页显示条数的选项设置 Option setting to display number of entries per page
    background: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    showQuickJumper: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    }
  },
  emits: ["page-change", "size-change"],
  setup(n3, {
    emit: s27,
    slots: J
  }) {
    const t2 = ref(n3.currentPage), o18 = ref([]), v3 = ref(n3.pageSize), p11 = computed(() => Math.ceil(Number(n3.total) / Number(v3.value))), N2 = ref(2), B5 = computed(() => {
      let e13 = [];
      return n3.sizesList.forEach((a20) => {
        e13.push({
          value: a20,
          text: a20 + " 条/页"
        });
      }), e13;
    }), L2 = (e13, a20, l17) => {
      let r12 = [], c14 = l17 * 2 + 1 + 2 + 2 + 2, d8 = c14 - 4, E3 = 1 + 2 + l17 + 1, M2 = e13 - 2 - l17 - 1;
      const C5 = {
        omit: true,
        value: "...",
        type: "prev"
      }, w7 = {
        omit: true,
        value: "...",
        type: "next"
      };
      return e13 <= c14 - 2 ? r12 = Array.from({
        length: e13
      }, (m14, i10) => i10 + 1) : a20 < E3 ? r12 = [...Array.from({
        length: d8
      }, (m14, i10) => i10 + 1), w7, e13] : a20 > M2 ? r12 = [1, C5, ...Array.from({
        length: d8
      }, (m14, i10) => e13 - d8 + i10 + 1)] : r12 = [1, C5, ...Array.from({
        length: l17 * 2 + 1
      }, (m14, i10) => a20 - l17 + i10), w7, e13], r12;
    }, f11 = () => {
      o18.value = L2(p11.value, Number(t2.value), N2.value);
      const e13 = o18.value[o18.value.length - 1];
      Number(t2.value) < 1 ? t2.value = 1 : Number(t2.value) > e13 && (t2.value = e13);
    };
    f11(), watch(() => n3.currentPage, (e13) => {
      t2.value = e13, f11();
    }), watch(() => t2.value, () => {
      f11();
    }), watch(() => n3.pageSize, (e13) => v3.value = e13), watch(() => v3.value, (e13) => s27("size-change", e13)), watch(() => p11.value, () => f11());
    const T2 = computed(() => (e13) => {
      let a20 = "btn pagination-item";
      return n3.background && (a20 += " background"), Number(t2.value) === e13 && (a20 += ` ${n3.background ? "background-current" : "current"}`), a20;
    }), $3 = (e13) => {
      if (typeof e13 == "number")
        e13 !== t2.value && (t2.value = e13, s27("page-change", e13));
      else if (typeof e13 == "object") {
        const a20 = N2.value * 2 + 1;
        e13.type === "prev" ? s27("page-change", Number(t2.value) - a20) : s27("page-change", Number(t2.value) + a20);
      }
    }, y3 = (e13) => {
      let a20 = t2.value;
      if (e13 === "prev") {
        if (a20 === 1)
          return;
        s27("page-change", Number(a20) - 1);
      } else {
        if (a20 === o18.value[o18.value.length - 1])
          return;
        s27("page-change", Number(a20) + 1);
      }
    }, k7 = computed(() => (e13) => {
      let a20 = "";
      return e13 === "prev" ? t2.value === 1 && (a20 = "disable") : t2.value === o18.value[o18.value.length - 1] && (a20 = "disable"), a20;
    }), I4 = (e13) => typeof e13 == "number" ? e13 : createVNode("span", {
      class: "iconfont icon-shenglvehao"
    }, null), P = (e13, a20, l17) => {
      const r12 = l17;
      if (r12.omit) {
        const c14 = e13.target.firstChild;
        a20 === "enter" ? r12.type === "prev" ? c14.className = "iconfont icon-doubleleft" : c14.className = "iconfont icon-doubleright-copy" : c14.className = "iconfont icon-shenglvehao";
      }
    }, V3 = async (e13) => {
      let a20 = t2.value;
      if (e13 === "" || Number.isNaN(Number(e13))) {
        let r12 = t2.value;
        t2.value = "", await nextTick(), t2.value = r12;
        return;
      }
      const l17 = o18.value[o18.value.length - 1];
      Number(e13) < 1 ? a20 = 1 : Number(e13) > l17 ? a20 = l17 : a20 = e13, Number(e13) > l17 && (t2.value = "", await nextTick(), t2.value = a20), s27("page-change", Number(a20));
    };
    return () => createVNode("div", {
      class: "a-pagination-content"
    }, [n3.showTotal && createVNode("div", {
      class: "a-pagination-total"
    }, [createTextVNode("Total "), n3.total]), createVNode("div", {
      class: `btn ${n3.background ? "background" : ""} prev ${k7.value("prev")}`,
      onClick: () => y3("prev")
    }, [createVNode("span", {
      class: "iconfont icon-left"
    }, null)]), createVNode("div", {
      class: "pagination-list"
    }, [o18.value.map((e13, a20) => createVNode("div", {
      onMouseleave: (l17) => P(l17, "leave", e13),
      onMouseenter: (l17) => P(l17, "enter", e13),
      onClick: () => $3(e13),
      key: a20,
      class: T2.value(e13)
    }, [I4(e13)]))]), createVNode("div", {
      class: `btn ${n3.background ? "background" : ""} next ${k7.value("next")}`,
      onClick: () => y3("next")
    }, [createVNode("span", {
      class: "iconfont icon-right"
    }, null)]), withDirectives(createVNode("div", {
      class: "page-size-select"
    }, [createVNode(o10, {
      width: "80",
      modelValue: v3.value,
      "onUpdate:modelValue": (e13) => v3.value = e13,
      options: B5.value
    }, null)]), [[vShow, n3.showSizeChanger || Number(n3.total) > 50]]), withDirectives(createVNode("div", {
      class: "a-pagination-goto"
    }, [createVNode("span", null, [createTextVNode("跳至")]), createVNode(o6, {
      width: "35",
      placeholder: "",
      value: t2.value,
      textCenter: true,
      onEnter: (e13) => V3(e13)
    }, null)]), [[vShow, n3.showQuickJumper]])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/pagination/index.mjs
var o13 = (n3) => (n3.install = (t2) => {
  const a20 = n3.name;
  t2.component(a20, n3);
}, n3);
var s18 = o13(_4);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tooltip/tooltip.vue2.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tooltip/style/index.css";
var m10 = defineComponent({
  setup() {
    const o18 = ref(false), n3 = ref(), p11 = ref("#303133"), l17 = ref("bottom");
    function s27() {
      o18.value = true;
    }
    function i10() {
      o18.value = false;
    }
    const e13 = ref({
      left: 0,
      top: 0
    }), c14 = computed(() => ({
      left: e13.value.left + "px",
      top: e13.value.top + "px"
    }));
    return {
      tooltipShow: o18,
      showTip: s27,
      hiddenTip: i10,
      tooltipPostiton: e13,
      tooltipStyle: c14,
      text: n3,
      placements: l17,
      bgColor: p11
    };
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/breadcrumb/breadcrumb.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/breadcrumb/style/index.css";
var d5 = defineComponent({
  name: "ABreadcrumb",
  props: {
    flag: {
      type: String,
      default: "/"
    },
    isRouter: {
      type: Boolean,
      default: false
    }
  },
  emits: ["pathClick"],
  setup(t2, {
    emit: r12,
    slots: a20
  }) {
    return provide("flag", t2.flag), provide("isRouter", t2.isRouter), provide("pathClick", (i10) => {
      r12("pathClick", i10);
    }), () => createVNode("div", {
      class: "a-breadcrumb-content"
    }, [a20.default && a20.default()]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/breadcrumb/index.mjs
var e10 = (t2) => (t2.install = (n3) => {
  const r12 = t2.name;
  n3.component(r12, t2);
}, t2);
var l13 = e10(d5);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/breadcrumb-item/breadcrumb-item.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/breadcrumb-item/style/index.css";
var m11 = defineComponent({
  name: "ABreadcrumbItem",
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  emits: ["pathClick"],
  setup(r12, {
    emit: o18,
    slots: a20
  }) {
    const l17 = inject("flag", "/");
    inject("isRouter", false);
    const c14 = inject("pathClick", () => {
    }), n3 = () => a20.default ? a20.default() : "", s27 = () => {
      c14(r12.path);
    };
    return () => createVNode("div", {
      class: "a-breadcrumb-item"
    }, [createVNode("span", {
      class: "title-href",
      onClick: () => s27()
    }, [n3()]), createVNode("span", {
      class: "flag"
    }, [l17])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/breadcrumb-item/index.mjs
var a14 = (t2) => (t2.install = (e13) => {
  const n3 = t2.name;
  e13.component(n3, t2);
}, t2);
var s19 = a14(m11);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tooltip/tooltip.vue.mjs
var f9 = ["innerHTML"];
function d6(o18, h12, u9, b2, g3, C5) {
  return openBlock(), createBlock(Transition, { name: "tooltip" }, {
    default: withCtx(() => [
      withDirectives(createBaseVNode("div", {
        class: "a-tooltip",
        style: normalizeStyle([o18.tooltipStyle, { backgroundColor: o18.bgColor }])
      }, [
        createBaseVNode("span", {
          class: "a-tooltip-text",
          innerHTML: o18.text
        }, null, 8, f9),
        createBaseVNode("div", {
          class: normalizeClass(["a-tooltip-arrow", [
            { left: o18.placements == "left" },
            { bottom: o18.placements == "bottom" },
            { right: o18.placements == "right" },
            { top: o18.placements == "top" }
          ]]),
          style: normalizeStyle({
            "--tooltip-bgColor": o18.bgColor
          })
        }, null, 6)
      ], 4), [
        [vShow, o18.tooltipShow]
      ])
    ]),
    _: 1
  });
}
var S2 = s8(m10, [["render", d6]]);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/tooltip/index.mjs
function h11(t2) {
  t2._tipHandler && t2.removeEventListener("mouseenter", t2._tipHandler), t2._tipMouseleaveHandler && t2.removeEventListener("mouseleave", t2._tipMouseleaveHandler), delete t2._tipHandler, delete t2._tipMouseleaveHandler, delete t2._tipOptions, delete t2._tipInstance;
}
function l14(t2, s27, r12) {
  let o18 = r12;
  if (!t2 || !s27)
    return;
  t2.tooltipPostiton.left = 0, t2.tooltipPostiton.top = 0;
  let n3, e13, c14, i10 = t2.$el.nodeType === 3 ? t2.$el.nextElementSibling : t2.$el;
  n3 = i10.getBoundingClientRect(), e13 = s27.getBoundingClientRect(), c14 = i10.querySelector(".a-tooltip-arrow ");
  let a20, p11;
  switch (o18) {
    case "top":
      e13.top < n3.height && (o18 = "bottom");
      break;
    case "bottom":
      e13.bottom < n3.height && (o18 = "top");
      break;
    case "left":
      e13.left < n3.width && (o18 = "right");
      break;
    case "right":
      e13.right < n3.width && (o18 = "left");
      break;
    default:
      throw new Error("Invalid direction");
  }
  switch (c14.className = `a-tooltip-arrow ${o18}`, o18) {
    case "top":
      a20 = e13.top - i10.offsetHeight - 10, p11 = e13.left + (e13.width - i10.offsetWidth) / 2;
      break;
    case "bottom":
      a20 = e13.bottom + 10, p11 = e13.left + (e13.width - i10.offsetWidth) / 2;
      break;
    case "left":
      a20 = e13.top + (e13.height - i10.offsetHeight) / 2, p11 = e13.left - i10.offsetWidth - 10;
      break;
    case "right":
      a20 = e13.top + (e13.height - i10.offsetHeight) / 2, p11 = e13.right + 10;
      break;
    default:
      throw new Error("Invalid direction");
  }
  t2.tooltipPostiton.top = a20, t2.tooltipPostiton.left = p11;
}
var m12 = ["bottom", "left", "right", "top"];
var d7 = {
  install(t2) {
    t2.directive("tooltip", {
      mounted: d7.mounted,
      updated: d7.updated,
      unmounted: d7.unmounted
    });
  },
  mounted(t2, s27) {
    h11(t2);
    let r12 = null;
    t2._tipOptions = s27.value, t2._tipHandler = () => {
      r12 !== null && (clearTimeout(r12), r12 = null);
      const o18 = m12.filter((e13) => s27.modifiers[e13]), n3 = o18.length ? o18 : m12;
      t2._tipInstance || (t2._synopsis = createApp(S2), t2._root = document.createElement("div"), document.body.appendChild(t2._root), t2._tipInstance = t2._synopsis.mount(t2._root)), t2._tipInstance.placements = n3[0], t2._tipInstance.showTip(), typeof t2._tipOptions == "object" ? (t2._tipInstance.text = t2._tipOptions.text, t2._tipInstance.bgColor = t2._tipOptions.bgColor || "#303133") : t2._tipInstance.text = t2._tipOptions, nextTick(() => {
        l14(t2._tipInstance, t2, n3[0]);
      }), t2._scrollHandler = () => {
        t2._tipInstance.tooltipShow && l14(t2._tipInstance, t2, n3[0]);
      }, window.addEventListener("scroll", t2._scrollHandler);
    }, t2._tipMouseleaveHandler = () => {
      t2._tipInstance && (r12 = setTimeout(() => {
        t2._tipInstance.hiddenTip();
      }, 300));
    }, document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", t2._tipHandler), t2._tipMouseleaveHandler();
    }), t2.addEventListener("mousedown", () => {
      document.addEventListener("mousemove", t2._tipHandler);
    }), t2.addEventListener("mouseenter", t2._tipHandler), t2.addEventListener("mouseleave", () => {
      t2._tipMouseleaveHandler();
    });
  },
  updated(t2, s27) {
    t2._tipOptions = s27.value;
  },
  unmounted(t2) {
    t2._tipInstance && (t2._synopsis.unmount(), document.body.removeChild(t2._root)), window.removeEventListener("scroll", t2._scrollHandler);
  }
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/slider/slider.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/slider/style/index.css";
var G2 = defineComponent({
  name: "ASlider",
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    showStops: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change"],
  directives: {
    ATolltip: d7
  },
  setup(t2, {
    slots: O,
    emit: f11
  }) {
    const p11 = ref(), m14 = ref(), d8 = ref(), B5 = ref(), c14 = ref(0), g3 = ref(false), v3 = ref(0), l17 = ref(0), s27 = computed(() => Math.round(l17.value / v3.value * 100)), h12 = computed(() => v3.value * (t2.step / 100)), w7 = ref(s27.value);
    watch(s27, (e13) => {
      e13 !== t2.modelValue && (f11("update:modelValue", e13), f11("change", e13));
    }), watch(() => t2.modelValue, () => {
      y3();
    }), watch(() => w7.value, (e13) => {
      e13 !== t2.modelValue && (f11("update:modelValue", e13), f11("change", e13), y3());
    }), onMounted(() => {
      nextTick(() => {
        y3();
      });
    });
    const y3 = () => {
      v3.value = p11.value.offsetWidth, l17.value = t2.modelValue / 100 * v3.value, d8.value.style.left = l17.value + "px", m14.value.style.width = l17.value + "px", w7.value = s27.value;
    }, L2 = (e13) => {
      e13.stopPropagation(), e13.preventDefault(), c14.value = e13.clientX, document.addEventListener("mousemove", x2), document.addEventListener("mouseup", R5);
    }, P = (e13) => {
      c14.value = e13.clientX;
      const a20 = p11.value.getBoundingClientRect().left, u9 = V3(e13.clientX - a20, h12.value);
      l17.value = u9, d8.value.style.left = l17.value + "px", m14.value.style.width = l17.value + "px";
    }, x2 = (e13) => {
      e13.preventDefault(), g3.value = true;
      let a20 = e13.clientX < c14.value ? "left" : "right";
      const u9 = p11.value.getBoundingClientRect(), i10 = u9.left, r12 = u9.width, A = e13.clientX >= i10 && e13.clientX - i10 <= r12;
      if (g3.value && (A || a20 === "left" && s27.value > 0 || a20 === "right" && s27.value < 100)) {
        const N2 = e13.clientX - c14.value, M2 = d8.value.offsetLeft, X = M2 + N2;
        if (Math.abs(X - M2) >= r12 * (t2.step / 100)) {
          const I4 = Math.min(Math.max(X, 0), r12);
          l17.value = V3(I4, h12.value), d8.value.style.left = l17.value + "px", m14.value.style.width = l17.value + "px", c14.value = e13.clientX;
        }
      }
    }, V3 = (e13, a20) => {
      const u9 = e13 % a20;
      if (u9 === 0)
        return e13;
      {
        const i10 = e13 - u9, r12 = i10 + a20;
        return e13 - i10 <= r12 - e13 ? i10 : r12;
      }
    }, R5 = () => {
      g3.value = false, document.removeEventListener("mousemove", x2), document.removeEventListener("mouseup", R5);
    };
    return () => createVNode("div", {
      class: "a-slider-content"
    }, [createVNode("div", {
      class: "a-slider-runway",
      style: {
        marginRight: t2.showInput ? "30px" : ""
      },
      ref: p11,
      onMousedown: (e13) => P(e13)
    }, [createVNode("div", {
      class: "a-slider-stop-list"
    }, [t2.showStops && Array.from({
      length: V3(v3.value / h12.value, 1)
    }).map((e13, a20) => createVNode("div", {
      class: "stop-item",
      style: {
        left: h12.value * a20 + 1 + "px"
      }
    }, null))]), createVNode("div", {
      class: "a-slider-bar",
      ref: m14
    }, null), withDirectives(createVNode("div", {
      class: "a-slider-button_wrapper",
      ref: d8,
      onMousedown: (e13) => L2(e13)
    }, [createVNode("div", {
      ref: B5,
      class: "a-slider-button"
    }, null)]), [[resolveDirective("tooltip"), s27.value, void 0, {
      top: true
    }]])]), t2.showInput && createVNode(x, {
      modelValue: w7.value,
      "onUpdate:modelValue": (e13) => w7.value = e13,
      width: 100,
      max: 100,
      min: 0,
      step: t2.step
    }, null)]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/slider/index.mjs
var r8 = (t2) => (t2.install = (n3) => {
  const e13 = t2.name;
  n3.component(e13, t2);
}, t2);
var a15 = r8(G2);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/progress/progress.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/progress/style/index.css";
var W = defineComponent({
  name: "AProgress",
  props: {
    percentage: {
      type: Number,
      default: 0,
      required: true
    },
    format: Function,
    status: {
      type: String
    },
    color: {
      type: [String, Array],
      default: "var(--a-primary-color)"
    },
    textInside: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number,
      default: 6
    }
  },
  emits: [],
  setup(e13, {
    emit: b2
  }) {
    const c14 = ref(null), a20 = computed(() => e13.percentage <= 0 ? 0 : e13.percentage >= 100 ? 100 : e13.percentage), f11 = computed(() => {
      var n3;
      let r12 = 31.79;
      return (((n3 = c14.value) == null ? void 0 : n3.offsetWidth) || 0) * (a20.value / 100) > r12;
    }), u9 = computed(() => {
      if (e13.status) {
        if (e13.status === "success")
          return "var(--a-success-color)";
        if (e13.status === "prompt")
          return "var(--a-warning-color)";
        if (e13.status === "error")
          return "var(--a-error-color)";
      } else
        return e13.color;
    }), l17 = computed(() => e13.format ? e13.format(e13.percentage) : e13.status && !e13.textInside ? createVNode(l, {
      name: e13.status,
      style: {
        color: u9.value,
        fontSize: "16px"
      }
    }, null) : a20.value + "%"), g3 = (r12, i10) => {
      let n3 = "";
      for (let o18 = 0; o18 < i10.length; o18++) {
        const {
          color: v3,
          percentage: m14
        } = i10[o18];
        if (r12 <= m14) {
          n3 = v3;
          break;
        }
      }
      return n3;
    }, d8 = computed(() => {
      let r12 = "";
      return Array.isArray(u9.value) ? r12 = g3(a20.value, u9.value) : r12 = u9.value, {
        width: a20.value + "%",
        backgroundColor: r12
      };
    });
    return () => createVNode("div", {
      class: "a-progress-content"
    }, [createVNode("div", {
      class: "a-progress-runway",
      ref: c14,
      style: {
        height: e13.strokeWidth + "px"
      }
    }, [createVNode("div", {
      class: "a-progress-bar",
      style: d8.value
    }, [e13.textInside && f11.value && createVNode("div", {
      class: "a-percentage-inner-text"
    }, [createVNode("span", null, [l17.value])])]), e13.textInside && !f11.value && createVNode("div", {
      class: "a-percentage-outer-text",
      style: {
        marginLeft: a20.value + "%"
      }
    }, [l17.value])]), !e13.textInside && createVNode("div", {
      class: "a-percentage-text"
    }, [createVNode("span", null, [l17.value])])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/progress/index.mjs
var e11 = (t2) => (t2.install = (n3) => {
  const s27 = t2.name;
  n3.component(s27, t2);
}, t2);
var a16 = e11(W);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown-menu/dropdown-menu.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown-menu/style/index.css";
var a17 = defineComponent({
  name: "ADropdownMenu",
  setup(t2, {
    emit: d8,
    slots: e13
  }) {
    return () => createVNode("div", {
      class: "a-dropdown-menu-content"
    }, [e13.default && e13.default()]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown-menu/index.mjs
var r9 = (n3) => (n3.install = (t2) => {
  const o18 = n3.name;
  t2.component(o18, n3);
}, n3);
var s20 = r9(a17);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/space/space.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/space/style/index.css";
var s21 = {
  small: "8px",
  default: "12px",
  large: "16px"
};
var p8 = defineComponent({
  name: "ASpace",
  props: {
    size: {
      type: [String, Number],
      default: "small"
    },
    align: {
      type: String,
      default: "start"
    },
    direction: {
      type: String,
      default: "row"
    }
  },
  emits: [],
  setup(e13, {
    slots: t2,
    emit: c14
  }) {
    const l17 = computed(() => {
      switch (e13.size) {
        case "small":
        case "default":
        case "large":
          return s21[e13.size];
        default:
          return e13.size + "px";
      }
    }), i10 = computed(() => ({
      alignItems: e13.align,
      gap: l17.value,
      flexDirection: e13.direction
    }));
    return () => createVNode("div", {
      class: "a-space",
      style: i10.value
    }, [t2.default && t2.default()]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/space/index.mjs
var s22 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var o14 = s22(p8);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dialog/dialog.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dialog/style/index.css";
var Ct = defineComponent({
  name: "ADialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "50%"
    },
    offsetTop: {
      type: String,
      default: "15%"
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    confirmButtonText: {
      type: String,
      default: "确认"
    },
    center: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    zIndex: {
      type: Number,
      default: 1e3
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "cancel-click", "confirm-click", "close-click"],
  setup(t2, {
    emit: m14,
    slots: l17,
    expose: y3
  }) {
    const u9 = ref(2e3), r12 = ref(null), d8 = ref(t2.modelValue), g3 = computed(() => ({
      width: t2.width,
      top: t2.alignCenter ? "40%" : t2.offsetTop
    }));
    onMounted(() => {
      setTimeout(() => {
        u9.value = r3();
      });
    }), watch(() => t2.modelValue, (o18) => {
      setTimeout(() => {
        d8.value = o18;
      }, o18 ? 0 : 80), o18 ? t2.modal && (document.body.style.overflow = "hidden") : t2.modal && (document.body.style.overflow = "auto");
    });
    const v3 = () => {
      t2.modal ? r12.value.showModal() : r12.value.show();
    }, h12 = () => r12.value.close(), n3 = (o18) => {
      m14("update:modelValue", false), m14(o18);
    }, B5 = (o18) => {
      o18.target.className === "a-dialog-content" && t2.closeOnClickModal && n3("close-click");
    };
    y3({
      showModal: v3,
      closeModal: h12
    });
    const C5 = computed(() => l17.default ? t2.destroyOnClose ? d8.value && l17.default() : l17.default() : "");
    return () => createVNode(Teleport, {
      to: "body"
    }, {
      default: () => [createVNode(Transition, {
        name: "dialog"
      }, {
        default: () => [withDirectives(createVNode("div", {
          class: "a-dialog-content",
          onClick: (o18) => B5(o18),
          style: {
            zIndex: u9.value
          }
        }, [createVNode("div", {
          class: "dialog-box",
          style: g3.value
        }, [withDirectives(createVNode("div", {
          class: "a-dialog-header",
          style: {
            justifyContent: t2.center ? "center" : "left"
          }
        }, [createVNode("div", {
          class: "title"
        }, [withDirectives(createVNode(l, {
          style: "font-size:20px;margin-right:5px",
          name: t2.icon
        }, null), [[vShow, t2.icon]]), t2.title])]), [[vShow, t2.title]]), createVNode("div", {
          class: "close-btn",
          onClick: () => n3("close-click")
        }, [createVNode(l, {
          name: "close"
        }, null)]), createVNode("div", {
          class: "a-dialog-body"
        }, [C5.value]), createVNode("div", {
          class: "a-dialog-footer",
          style: {
            justifyContent: t2.center ? "center" : "right"
          }
        }, [l17.footer ? l17.footer() : createVNode(o14, null, {
          default: () => [withDirectives(createVNode(l15, {
            onClick: () => n3("cancel-click")
          }, {
            default: () => [t2.cancelButtonText]
          }), [[vShow, t2.showCancelButton]]), withDirectives(createVNode(l15, {
            style: "margin-right:0px",
            onClick: () => n3("confirm-click"),
            type: "primary"
          }, {
            default: () => [t2.confirmButtonText]
          }), [[vShow, t2.showConfirmButton]])]
        })])])]), [[vShow, d8.value]])]
      })]
    });
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dialog/index.mjs
var o15 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var s23 = o15(Ct);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown-item/dropdown-item.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown-item/style/index.css";
var it = defineComponent({
  name: "ADropdownItem",
  props: {
    command: [String, Number, Object],
    disabled: {
      type: Boolean,
      default: false
    },
    divided: {
      type: Boolean,
      default: false
    },
    icon: [String, Object]
  },
  setup(t2, {
    emit: a20,
    slots: i10
  }) {
    const m14 = inject("on-click-dropdown-item", (c14) => {
    }), r12 = () => typeof t2.icon == "string" ? createVNode(l, {
      name: t2.icon
    }, null) : typeof t2.icon == "object" ? t2.icon : "";
    return () => createVNode(Fragment, null, [t2.divided && createVNode("div", {
      class: "divided"
    }, null), createVNode("div", {
      class: `a-dropdown-item ${t2.disabled && "disable"}`,
      onClick: () => !t2.disabled && m14(t2.command)
    }, [createVNode("div", {
      style: {
        marginRight: "5px"
      }
    }, [r12()]), createTextVNode(" "), i10.default && i10.default()])]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown-item/index.mjs
var r10 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var s24 = r10(it);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown/dropdown.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown/style/index.css";
var mt = defineComponent({
  name: "ADropdown",
  props: {
    trigger: {
      type: String,
      default: "hover"
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    splitButton: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "primary"
    },
    placement: {
      type: String,
      default: "bottom"
    }
  },
  emits: ["command", "click"],
  setup(o18, {
    emit: i10,
    slots: r12
  }) {
    const e13 = ref(), d8 = () => r12.default ? r12.default() : "", p11 = () => r12.dropdown ? r12.dropdown() : "", a20 = () => createVNode(s6, {
      placement: o18.placement,
      trigger: o18.trigger,
      width: "max-content",
      padding: "0",
      ref: e13
    }, {
      default: () => createVNode("div", {
        class: "slot-dropdown"
      }, [p11()]),
      reference: () => d8()
    });
    return provide("on-click-dropdown-item", (l17) => {
      i10("command", l17), o18.hideOnClick && e13.value.hiddenPopover();
    }), () => createVNode("div", {
      class: "a-dropdown"
    }, [o18.splitButton ? createVNode("div", {
      class: "split-button-content"
    }, [createVNode("div", {
      onClick: () => i10("click")
    }, [createVNode(l15, {
      class: "left",
      type: o18.type
    }, {
      default: () => [r12.default && r12.default()]
    })]), createVNode(s6, {
      placement: o18.placement,
      trigger: o18.trigger,
      width: "max-content",
      padding: "0",
      ref: e13
    }, {
      default: () => createVNode("div", {
        class: "slot-dropdown"
      }, [p11()]),
      reference: () => createVNode(l15, {
        class: "right",
        type: o18.type
      }, {
        default: () => [createVNode(l, {
          name: "arrow-down"
        }, null)]
      })
    })]) : a20()]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/dropdown/index.mjs
var a18 = (n3) => (n3.install = (t2) => {
  const o18 = n3.name;
  t2.component(o18, n3);
}, n3);
var s25 = a18(mt);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/table/table.mjs
var ut = defineComponent({
  name: "ATable",
  emits: [],
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    maxHeight: {
      type: String,
      default: () => "100%"
    },
    bordered: {
      type: Boolean,
      default: true
    },
    singleLine: {
      type: Boolean,
      default: true
    }
  },
  setup(e13, {
    emit: A
  }) {
    const s27 = ref(null), o18 = reactive({
      data: e13.data,
      columns: e13.columns,
      gutterWidth: 15
    });
    watch([() => e13.columns, () => e13.data], ([r12, l17]) => {
      o18.columns = r12, o18.data = l17;
    });
    const p11 = computed(() => o18.data.length === 0);
    onMounted(() => {
    });
    const n3 = () => createVNode("thead", {
      class: "a-table-thead"
    }, [createVNode("tr", {
      class: "a-table-tr"
    }, [o18.columns.map(({
      key: r12,
      title: l17,
      width: a20
    }, i10) => createVNode("th", {
      class: ["a-table-th", e13.singleLine ? "" : "single-line"],
      key: r12,
      style: {
        width: a20 ? a20 + "px" : "auto"
      }
    }, [createVNode("div", {
      class: "a-table-th_title-wrapper"
    }, [createVNode("div", {
      class: "a-table-th__title"
    }, [l17])])]))])]), d8 = () => {
      const r12 = ["a-table-td", e13.singleLine ? "" : "single-line"], l17 = (a20) => ({
        width: a20 ? a20 + "px" : "auto",
        "--a-table-tr-bottom": e13.bordered ? "none" : "1px solid var(--a-border-weak-color)"
      });
      return createVNode("tbody", {
        class: "a-table-tbody"
      }, [o18.data.map((a20) => createVNode("tr", {
        class: "a-table-tr"
      }, [o18.columns.map(({
        key: i10,
        render: m14,
        width: b2
      }) => createVNode("td", {
        "data-col-key": i10,
        class: r12,
        style: l17(b2)
      }, [m14 ? m14(a20) : a20[i10]]))]))]);
    }, c14 = () => createVNode("div", {
      class: "a-table-empty_wrapper"
    }, [createVNode(l, {
      name: "data-view",
      style: {
        fontSize: "50px",
        color: "var(--a-text-disable-color)"
      }
    }, null), createVNode("div", {
      class: "text"
    }, [createTextVNode("无数据")])]);
    return () => createVNode("div", {
      class: "a-table",
      style: {
        border: e13.bordered ? "1px solid var(--a-border-weak-color)" : "none"
      }
    }, [createVNode("table", {
      class: "table"
    }, [n3()]), p11.value ? c14() : createVNode(s5, {
      style: {
        maxHeight: e13.maxHeight
      }
    }, {
      default: () => [createVNode("div", {
        class: "a-table--body-wrapper",
        ref: s27
      }, [createVNode("table", {
        class: "table"
      }, [d8()])])]
    })]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/table/index.mjs
var l16 = (t2) => (t2.install = (n3) => {
  const a20 = t2.name;
  n3.component(a20, t2);
}, t2);
var o16 = l16(ut);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/date-picker.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/style/index.css";
var ye = defineComponent({
  name: "ADatePicker",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  components: {
    DateInput: o7,
    Calendar: s4
  },
  setup(i10, {
    emit: a20
  }) {
    const c14 = i2(), s27 = i2(), t2 = ref(true), o18 = ref(false), f11 = ref(null), v3 = (e13, k7 = true) => {
      const {
        year: S3,
        month: w7,
        day: C5
      } = e13, D5 = h3(S3, w7, C5);
      a20("update:modelValue", D5), k7 && l17(0);
    }, l17 = (e13) => {
      t2.value = e13 === 0;
    }, n3 = (e13) => {
      typeof e13 == "boolean" && (o18.value = e13);
    }, V3 = (e13) => {
      !e13 && !o18.value && (t2.value = true);
    }, h12 = (e13) => {
      a20("update:modelValue", e13);
    };
    return provide("model-value", i10.modelValue), provide("update-modelValue", v3), provide("dateSelectContentKey", s27), () => createVNode("div", {
      class: "a-datepicker-content",
      id: `${c14}`,
      ref: f11
    }, [createVNode(s6, {
      trigger: "click",
      visible: !t2.value,
      width: "max-content",
      padding: "0",
      onIsClickElementInPopover: (e13) => V3(e13)
    }, {
      reference: () => createVNode(o7, {
        showDateSelect: o18.value,
        showDateSelectFn: n3,
        shrinkCalendarSwitchFn: l17,
        value: i10.modelValue,
        onResetValue: (e13) => h12(e13)
      }, null),
      default: () => createVNode(G, {
        showDateSelectFn: n3,
        showDateSelect: o18.value,
        dateValue: i10.modelValue,
        isInputBlur: t2.value
      }, null)
    })]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/date-picker/index.mjs
var r11 = (t2) => (t2.install = (e13) => {
  const n3 = t2.name;
  e13.component(n3, t2);
}, t2);
var i9 = r11(ye);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/button/button.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/button/style/index.css";
var Wt = defineComponent({
  name: "AButton",
  props: {
    type: {
      type: String,
      default: () => "default"
    },
    size: {
      type: String,
      default: () => "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  setup(l17, {
    slots: s27
  }) {
    const o18 = reactive({
      color: "",
      hover: "",
      active: ""
    }), m14 = () => {
      switch (l17.size) {
        case "small":
          return "size-s";
        case "default":
          return "size-m";
        case "large":
          return "size-l";
        default:
          return "";
      }
    }, g3 = (e13, r12, i10, t2) => {
      o18.color = e13, o18.hover = r12, o18.active = i10;
    }, p11 = () => {
      const {
        type: e13,
        disabled: r12,
        text: i10
      } = l17;
      g3(t2("color"), t2("hover"), t2("active"));
      function t2(n3 = "") {
        if (e13 === "default")
          return r12 && ["color", "hover"].includes(n3) ? "var(--a-text-color)" : "var(--a-primary-color)";
        if (i10 && r12 && ["color", "hover"].includes(n3))
          return "var(--a-text-color)";
        {
          const a20 = n3 === "color" ? "" : `-${n3}`;
          return `var(--a-${e13}${a20}-color)`;
        }
      }
    };
    watch(() => l17.type, () => p11());
    const y3 = computed(() => {
      const {
        dashed: e13,
        text: r12,
        type: i10,
        disabled: t2,
        loading: n3,
        ghost: a20,
        round: f11,
        circle: C5,
        color: u9,
        size: d8
      } = l17, x2 = l17.full ? "100%" : "auto", B5 = e13 || a20 || r12 || i10 === "default" ? o18.color : "var(--a-text-color-white)", D5 = t2 && i10 === "default" ? "var(--a-border-color)" : o18.color, S3 = e13 || a20 ? "var(--a-bg-color)" : o18.color, w7 = t2 ? o18.color : o18.hover, z = n3 || r12 || t2 ? "" : u9 || o18.color, k7 = t2 ? o18.color : o18.active;
      return {
        "--button-width": x2,
        "--button-color": B5,
        "--button-border-color": D5,
        "--button-bg-color": S3,
        "--button-hover-color": w7,
        "--button-ripple-color": z,
        "--button-active-color": k7,
        "--button-line-type": e13 ? "dashed" : "solid",
        "--button-masker-zIndex": n3 || t2 ? "100" : "0",
        "--button-cursor-type": t2 ? "not-allowed" : n3 ? "wait" : "",
        "--button-border-radius": f11 ? "34px" : C5 ? "50%" : "3px",
        // 自定义按钮颜色
        "--button-self-define-filter": t2 ? "brightness(1)" : "brightness(.9)",
        "--button-self-define-opacity": t2 ? "0.5" : "0.8",
        "--button-self-define-color": a20 || r12 ? u9 : "var(--a-text-color-white)",
        "--button-self-define-bg-color": a20 || r12 ? "var(--a-bg-color)" : u9,
        "--button-self-define-border-color": r12 ? "transparent" : u9,
        // 圆形按钮宽高
        "--button-circle-width": d8 === "default" ? "34px" : d8 === "small" ? "28px" : "40px",
        "--button-circle-height": d8 === "default" ? "34px" : d8 === "small" ? "28px" : "40px"
      };
    }), h12 = () => {
      if (l17.loading)
        return createVNode("div", {
          class: "is-loading"
        }, [createVNode(l, {
          class: "a-loading-icon",
          name: "loading"
        }, null)]);
      if (s27.icon)
        return createVNode(Fragment, null, [s27.icon()]);
      if (l17.icon)
        return createVNode(l, {
          name: l17.icon
        }, null);
    }, v3 = () => {
      const {
        type: e13,
        dashed: r12,
        text: i10,
        ghost: t2,
        disabled: n3,
        circle: a20,
        color: f11
      } = l17;
      return ["a-button", m14(), e13 === "default" ? "bg-default" : "", r12 || i10 || t2 ? "" : "a-solid-button", i10 ? "bg-text" : "", n3 ? "bg-disabled" : "", f11 ? "bg-self-define" : "", a20 ? "bg-circle" : ""].filter(Boolean);
    };
    return p11(), () => createVNode("button", {
      style: y3.value,
      class: v3()
    }, [createVNode("div", {
      class: "a-button-content"
    }, [(l17.loading || l17.icon || s27.icon) && createVNode("div", {
      class: "icon-slot-content"
    }, [h12()]), s27.default ? s27.default() : ""]), createVNode("div", {
      onClick: (e13) => e13.stopPropagation(),
      class: "a-button-masker"
    }, null)]);
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/button/index.mjs
var e12 = (t2) => (t2.install = (n3) => {
  const o18 = t2.name;
  n3.component(o18, t2);
}, t2);
var l15 = e12(Wt);

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/message/types.mjs
var s26 = {
  SUCCESS: "success",
  WARNING: "warning",
  Message: "message",
  ERROR: "error"
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/message/message.vue.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/message/style/index.css";
var R4 = defineComponent({
  __name: "message",
  props: {
    type: {
      type: String,
      defualt: s26.Message,
      validator: (t2) => Object.values(s26).includes(t2)
    },
    message: {
      type: String,
      default: s26.Message
    },
    duration: {
      type: Number
    }
  },
  setup(t2, { expose: p11 }) {
    let n3 = null;
    const a20 = t2, o18 = ref(false), l17 = reactive({
      messageVisible: false,
      top: 0
    }), { messageVisible: u9, top: f11 } = toRefs(l17), d8 = () => {
      switch (a20.type) {
        case "error":
          return "icon-cuowu";
        case "success":
          return "icon-chenggong";
        case "warning":
          return "icon-tixingshixin";
        case "info":
          return "icon-xinxi-yuankuang";
        default:
          return "icon-xinxi-yuankuang";
      }
    }, y3 = (e13) => (u9.value = e13, new Promise((s27) => {
      n3 = setTimeout(() => {
        s27(""), clearTimeout(n3), n3 = null;
      }, 300);
    })), c14 = (e13) => {
      o18.value = e13, o18.value;
    };
    return p11({
      isHover: o18,
      setMessageVisible: y3,
      setMessageTop: (e13) => (l17.top = e13, e13),
      height: 45,
      margin: 10
    }), (e13, s27) => (openBlock(), createBlock(Transition, { name: "a-message-fade" }, {
      default: withCtx(() => [
        unref(u9) ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref: "messageRef",
          style: normalizeStyle({ top: unref(f11) + "px" }),
          class: "a-message"
        }, [
          createBaseVNode("div", {
            class: "a-message-content",
            onMouseenter: s27[0] || (s27[0] = (v3) => c14(true)),
            onMouseleave: s27[1] || (s27[1] = (v3) => c14(false))
          }, [
            createBaseVNode("span", {
              style: { "margin-right": "10px", "font-size": "18px" },
              class: normalizeClass(`iconfont ${d8()} ${a20.type}`)
            }, null, 2),
            createBaseVNode("div", null, toDisplayString(a20.message), 1)
          ], 32)
        ], 4)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/message/index.mjs
var o17 = ref([]);
var a19 = function(t2) {
  const e13 = createApp(R4, t2);
  p9(e13, t2.duration);
};
Object.values(s26).forEach((t2) => {
  a19[t2] = (e13) => (e13.type = t2, a19(e13));
});
var p9 = (t2, e13) => {
  const r12 = document.createDocumentFragment(), s27 = t2.mount(r12);
  o17.value.push(s27), document.body.appendChild(r12), c12(s27), s27.setMessageVisible(true), watch(
    () => o17.value,
    () => {
      c12(s27);
    }
  ), watch(
    () => s27.isHover,
    (n3) => {
      !n3 && u8(t2, s27, e13);
    },
    { deep: true }
  ), u8(t2, s27, e13);
};
var u8 = (t2, e13, r12) => {
  e13.timer = setTimeout(() => {
    if (e13.isHover) {
      clearTimeout(e13.timer), e13.timer = null;
      return;
    }
    e13.setMessageVisible(false).then(() => {
      t2.unmount(), o17.value = o17.value.filter(
        (s27) => s27 !== e13
      ), clearTimeout(e13.timer), e13.timer = null;
    });
  }, r12 || 3e3);
};
var c12 = (t2) => {
  const { setMessageTop: e13, height: r12, margin: s27 } = t2, n3 = a2(o17.value, t2);
  e13(s27 * (n3 + 1) + r12 * n3);
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/message-box/message-box.vue.mjs
import "D:/vitepress/node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/message-box/style/index.css";
var j3 = { class: "a-message-title" };
var q2 = { class: "title" };
var G3 = { class: "a-message-content" };
var H2 = { class: "a-message-footer" };
var Zt = defineComponent({
  __name: "message-box",
  props: {
    title: {
      type: String,
      default: "Message"
    },
    content: {
      type: String,
      default: "Message content"
    },
    showMessageBox: {
      type: Boolean,
      default: false
    },
    showCancelBtn: {
      type: Boolean,
      default: false
    },
    confirmBtnText: {
      type: String,
      default: "确认"
    },
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    mantleClose: {
      type: Boolean,
      default: false
    },
    field: {
      type: String,
      default: "confirm",
      validator: (e13) => p10.includes(e13)
    }
  },
  setup(e13, { expose: B5 }) {
    const a20 = e13, d8 = ref(2e3), t2 = reactive({
      visible: false,
      promptValue: "",
      btnType: "confirm"
    }), { visible: C5 } = toRefs(t2);
    onMounted(() => {
      setTimeout(() => {
        d8.value = r3();
      });
    });
    const m14 = (o18) => {
      t2.visible = o18, t2.visible ? T2() : w7();
    }, b2 = () => {
      t2.btnType = "confirm", m14(false);
    }, f11 = () => {
      t2.btnType = "cancel", m14(false);
    }, k7 = () => {
      a20.mantleClose && f11();
    }, h12 = ({ fied: o18 }) => {
      switch (o18) {
        case (!o18 || "confirm"):
          return h("span", null, a20.content);
        case "prompt":
          return h("input", {
            value: t2.promptValue,
            onInput: (s27) => t2.promptValue = s27.target.value,
            class: "messageInput"
          });
      }
    }, T2 = () => {
      document.body.style.overflow = "hidden";
    }, w7 = () => {
      document.body.style.removeProperty("overflow");
    };
    return B5({
      setVisible: m14,
      state: t2
    }), (o18, s27) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, { name: "modal" }, {
        default: withCtx(() => [
          unref(C5) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "a-message-box",
            style: normalizeStyle([{ zIndex: d8.value }]),
            onClick: k7
          }, [
            createBaseVNode("div", {
              class: "a-message-box-wrapper",
              onClick: s27[0] || (s27[0] = withModifiers(() => {
              }, ["stop"]))
            }, [
              createBaseVNode("div", j3, [
                createBaseVNode("div", q2, toDisplayString(e13.title), 1),
                createVNode(unref(l), { name: "close" })
              ]),
              createBaseVNode("div", G3, [
                createVNode(h12, {
                  fied: a20.field
                }, null, 8, ["fied"])
              ]),
              createBaseVNode("div", H2, [
                createVNode(unref(o14), null, {
                  default: withCtx(() => [
                    e13.showCancelBtn ? (openBlock(), createBlock(unref(l15), {
                      key: 0,
                      onClick: f11
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(e13.cancelBtnText), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(unref(l15), {
                      type: "primary",
                      onClick: b2
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(e13.confirmBtnText), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ], 4)) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]));
  }
});

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/src/message-box/index.mjs
var p10 = ["confirm", "prompt"];
var c13 = [];
var m13 = (e13) => {
  const t2 = createApp(Zt, e13);
  return new Promise((r12, o18) => {
    c13.length > 0 || f10(t2, { resolve: r12, reject: o18 });
  });
};
p10.forEach((e13) => {
  m13[e13] = (t2) => (t2.field = e13, m13(t2));
});
var f10 = (e13, { resolve: t2, reject: r12 }) => {
  const o18 = document.createDocumentFragment(), n3 = e13.mount(o18);
  document.body.appendChild(o18), n3.setVisible(true), c13.push(n3), watch(n3.state, (s27) => {
    if (!s27.visible) {
      switch (s27.btnType) {
        case "cancel":
          r12(false);
          break;
        case "confirm":
          t2(s27.promptValue);
          break;
      }
      setTimeout(() => {
        e13.unmount(n3);
      }, 100), c13 = [];
    }
  });
};

// node_modules/.pnpm/amu-ui@1.1.0/node_modules/amu-ui/es/index.mjs
var t = {
  install: (r12) => {
    for (let e13 in src_exports)
      r12.use(src_exports[e13]);
  }
};
export {
  l13 as ABreadcrumb,
  s19 as ABreadcrumbItem,
  l15 as AButton,
  l9 as ACheckbox,
  s14 as ACheckboxGroup,
  o2 as ACollapse,
  o3 as ACollapseItem,
  i9 as ADatePicker,
  s23 as ADialog,
  l8 as ADrawer,
  s25 as ADropdown,
  s24 as ADropdownItem,
  s20 as ADropdownMenu,
  s7 as AForm,
  m2 as AFormItem,
  l as AIcon,
  o6 as AInput,
  u2 as AInputNumber,
  i4 as ALoading,
  o11 as AMenu,
  m3 as AMenuItem,
  a19 as AMessage,
  m13 as AMessageBox,
  s18 as APagination,
  s6 as APopover,
  a16 as AProgress,
  i5 as ARadio,
  s17 as ARadioGroup,
  l2 as ARate,
  i7 as ARotation,
  i8 as ARotationItem,
  s5 as AScrollbar,
  o10 as ASelect,
  a15 as ASlider,
  o14 as ASpace,
  l7 as ASubMenu,
  l10 as ASwitch,
  o16 as ATable,
  o4 as ATabs,
  o5 as ATabsPanel,
  o12 as ATag,
  l11 as ATree,
  d7 as Tooltip,
  t as default
};
//# sourceMappingURL=amu-ui.js.map
