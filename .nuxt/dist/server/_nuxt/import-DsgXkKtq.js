import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import "./useUserSettings-Bvu9uI-b.js";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/hookable/dist/index.mjs";
import { a as useRouter } from "../server.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/unctx/dist/index.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/defu/dist/defu.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/ufo/dist/index.mjs";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "import",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-eerie-black rounded-lg text-gray-100" }, _attrs))}><section class="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md max-w-lg mx-auto"><h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Einstellungen importieren</h2><p class="text-sm text-gray-400 mb-4">Importiere Thema und App-Einstellungen aus einer JSON-Datei. Keine Aufgabendaten werden importiert.</p><div class="flex flex-col gap-3 md:gap-4"><label for="importFile" class="btn-import cursor-pointer">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "heroicons:arrow-up-tray-20-solid",
        class: "w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3"
      }, null, _parent));
      _push(` Einstellungen importieren </label><input id="importFile" type="file" accept=".json" class="hidden"></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/import.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=import-DsgXkKtq.js.map
