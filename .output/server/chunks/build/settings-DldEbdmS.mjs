import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedTheme = ref("gothic");
    const themes = [
      { id: "gothic", name: "Dark Gothic", description: "Deep purples & blacks", colors: [{ hex: "#9B7EBD" }, { hex: "#0D0D0F" }, { hex: "#2D2A38" }] },
      { id: "dracula", name: "Dracula", description: "Classic IDE palette", colors: [{ hex: "#BD93F9" }, { hex: "#282A36" }, { hex: "#FF79C6" }] },
      { id: "business", name: "Business", description: "Clean & professional", colors: [{ hex: "#2563EB" }, { hex: "#F8FAFC" }, { hex: "#1E293B" }] },
      { id: "pastel", name: "Lovely Pastel", description: "Red & pink pastels", colors: [{ hex: "#E91E8C" }, { hex: "#FFF5F8" }, { hex: "#4C1D35" }] }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-eerie-black rounded-lg text-gray-100" }, _attrs))}><section class="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md"><h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Thema</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"><!--[-->`);
      ssrRenderList(themes, (theme) => {
        _push(`<div role="button" tabindex="0" class="${ssrRenderClass([unref(selectedTheme) === theme.id ? "ring-2 ring-moonstone" : "bg-night", "cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-moonstone"])}"><div class="p-3 md:p-5"><h3 class="text-lg font-bold text-gray-200 mb-1">${ssrInterpolate(theme.name)}</h3><p class="text-xs md:text-sm text-gray-400 mb-3">${ssrInterpolate(theme.description)}</p><div class="flex gap-2 flex-wrap"><!--[-->`);
        ssrRenderList(theme.colors, (color, i) => {
          _push(`<div class="h-8 w-12 rounded" style="${ssrRenderStyle({ backgroundColor: color.hex })}"${ssrRenderAttr("title", color.name)}></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=settings-DldEbdmS.mjs.map
