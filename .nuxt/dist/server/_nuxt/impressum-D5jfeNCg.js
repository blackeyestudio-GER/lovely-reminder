import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "/Users/arthur.kielbasa/PhpstormProjects/lovely-reminder/node_modules/hookable/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "impressum",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-eerie-black rounded-lg p-4 md:p-8 shadow-md max-w-2xl mx-auto" }, _attrs))}><h1 class="text-2xl md:text-3xl font-bold text-gray-100 mb-6">Impressum</h1><div class="prose prose-invert max-w-none space-y-6 text-gray-200 text-sm md:text-base leading-relaxed"><section><h2 class="text-lg font-semibold text-moonstone mb-2">Angaben gemäß § 5 TMG</h2><p class="font-semibold">Blackeyestudio</p><p>Arthur Kielbasa</p><p>Hafenstr. 71</p><p>46242 Bottrop</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2><p>Arthur Kielbasa</p><p>Hafenstr. 71</p><p>46242 Bottrop</p></section><section><h2 class="text-lg font-semibold text-moonstone mb-2">Haftungsausschluss</h2><h3 class="font-semibold mt-3">Haftung für Inhalte</h3><p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p><h3 class="font-semibold mt-3">Haftung für Links</h3><p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p><h3 class="font-semibold mt-3">Urheberrecht</h3><p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/impressum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=impressum-D5jfeNCg.js.map
