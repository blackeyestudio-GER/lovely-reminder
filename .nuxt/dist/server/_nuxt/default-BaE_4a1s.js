import { shallowRef, computed, defineComponent, h, mergeProps, useSSRContext, withCtx, createVNode, unref, createTextVNode, ref, watch } from "vue";
import { b as useNuxtApp, u as useHead } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-MOZoSEA2.js";
import { Icon } from "@iconify/vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as useUserSettings } from "./useUserSettings-Bvu9uI-b.js";
import "./useTasks-Bc018cnq.js";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/hookable/dist/index.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/unctx/dist/index.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/defu/dist/defu.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/ufo/dist/index.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/@unhead/vue/dist/index.mjs";
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = shallowRef(0);
  const isLoading = shallowRef(false);
  const error = shallowRef(false);
  const start = (opts2 = {}) => {
    error.value = false;
    set(0, opts2);
  };
  function set(at = 0, opts2 = {}) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish({ force: opts2.force });
    }
    progress.value = at < 0 ? 0 : at;
    opts2.force ? 0 : throttle;
    {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator ||= createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    hideDelay: {
      type: Number,
      default: 500
    },
    resetDelay: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      hideDelay: props.hideDelay,
      resetDelay: props.resetDelay,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${progress.value > 0 ? 100 / progress.value * 100 : 0}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppLogo",
  __ssrInlineRender: true,
  props: {
    size: { default: 40 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 64 64",
        width: __props.size,
        height: __props.size,
        class: "inline-block flex-shrink-0",
        "aria-hidden": "true"
      }, _attrs))}><path fill="currentColor" d="M32 50 C32 50 6 36 6 18 C6 8 14 4 22 4 C28 4 32 10 32 10 C32 10 36 4 42 4 C50 4 58 8 58 18 C58 36 32 50 32 50 Z"></path><g transform="translate(20, 10) scale(0.6)"><rect x="0" y="0" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.98"></rect><path d="M3 6 L5.5 8.5 L10 3" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.98"></path><line x1="16" y1="6" x2="36" y2="6" stroke="#ffffff" stroke-width="1.8" opacity="0.98"></line><rect x="0" y="18" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.98"></rect><line x1="16" y1="24" x2="40" y2="24" stroke="#ffffff" stroke-width="1.8" opacity="0.98"></line><rect x="0" y="36" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.98"></rect><line x1="16" y1="42" x2="34" y2="42" stroke="#ffffff" stroke-width="1.8" opacity="0.98"></line></g></svg>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppLogo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  emits: ["toggleMenu"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppLogo = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full px-3 md:px-5 py-3 md:py-4 mb-3 md:mb-4 drop-shadow-2xl flex flex-row items-center justify-between bg-eerie-black content-start" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex flex-row items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, {
              size: 36,
              class: "text-moonstone md:w-10 md:h-10"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-xl md:text-3xl lg:text-4xl text-moonstone"${_scopeId}>Lovely Reminder</span>`);
          } else {
            return [
              createVNode(_component_AppLogo, {
                size: 36,
                class: "text-moonstone md:w-10 md:h-10"
              }),
              createVNode("span", { class: "text-xl md:text-3xl lg:text-4xl text-moonstone" }, "Lovely Reminder")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button" class="bg-transparent border-none cursor-pointer p-1 md:p-0" aria-label="Open menu">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "heroicons:cog-6-tooth-20-solid",
        class: "w-7 h-7 md:w-8 md:h-8 text-moonstone"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FullScreenMenu",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["closeMenu"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-dropdown fixed top-16 right-4 z-50 w-64 bg-eerie-black rounded-lg shadow-2xl border-2 border-gray-600 overflow-hidden backdrop-blur-sm" }, _attrs))}><nav class="flex flex-col bg-eerie-black">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: ($event) => emit("closeMenu"),
          class: "flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "heroicons:clipboard-document-list-20-solid",
                class: "w-5 h-5 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Startseite</span>`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "heroicons:clipboard-document-list-20-solid",
                  class: "w-5 h-5 flex-shrink-0"
                }),
                createVNode("span", null, "Startseite")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/task-add",
          onClick: ($event) => emit("closeMenu"),
          class: "flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "heroicons:plus-circle-20-solid",
                class: "w-5 h-5 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Aufgabe hinzufügen</span>`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "heroicons:plus-circle-20-solid",
                  class: "w-5 h-5 flex-shrink-0"
                }),
                createVNode("span", null, "Aufgabe hinzufügen")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/settings",
          onClick: ($event) => emit("closeMenu"),
          class: "flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "heroicons:swatch-20-solid",
                class: "w-5 h-5 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Thema &amp; Einstellungen</span>`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "heroicons:swatch-20-solid",
                  class: "w-5 h-5 flex-shrink-0"
                }),
                createVNode("span", null, "Thema & Einstellungen")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/export",
          onClick: ($event) => emit("closeMenu"),
          class: "flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "heroicons:arrow-down-tray-20-solid",
                class: "w-5 h-5 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Export</span>`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "heroicons:arrow-down-tray-20-solid",
                  class: "w-5 h-5 flex-shrink-0"
                }),
                createVNode("span", null, "Export")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/import",
          onClick: ($event) => emit("closeMenu"),
          class: "flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Icon), {
                icon: "heroicons:arrow-up-tray-20-solid",
                class: "w-5 h-5 flex-shrink-0"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Import</span>`);
            } else {
              return [
                createVNode(unref(Icon), {
                  icon: "heroicons:arrow-up-tray-20-solid",
                  class: "w-5 h-5 flex-shrink-0"
                }),
                createVNode("span", null, "Import")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</nav></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FullScreenMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-full px-3 md:px-5 py-3 mt-auto drop-shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2 bg-eerie-black text-dim-gray border-t border-gray-700" }, _attrs))}><small class="text-xs md:text-sm text-center sm:text-left"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Lovely Reminder </small><nav class="flex flex-row items-center gap-4 text-xs md:text-sm" aria-label="Rechtliche Links">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/impressum",
    class: "text-gray-400 hover:text-moonstone transition-colors underline-offset-2 hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Impressum `);
      } else {
        return [
          createTextVNode(" Impressum ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/datenschutz",
    class: "text-gray-400 hover:text-moonstone transition-colors underline-offset-2 hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Datenschutz `);
      } else {
        return [
          createTextVNode(" Datenschutz ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwaInstallPrompt",
  __ssrInlineRender: true,
  setup(__props) {
    const showPrompt = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (showPrompt.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-20 left-3 right-3 md:left-auto md:right-6 md:w-96 bg-gray-700 rounded-lg shadow-2xl p-4 z-50 border-2 border-moonstone" }, _attrs))}><button type="button" class="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors" aria-label="Close">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "heroicons:x-mark-20-solid",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button><div class="flex items-start gap-3 pr-6"><div class="bg-moonstone p-2 rounded-lg flex-shrink-0">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "heroicons:arrow-down-tray-20-solid",
          class: "w-6 h-6 text-night"
        }, null, _parent));
        _push(`</div><div class="flex-1"><h3 class="text-white font-semibold mb-1">Lovely Reminder installieren</h3><p class="text-gray-300 text-sm mb-3">Zum Startbildschirm hinzufügen für schnellen Zugriff!</p><button type="button" class="w-full px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200" style="${ssrRenderStyle({ "background-color": "var(--color-success)", "color": "var(--color-text-secondary)" })}"> App installieren </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PwaInstallPrompt.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const { userSettings } = useUserSettings();
    const currentTheme = computed(() => userSettings.value.theme.selectedTheme || "gothic");
    watch(currentTheme, (newTheme) => {
    }, { immediate: true });
    useHead({
      titleTemplate: (title) => title ? `${title} - Lovely Reminder` : "Lovely Reminder"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-night min-h-screen flex flex-col",
        "data-theme": currentTheme.value
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, {
        throttle: 0,
        height: 2
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        onToggleMenu: ($event) => isMenuOpen.value = !isMenuOpen.value
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        "is-open": isMenuOpen.value,
        onCloseMenu: ($event) => isMenuOpen.value = false
      }, null, _parent));
      _push(`<div class="mx-auto max-w-screen-2xl w-full px-3 md:px-4 lg:px-6 py-3 md:py-4 flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BaE_4a1s.js.map
