import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "impressum",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-eerie-black rounded-lg p-4 md:p-8 shadow-md max-w-2xl mx-auto" }, _attrs))}><h1 class="text-2xl md:text-3xl font-bold text-gray-100 mb-6">Impressum</h1><div class="prose prose-invert max-w-none space-y-6 text-gray-200 text-sm md:text-base leading-relaxed"><section><h2 class="text-lg font-semibold text-moonstone mb-2">Angaben gem\xE4\xDF \xA7 5 TMG</h2><p class="font-semibold">Blackeyestudio</p><p>Arthur Kielbasa</p><p>Hafenstr. 71</p><p>46242 Bottrop</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">Verantwortlich f\xFCr den Inhalt nach \xA7 55 Abs. 2 RStV</h2><p>Arthur Kielbasa</p><p>Hafenstr. 71</p><p>46242 Bottrop</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">Haftungsausschluss</h2><h3 class="font-semibold mt-3">Haftung f\xFCr Inhalte</h3><p>Die Inhalte unserer Seiten wurden mit gr\xF6\xDFter Sorgfalt erstellt. F\xFCr die Richtigkeit, Vollst\xE4ndigkeit und Aktualit\xE4t der Inhalte k\xF6nnen wir jedoch keine Gew\xE4hr \xFCbernehmen.</p><h3 class="font-semibold mt-3">Haftung f\xFCr Links</h3><p>Unser Angebot enth\xE4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen.</p><h3 class="font-semibold mt-3">Urheberrecht</h3><p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=impressum-D5jfeNCg.mjs.map
