import { _ as __nuxt_component_0 } from './nuxt-link-MOZoSEA2.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { Icon } from '@iconify/vue';
import { a as useRouter } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "task-add",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const text = ref("");
    const reactiveDays = ref(7);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-eerie-black rounded-lg p-4 md:p-6 shadow-md max-w-xl mx-auto" }, _attrs))}><h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Aufgabe hinzuf\xFCgen</h2><form class="flex flex-col gap-4"><div><label for="task-text" class="block text-sm font-semibold text-gray-200 mb-2">Aufgabe</label><input id="task-text"${ssrRenderAttr("value", unref(text))} type="text" required placeholder="z.B. Pflanzen gie\xDFen" class="w-full px-4 py-2 rounded-lg border-2 bg-night text-gray-200 placeholder-gray-500" style="${ssrRenderStyle({ borderColor: "var(--color-border)" })}"></div><div><label for="reactive-days" class="block text-sm font-semibold text-gray-200 mb-2"> Reaktiver Timer (Tage bis die Aufgabe wieder erscheint) </label><input id="reactive-days"${ssrRenderAttr("value", unref(reactiveDays))} type="number" min="1" max="365" class="w-full px-4 py-2 rounded-lg border-2 bg-night text-gray-200" style="${ssrRenderStyle({ borderColor: "var(--color-border)" })}"><p class="text-xs text-gray-400 mt-1">Wenn du diese Aufgabe abhakst, wird sie nach so vielen Tagen wieder aktiv.</p></div><div class="flex gap-3 mt-2"><button type="submit" class="btn-primary px-5 py-2 inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "heroicons:plus-20-solid",
        class: "w-5 h-5 mr-2"
      }, null, _parent));
      _push(` Aufgabe hinzuf\xFCgen </button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-neutral px-5 py-2 inline-flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Abbrechen `);
          } else {
            return [
              createTextVNode(" Abbrechen ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/task-add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=task-add-U_1CL6gU.mjs.map
